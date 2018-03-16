/// <reference types="react" />
import * as React from "react";
export declare class ToastContainer extends React.Component<{}, {
    toasts: JSX.Element[];
}> {
    constructor(props?: any);
    showToast(message: JSX.Element): void;
    _onToastDismiss(index: number): void;
    render(): JSX.Element;
}
export declare class Toast extends React.Component<{
    message: JSX.Element;
    onDismiss: Function;
}, {}> {
    render(): JSX.Element;
}
