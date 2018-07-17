import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Dish from './Dish';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      dishes: this.props.inventory,
      order: {}
    };

  }
  componentDidMount(){
    console.log(this.props)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  // componentDidMount() {
    // const { params } = this.props.match;
    // first re instate localStorage
    // const localStorageRef = localStorage.getItem(params.storeId);
    // if(localStorageRef) {
    //   this.setState({ order: JSON.parse(localStorageRef)});
    // }
    // this.ref = base.syncState(`${params.storeId}/dishes`, {
    //   context: this,
    //   state: 'dishes'
    // });
  // }
  // componentDidUpdate() {
  //   localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  // }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }
  
  addToOrder= key => {
    // 1.take a copy of stateless
    const order = { ...this.state.order};
    // 2.add to our order, or update order
    order[key] = order[key] + 1 || 1;
    // 3.set state to update our state object
    this.setState({ order });
  };

  render(){
    console.log('this.state.dishes',this.state);
    return (
      <div className="redux-in-restaurant">
      <div className="menu">
      {/* Header is a stateless Functional Component */}
        <Header tagline="Restaurant" />
        <ul className="dishes">
          {Object.keys(this.state.dishes).map( key => (
            <Dish
              key={key}
              index= {key}
              details={this.state.dishes[key]}
              addToOrder ={this.addToOrder}/>
          ))}
        </ul>
      </div>
       <Order dishes={this.state.dishes} order={this.state.order}/> {/* could also pass in using spread -> ...this.state */}
      </div>
    );
  }
}

function mapStateToProps(store){
  console.log('mapStateToProps',store);
  return { inventory: store.inventory }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
