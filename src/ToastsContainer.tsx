import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { WatchableStore } from 'watchable-stores';
import { DarkColors, LightColors } from './DefaultColors';
import { IToastsStore } from './index';

export enum ToastsContainerPosition {
    BOTTOM_CENTER,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
    TOP_CENTER,
    TOP_LEFT,
    TOP_RIGHT,
}

export interface IToastsContainerState {
    position: any;
    toasts: any[];
}

export interface IToastsContainerProps {
    position: ToastsContainerPosition;
    store: WatchableStore<IToastsStore>;
    lightBackground?: boolean;
    className?: string | string[];
}

export function ToastContainer({ ...props }: IToastsContainerProps) {}

export class ToastsContainer extends Component<IToastsContainerProps, IToastsContainerState> {
    private storeSubscriptionId: number;
    private timeoutArray: number[];

    constructor(props: IToastsContainerProps) {
        super(props);

        this.state = {
            position: {},
            toasts: [],
        };

        this.storeSubscriptionId = -1;
        this.timeoutArray = [];
    }

    public componentDidMount() {
        this.storeSubscriptionId = this.props.store.watch(data => {
            const toast = { ...data, id: Math.random() };
            this.setState({ toasts: [toast].concat(this.state.toasts) });
            this.timeoutArray.push(
                setTimeout(() => {
                    this.setState({ toasts: this.state.toasts.filter(t => t.id !== toast.id) });
                }, data.timer || 3000),
            );
        });

        const position: any = {};
        switch (this.props.position) {
            case ToastsContainerPosition.TOP_LEFT:
                position.top = 10;
                position.left = 10;
                break;
            case ToastsContainerPosition.TOP_RIGHT:
                position.top = 10;
                position.right = 10;
                break;
            case ToastsContainerPosition.TOP_CENTER:
                position.top = 10;
                position.left = '50%';
                position.transform = 'translateX(-50%)';
                break;
            case ToastsContainerPosition.BOTTOM_LEFT:
                position.bottom = 10;
                position.left = 10;
                break;
            case ToastsContainerPosition.BOTTOM_RIGHT:
                position.bottom = 10;
                position.right = 10;
                break;
            case ToastsContainerPosition.BOTTOM_CENTER:
                position.bottom = 10;
                position.left = '50%';
                position.transform = 'translateX(-50%)';
                break;
            default:
                position.bottom = 10;
                position.right = 10;
                break;
        }
        this.setState({ position });
    }

    public componentWillUnmount() {
        this.props.store.unwatch(this.storeSubscriptionId);
        this.timeoutArray.forEach(clearTimeout);
    }

    public render() {
        return ReactDOM.createPortal(this._renderContainer(), document.body);
    }

    private _renderContainer() {
        const style = this.props.lightBackground ? LightColors : DarkColors;
        return (
            <div style={this.state.position} className={'toasts-container ' + (this.props.className || '')}>
                {this.state.toasts.map(toast => {
                    return (
                        <div
                            key={toast.id}
                            className={'toast toast-' + toast.status + ' ' + toast.classNames}
                            style={style[toast.status]}
                        >
                            {toast.message}
                        </div>
                    );
                })}
            </div>
        );
    }
}
