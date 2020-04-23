import * as React from 'react';
import {Component, createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react';
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

export const ToastsContext = createContext({
    toasts: [] as Toast[],
    success: () => undefined,
    info: () => undefined,
    warning: () => undefined,
    error: () => undefined,
});

export interface Toast {
    level: string;
    message: string;
}

export function ToastsContextProvider({ children }: { children: ReactNode }) {
    const value = useMemo(() => ({ toasts: [] }), []);

    return <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>;
}


function test () {
    const {toasts} = useContext(ToastsContext);
}
