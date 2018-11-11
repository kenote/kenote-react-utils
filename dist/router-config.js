"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var getRoutes = function (Features) {
    var Routes = [];
    for (var _i = 0, _a = Object.keys(Features); _i < _a.length; _i++) {
        var e = _a[_i];
        Routes.push(Features[e]);
    }
    return Routes;
};
function handleIndexRoute(route) {
    if (!route.routes || !route.routes.length) {
        return;
    }
    var indexRoute = route.routes.find(function (child) { return child.isIndex; });
    if (indexRoute) {
        var first = indexRoute;
        first.path = route.path;
        first.exact = true;
        first.autoIndexRoute = true;
        route.routes.unshift(first);
    }
    route.routes.forEach(handleIndexRoute);
}
function createRouter(options) {
    var Routes = {
        path: options.context || '/',
        component: options.entry,
        routes: getRoutes(options.features).concat({
            path: '*',
            name: 'Page not found',
            component: options.notFound
        })
    };
    Routes.routes.filter(function (r) { return r.component || (r.routes && r.routes.length > 0); });
    var routes = [Routes];
    routes.forEach(handleIndexRoute);
    return routes;
}
exports.createRouter = createRouter;
function renderRouteConfig(Container, routes, contextPath, _a) {
    var Switch = _a.Switch, Route = _a.Route;
    var children = [];
    var renderRoute = function (item, routeContextPath) {
        var newContextPath;
        if (/^\//.test(item.path)) {
            newContextPath = item.path;
        }
        else {
            newContextPath = routeContextPath + "/" + item.path;
        }
        newContextPath = newContextPath.replace(/\/+/g, '/');
        if (item.component && item.routes) {
            children.push(renderRouteConfig(item.component, item.routes, newContextPath, { Switch: Switch, Route: Route }));
        }
        else if (item.component) {
            children.push(React.createElement(Route, { key: newContextPath, component: item.component, path: newContextPath, exact: true }));
        }
        else if (item.routes) {
            item.routes.forEach(function (r) { return renderRoute(r, newContextPath); });
        }
    };
    routes.forEach(function (item) { return renderRoute(item, contextPath); });
    if (!Container)
        return React.createElement(Switch, null, children);
    return (React.createElement(Container, { key: contextPath },
        React.createElement(Switch, null, children)));
}
exports.renderRouteConfig = renderRouteConfig;
