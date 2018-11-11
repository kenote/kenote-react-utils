# kenote-react-utils
This is a React Utils set.


## Installation

```bash
yarn add kenote-react-utils
```

## Usages

### createRouter

```js
// routerConfig.js
import { createRouter } from 'kenote-react-utils'
import AppEntry from '../containers/app'
import { PageNotFound } from '../components'
import * as Pages from '../pages'

export default createRouter({
  context: '/',
  entry: AppEntry,
  features: Pages,
  notFound: PageNotFound
})
```

```js
// pages/index.js
export { default as Home } from './home'
export { default as About } from './about'
```

```js
// pages/home/index.js
import Screen from './screen'

const routes = {
  path: '/',
  name: '主页',
  routes: [
    { 
      path: 'default', 
      name: '主页', 
      component: Screen, 
      isIndex: true,
    },
  ]
}

export default routes
```

```js
// pages/about/index.js
import Screen from './screen'
import Team from './team'

const routes = {
  path: '/about',
  name: '关于',
  routes: [
    {
      path: 'default', 
      name: '关于', 
      component: Screen, 
      isIndex: true,
    },
    {
      path: 'team',
      name: '团队',
      component: Team
    }
  ]
}

export default routes
```

### renderRouteConfig

```jsx
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from '../store/history'
import { Switch, Route } from 'react-router-dom'
import { renderRouteConfig } from 'kenote-react-utils'

export default class Root extends PureComponent {

  static propTypes = {
    store: PropTypes.object.isRequired,
    routeConfig: PropTypes.array.isRequired,
  }

  render () {
    const { store, routeConfig } = this.props
    const children = renderRouteConfig(null, routeConfig, '/', { Switch, Route })
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {children}
        </ConnectedRouter>
      </Provider>
    )
  }
}
```

## Initialize

```js
// reducer.js
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { initializeReducer as initialize } from 'kenote-react-utils/dist/initialze'

export default combineReducers({
  router,
  initialize
})
```

```jsx
// app.jsx
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { InitializeComponent } from 'kenote-react-utils/dist/initialze'
import * as initializeActions from 'kenote-react-utils/dist/initialze/actions'
import '../styles/common.scss'

@connect(
  state => ({
    pending: state.initialize.pending,
    progress: state.initialize.progress
  }),
  dispatch => ({
    actions: bindActionCreators({ ...initializeActions }, dispatch)
  })
)
export default class AppEntry extends PureComponent {

  constructor (props) {
    super(props)
  }

  render () {
    let { children, pending, progress, actions } = this.props
    let { initialProgress, initialComplete } = actions
    return (
      <InitializeComponent {...{ pending, progress }} actions={{ initialProgress, initialComplete }} >
        {children}
      </InitializeComponent>
    )
  }
}
```

```js
// webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'kenote-react-utils/dist/initialize/browser.js',
        to: 'initialize.browser.js',
        content: '../node_modules/'
      },
      {
        from: 'kenote-react-utils/dist/initialize/browser.css',
        to: 'initialize.browser.css',
        content: '../node_modules/'
      },
    ])
  ]
}
```

```html
<!doctype html>
<html lang="en">
<head>
  <title>React App</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <link href="./initialize.browser.css" rel="stylesheet">
</head>
<body>
  <div id="root">
  </div>
  <script type="text/javascript" src="./initialize.browser.js"></script>
</body>
</html>
```