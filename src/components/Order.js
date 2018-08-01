import React from 'react';
import { formatPrice } from '../helpers'
import { Link } from 'react-router-dom';

class Order extends React.Component {
  renderOrder = key => {  //key = dish2
    const dish = this.props.dishes[key];  // {}
    const count = this.props.order[key]; //1
    console.log(key, count, dish)
    const isAvailable = dish && dish.status === 'available'; // true
    // make sure dish is loaded before continuing
    if(!dish)return null;
    if(!isAvailable){
      return (
        <li key={key}>
          Sorry { dish ? dish.name: 'dish'} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
      {count} lbs {dish.name}
      <p>{formatPrice(count * dish.price)}</p>
      </li>
  );
  }
  render() {
    const orderIds = Object.keys(this.props.order); // ["dish1", "dish2"]
    
    const total = orderIds.reduce((prevTotal, key) => {
      const dish = this.props.dishes[key];     // {name: "Peri Peri Paneer", image: "/images/PeriPeriPaneer.jpg", desc: "Peri Peri flavoured with smoked Paneer with mint chutney.", price: 12000, status: "available"}
      const count = this.props.order[key];    // 1
      const isAvailable = dish && dish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * dish.price); // 30000 
      }
      return prevTotal;
    }, 0); 

    
    
    
    {/* take in data and returns tally checkout javascript30.com*/}
    return (
      <div className="order-wrap">
      <h2>Order</h2>
        <ul className="order">
        {orderIds.map(this.renderOrder)} {/* key => <li>{key}</li>) */}
        </ul>
        <div className="total">
          <strong>Total:</strong>
            <strong style={{right: 15, position: 'absolute'}}>{formatPrice(total)}</strong>
        </div>
        {/* <h5 style={{right: 15, position: 'absolute', bottom: 0}}><Link to="/inventory"> Go to inventroy</Link></h5> */}
      </div>
      
    );
  }
}

export default Order;
