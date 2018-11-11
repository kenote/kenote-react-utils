import { INITIALIZE_COMPLETE, INITIALIZE_PENDING } from './actions'

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
  tag: string
}

const createInitializeReducer = () => {
  const initState: InitializeState = {
    pending: true,
    progress: 15
  }
  return (state: InitializeState = initState, action: InitializeAction) => {
    let handlers: object = {
      [INITIALIZE_COMPLETE]: (state: InitializeState, action: InitializeAction): InitializeState => {
        return { ...state, pending: false }
      },
      [INITIALIZE_PENDING]: (state: InitializeState, action: InitializeAction): InitializeState => {
        return { ...state, progress: action.payload.pending }
      }
    }
    let handler: Function = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}

export default createInitializeReducer()