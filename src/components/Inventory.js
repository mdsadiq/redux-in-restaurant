import React from 'react';
import PropTypes from 'prop-types';
import AddDishForm from './AddDishForm';
import EditDishForm from './EditDishForm';
import sampleDishes from '../sample-dishes'
import { Link, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { bulkUpload, addItem } from '../actions/inventory'
import InventoryAnalytics from './Analytics';


class Inventory extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
      dishes: this.props.inventory || {}
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({dishes: nextProps.inventory})
  }

  addDish = dishRef =>{

    // 1. Take a copy of the existing state
    // const dishes = {...this.state.dishes};
    // 2. add new dish to dishes variable
    // dishes[`dish${Date.now()}`] = dish;
     // 3. set the new dishes object to state
    //  this.props.addItem({ dishes });
    const dishData = {
      name: dishRef.nameRef,
      image: dishRef.imageRef,
      desc: dishRef.descRef,
      status: dishRef.statusRef,
      price: dishRef.priceRef
    }
   const id = `dish${Date.now()}`
    const dish = { [id] : dishData }
    console.log(dish)
     this.props.addItem(dish);
  }

  updateDish=(key, updatedDish)=>{
    const dishes = {...this.state.dishes};
    dishes[key] = updatedDish

    this.setState({
      dishes
    })
  }

  loadSampleDishes=()=>{
    this.props.bulkUpload(sampleDishes)
  }

  render() {
    console.log(this.props, this.state.dishes)

    return (
    // <div className="redux-in-restaurant">
      <div className="menu">
        <div className="inventory">
          <h2>Inventory</h2>


          {Object.keys(this.state.dishes)
            .map(key => <EditDishForm 
                            key={key} 
                            index={key} 
                            dish={this.state.dishes[key]} 
                            updateDish={this.updateDish} />)}



          <AddDishForm 
            addDish={this.addDish}
            />
          
          <button onClick={this.loadSampleDishes}>Load Sample Dishes</button>
          
          {/* <button> <Link to="/inventory/analytics">show Analytics</Link></button> */}
          
          {/* <h4 style={{textAlign: 'right'}}><Link to="/store">GO TO ORDER</Link></h4> */}
          
        </div>
            
      {/* <Switch>
        <Route path="/inventory/analytics" component={InventoryAnalytics} />
      </Switch> */}
      </div>
  
  
      // </div>
    );
  }
}

function mapStateToProps(store){
  return { inventory: store.inventory}
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({ bulkUpload, addItem }, dispatch)
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
  
Inventory.propTypes = {
  inventry: PropTypes.object,
  bulkUpload: PropTypes.func
}

