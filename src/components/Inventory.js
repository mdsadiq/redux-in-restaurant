import React from 'react';
import AddDishForm from './AddDishForm';
import EditDishForm from './EditDishForm';
import sampleDishes from '../sample-dishes'
import { Link, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { bulkUpload } from '../actions/inventory'
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

  addDish = dish =>{

    // 1. Take a copy of the existing state
    const dishes = {...this.state.dishes};
    // 2. add new dish to dishes variable
    dishes[`dish${Date.now()}`] = dish;
     // 3. set the new dishes object to state
     this.setState({ dishes });
  }

  updateDish=(key, updatedDish)=>{
    const dishes = {...this.state.dishes};
    dishes[key] = updatedDish

    this.setState({
      dishes
    })
  }

  loadSampleDishes=()=>{
    const { bulkUpload } = this.props
    console.log(sampleDishes);
    bulkUpload(sampleDishes)
    // this.setState({
    //   dishes: sampleDishes
    // })
  }

  render() {
    console.log(this.props)

    return (
    <div className="redux-in-restaurant">
      <div className="menu" style={{flex: 2}}>
        <div className="inventory">
          <h2>Inventory</h2>
          <Link to="/store"><h3>GO TO ORDER</h3></Link>
          {Object.keys(this.state.dishes)
            .map(key => <EditDishForm 
                            key={key} index={key} dish={this.state.dishes[key]} updateDish={this.updateDish} />)}
          <AddDishForm addDish={this.addDish}/>
          
          <button onClick={this.loadSampleDishes}>Load Sample Dishes</button>
          
          <button> <Link to="/inventory/analytics">show Analytics</Link></button>
        </div>
      </div>
      
      <Switch>
        <Route path="/inventory/analytics" component={InventoryAnalytics} />
      </Switch>
      </div>
    );
  }
}
function mapStateToProps(store){
  return { inventory: store.inventory}
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({bulkUpload}, dispatch)
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
  

