import * as React from 'react'

interface InitializeProps {
  pending?: boolean
  actions?: {
    initialProgress: Function
    initialComplete: Function
  }
  progress?: number
  animation?: string
  waitimes: number
  children?: React.ReactNode
}

export class InitializeComponent extends React.PureComponent<InitializeProps, any> {

  static defaultProps = {
    pending: false,
    progress: 15,
    animation: undefined,
    waitimes: 500,
    actions: {
      initialProgress: function () {},
      initialComplete: function () {}
    }
  }

  constructor (props: InitializeProps) {
    super(props)
  }

  componentDidMount () {
    let props: InitializeProps = this.props
    props.actions && props.actions.initialProgress(65)
  }

  componentDidUpdate (prevProps, prevState) {
    const { pending, progress } = prevProps
    let props: InitializeProps = this.props
    if (props.pending) {
      props.progress === 65 && props.actions.initialProgress(100)
      props.progress === 100 && props.actions.initialComplete(this.props.waitimes)
    }
  }

  render () {
    let props: InitializeProps = this.props
    let { pending, progress, children, animation } = props
    return pending ? (
      <div className="initial-pending" style={progress === 100 && animation ? { animation } : {}}>
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