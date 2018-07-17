import React from 'react'
import Router from './Router'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../reducers'
import { BrowserRouter } from 'react-router-dom';
import LearnRouting from './LearnRouting';
// stateless functional component

// composeWithDevTools - a middleware that's used to log all actions
// it takes an object and returns a function that can accetpt a function
// composeWithDevTools - higher order function

const composeEnhancers = composeWithDevTools({ name: 'redux-in-restaurant', serialze: true })
const store = createStore(reducers, composeEnhancers())

// const store= createStore(reducers)
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
export default App;
