import {WatchableStore} from "watchable-stores";

export interface IToastsStore {
    status: string;
    message: string | HTMLElement;
    timer: number;
    classNames: string[] | string;
}

class Store extends WatchableStore<IToastsStore> {
    constructor() {
        super({status: "", message: "", timer: 0, classNames: ""});
    }

    public success(message: string | HTMLElement, timer?: number, classNames?: string | string[]): void {
        this._toast("success", message, timer, classNames);
    }

    public info(message: string | HTMLElement, timer?: number, classNames?: string | string[]): void {
        this._toast("info", message, timer, classNames);
    }

    public warning(message: string | HTMLElement, timer?: number, classNames?: string | string[]): void {
        this._toast("warning", message, timer, classNames);
    }

    public error(message: string | HTMLElement, timer?: number, classNames?: string | string[]): void {
        this._toast("error", message, timer, classNames);
    }

    private _toast(status: string, message: string | HTMLElement,
                   timer?: number, classNames?: string | string[]): void {
        this.data = {
            classNames: classNames || "",
            message,
            status,
            timer: timer || 3000,
        };
    }
}

export const ToastsStore = new Store();
