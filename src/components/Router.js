import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';
import Inventory from './Inventory';
import TestAPI from '../containers/TestAPI';
import InventoryAnalytics from './Analytics';

// stateless functional component
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/" component={App} />
      <Route path="/inventory"  component={Inventory} /> 
      <Route path="/testapi"  component={TestAPI} />
      <Route path="/analytics"  component={InventoryAnalytics} />
      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>
);
export default Router;
