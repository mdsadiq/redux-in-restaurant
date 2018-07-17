import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TestAPI from '../containers/TestAPI'
import InventoryAnalytics from './Analytics';
import NotFound from './NotFound';

const Inventory = () => (
  <div>
    <h2> Inventory Page Rendered</h2>
  </div>
);

export default class LearnRouting extends Component {
    render() {
        return (
              
              <div>
                {/* Display link to navigate */}
                <Link to="inventory"> Go to Inventory </Link>
                <br />
                <Link to="testapi"> Go to Test Api </Link>
                <br />
                <Link to="analytics"> Go to Analytics </Link>
                <br />
                <Switch>
                  {/* Render component based on route  */}
                  <Route path="/inventory"  component={Inventory} /> 
                  <Route path="/testapi"  component={TestAPI} />
                  <Route path="/analytics"  component={InventoryAnalytics} />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              </div>
            // </BrowserRouter>
        );
    }
}