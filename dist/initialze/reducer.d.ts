interface InitializeState {
    pending: boolean;
    progress: number;
}
interface InitializeAction {
    type: string;
    payload: InitialiizePayload;
}
interface InitialiizePayload {
    pending: number;
    tag: string;
}
declare const _default: (state: InitializeState, action: InitializeAction) => any;
export default _default;
