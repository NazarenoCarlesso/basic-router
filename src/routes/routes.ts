import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(() => import(/* WebpackChunkName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'));
// const Lazy1 = lazy(() => import(/* WebpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* WebpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* WebpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: 'lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];

export default routes;