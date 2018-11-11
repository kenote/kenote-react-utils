import * as React from 'react';
interface Props {
    pending?: boolean;
    actions?: {
        initialProgress: Function;
        initialComplete: Function;
    };
    progress?: number;
    children?: React.ReactNode;
}
export declare class InitializeComponent extends React.PureComponent {
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): {};
}
export declare const connectInitialize: (tagName: string, bindActionCreators: Function) => Function[];
export {};
