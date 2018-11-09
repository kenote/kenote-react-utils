import * as React from 'react'

interface RouteConfig {
  context: string;
  entry: any,
  features: object,
  notFound: any,
}

interface Route {
  path: string;
  name?: string;
  component?: any;
  routes?: Array<Route>;
  isIndex?: boolean;
  exact?: boolean;
  autoIndexRoute?: boolean;
}

const getRoutes = (Features: object): Array<Route> => {
  let Routes: Array<Route> = []
  for (let e of Object.keys(Features)) {
    Routes.push(Features[e])
  }
  return Routes
}

function handleIndexRoute (route: Route): void {
  if (!route.routes || !route.routes.length) {
    return
  }
  let indexRoute: Route = route.routes.find(child => child.isIndex)
  if (indexRoute) {
    let first: Route = indexRoute
    first.path = route.path
    first.exact = true
    first.autoIndexRoute = true
    route.routes.unshift(first)
  }
  route.routes.forEach(handleIndexRoute)
}

export function createRouter (options: RouteConfig): Array<Route> {
  let Routes: Route = {
    path: options.context || '/',
    component: options.entry,
    routes: getRoutes(options.features).concat({
      path: '*',
      name: 'Page not found',
      component: options.notFound
    })
  }
  Routes.routes.filter(r => r.component || (r.routes && r.routes.length > 0))
  let routes: Array<Route> = [Routes]
  routes.forEach(handleIndexRoute)
  return routes
}

export function renderRouteConfig (Container: any, routes: Array<Route>, contextPath: string, { Switch, Route }): any {
  let children: Array<any> = []
  let renderRoute = (item: Route, routeContextPath: string): void => {
    let newContextPath: string
    if (/^\//.test(item.path)) {
      newContextPath = item.path
    } else {
      newContextPath = `${routeContextPath}/${item.path}`
    }
    newContextPath = newContextPath.replace(/\/+/g, '/')
    if (item.component && item.routes) {
      children.push(renderRouteConfig(item.component, item.routes, newContextPath, { Switch, Route }))
    } else if (item.component) {
      children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
    } else if (item.routes) {
      item.routes.forEach(r => renderRoute(r, newContextPath))
    }
  }
  routes.forEach(item => renderRoute(item, contextPath))
  if (!Container) return <Switch>{children}</Switch>
  return (
    <Container key={contextPath}>
      <Switch>
        {children}
      </Switch>
    </Container>
  )
}
