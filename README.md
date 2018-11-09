# kenote-react-utils
This is a React Utils set.


## Installation

```bash
yarn add kenote-react-utils
```

## Usages

### `createRouter`

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

### `renderRouteConfig`

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