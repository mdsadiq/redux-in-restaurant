import React from 'react';
import { formatPrice } from '../helpers'
import { Link } from 'react-router-dom';

class Order extends React.Component {
  renderOrder = key => {
    const dish = this.props.dishes[key];
    const count = this.props.order[key];
    const isAvailable = dish && dish.status === 'available';
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
      {formatPrice(count * dish.price)}
      </li>
  );
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const dish = this.props.dishes[key];
      const count = this.props.order[key];
      const isAvailable = dish && dish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * dish.price);
      }
      return prevTotal;
    }, 0); {/* take in data and returns tally checkout javascript30.com*/}
    return (
      <div className="order-wrap">
      <Link to="/inventory"><h2>Order</h2></Link>
        <ul className="order">
        {orderIds.map(this.renderOrder)} {/* key => <li>{key}</li>) */}
        </ul>
        <div className="total">
          Total:
            <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
