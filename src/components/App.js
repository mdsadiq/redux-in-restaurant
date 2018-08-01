import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Dish from './Dish';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Inventory from './Inventory';
import { bulkUpload } from '../actions/inventory';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      dishes: this.props.inventoryTemp,
      order: {}
    };
  }
  componentDidMount(){
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({dishes: nextProps.inventoryTemp})
  }

  
  addToOrder = key => {
    // 1.take a copy of stateless
    const order = { ...this.state.order};
    // 2.add to our order, or update order
    order[key] = order[key] + 1 || 1;
    // 3.set state to update our state object
    this.setState({ order });
  };

  render(){
    console.log('this.state.dishes',this.state.dishes);
    return (
      <div className="redux-in-restaurant">
      <div className="menu">

      {/* Header is a stateless Functional Component */}
        <Header tagline="Restaurant" />
        {/* dishes loop */}
        <ul className="dishes">
          {Object.keys(this.state.dishes).map( key => (
            <Dish
                key={key}
                index= {key}
                details={this.state.dishes[key]}
                addToOrder ={this.addToOrder}
            />
          ))}
        </ul>
      </div>

       <Order 
          dishes={this.state.dishes} 
          order={this.state.order}
        />

       <Inventory  />
 
      </div>
    );
  }
}


// container code
function mapStateToProps(store){
  console.log('mapStateToProps',store);
  return { 
    inventoryTemp: store.inventory 
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);