interface RouteConfig {
    context: string;
    entry: any;
    features: object;
    notFound: any;
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
export declare function createRouter(options: RouteConfig): Array<Route>;
export declare function renderRouteConfig(Container: any, routes: Array<Route>, contextPath: string, { Switch, Route }: {
    Switch: any;
    Route: any;
}): any;
export {};
