
/* =======  Notes  ============ */
// everything in REACT is a Component
// A reusable piece of a website
// React kicks out HTML ('custom tags')
// all components pull on some data, and if the data changes it resfreshes everywhere

import React from 'react';
import { render } from 'react-dom';

import RestoApp from './components/index';

import './css/style.css';

render(<RestoApp />, document.getElementById('main'));

// props is how we get data into our components
// state is the data's home, props is the bus/car..to get the data where it needs to go
