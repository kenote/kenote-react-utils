import * as React from 'react'
import { initialComplete, initialProgress } from './actions'

interface Props {
  pending?: boolean
  actions?: {
    initialProgress: Function
    initialComplete: Function
  }
  progress?: number
  children?: React.ReactNode
}

export class InitializeComponent extends React.PureComponent {

  constructor (props: Props) {
    super(props)
  }

  componentDidMount () {
    let props: Props = this.props
    props.actions && props.actions.initialProgress(65)
  }

  componentDidUpdate (prevProps, prevState) {
    const { pending, progress } = prevProps
    let props: Props = this.props
    if (props.pending) {
      props.progress === 65 && props.actions.initialProgress(100)
      props.progress === 100 && props.actions.initialComplete()
    }
  }

  render () {
    let props: Props = this.props
    let { pending, progress, children } = props
    return pending ? (
      <div className="initial-pending">
        <div className="progress-span">Loading... {progress}%</div>
        <div className="layout-progress-bar">
          <div className="progress-bar-container">
            <div className="progress-bar-pending" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    ) : children
  }
}

const stateToProps = (state: object, picks: Array<string> = []): object => {
  let props: object = {}
  for (let key of picks) {
    props[key] = state[key]
  }
  return props
}

export const connectInitialize = (tagName: string, bindActionCreators: Function): Array<Function> => [
  (state: object) => stateToProps(state[tagName], ['pending', 'progress']),
  (dispatch: any) => ({
    actions: bindActionCreators({ initialComplete, initialProgress }, dispatch)
  })
]