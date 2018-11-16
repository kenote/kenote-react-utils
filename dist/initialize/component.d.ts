import * as React from 'react';
interface InitializeProps {
    pending?: boolean;
    actions?: {
        initialProgress: Function;
        initialComplete: Function;
    };
    progress?: number;
    animation?: string;
    waitimes: number;
    children?: React.ReactNode;
}
export declare class InitializeComponent extends React.PureComponent<InitializeProps, any> {
    static defaultProps: InitializeProps;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): {};
}
export {};
