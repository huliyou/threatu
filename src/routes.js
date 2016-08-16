import React from 'react';

import { Route, IndexRoute } from 'react-router';

import RootContainer from './container/RootContainer';
import AdminContainer from './container/AdminContainer';
import AppContainer from './container/AppContainer';

import ProductGrid from './components/ProductGrid';
import UploadDesign from './components/UploadDesign';
import DIY from './components/DIY';

/**
 * Admin Component
 */
import ProductList from './components/ProductList';
import DIYsList from './components/DIYsList';
import DesignList from './components/DesignList';

import * as RoutingURL from './core/RoutingURL/RoutingURL';

const routes = (
  <Route path="/" component={RootContainer} >
    <Route path={RoutingURL.Admin()} component={AdminContainer} >
      <IndexRoute component={ProductList} />
      <Route path={RoutingURL.ProductList()} component={ProductList} />
      <Route path={RoutingURL.DIYsList()} component={DIYsList} />
      <Route path={RoutingURL.DesignList()} component={DesignList} />
    </Route>
    { /* <Route path={RoutingURL.Login()} component={LoginContainer} /> */ }
    <Route path={RoutingURL.App()} component={AppContainer}>
      <Route path={RoutingURL.UploadDesign()} component={UploadDesign} />
      <Route path={RoutingURL.ProductGrid()} component={ProductGrid} />
      <Route path={RoutingURL.DIY()} component={DIY} />
    </Route>
  </Route>
);

export default routes;
