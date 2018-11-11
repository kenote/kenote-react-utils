export const INITIALIZE_PENDING: string = '@@initialze/PENDING'
export const INITIALIZE_COMPLETE: string = '@@initialze/COMPLETE'

export const initialProgress = (pending: number, tag: string = null): any => dispatch => {
  setTimeout(() => {
    dispatch({
      type: INITIALIZE_PENDING,
      payload: { pending, tag }
    })
  }, 300)
}

export const initialComplete = (tag: string = null): any => dispatch => {
  return setTimeout(() => {
    dispatch({
      type: INITIALIZE_COMPLETE,
      payload: { tag }
    })
  }, 500)
}