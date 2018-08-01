import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
  // ===In line (if it's only used 1 time ======)
  /* handleClick = () => {
    this.props.addToOrder(this.props.index);
  } */
  render() {
    console.log(this.props)
  // const image = this.props.details.image;
  // const name =this.props.details.name;

  // desctructuring :
  const {image, name, price, desc, status} = this.props.details;
  const isAvailable = status === 'available';
    return (
      <li className="menu-dish">
        <img src={image} alt={name} height={90} width={150} />
        <h3 className="dish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled ={ !isAvailable } onClick={() => this.props.addToOrder(this.props.index)}>
        {isAvailable ? 'Add To Order' : 'SOLD OUT!'}
        </button>
      </li>
    )

  }
}

export default Dish;
