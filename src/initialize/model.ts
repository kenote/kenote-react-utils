

interface InitializeState {
  pending: boolean;
  progress: number;
}

export default (name: string): object => ({
  state: <InitializeState> {
    pending: true,
    progress: 15
  },
  reducers: <Object> {
    initialProgress (state: InitializeState, payload: number): InitializeState {
      return {
        ...state,
        progress: payload
      }
    },
    initialComplete (state: InitializeState, payload: any): InitializeState {
      return {
        ...state,
        pending: false
      }
    }
  },
  effects: <Function> (dispatch: object) => ({
    async initialProgressAsync (payload: number, rootState: InitializeState, times: number = 300) {
      await new Promise(resolve => setTimeout(resolve, times))
      dispatch[name].initialProgress(payload)
    },
    async initialCompleteAsync (payload: number, rootState: InitializeState, times: number = 500) {
      await new Promise(resolve => setTimeout(resolve, times))
      dispatch[name].initialComplete(payload)
    }
  })
})