export const INITIALIZE_PENDING: string = '@@initialze/PENDING'
export const INITIALIZE_COMPLETE: string = '@@initialze/COMPLETE'

export const initialProgress = (pending: number, times: number = 300): any => dispatch => {
  setTimeout(() => {
    dispatch({
      type: INITIALIZE_PENDING,
      payload: { pending }
    })
  }, times)
}

export const initialComplete = (times: number = 500): any => dispatch => {
  return setTimeout(() => {
    dispatch({
      type: INITIALIZE_COMPLETE
    })
  }, times)
}