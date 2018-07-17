import React from 'react';

class AddDishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imagesRef = React.createRef();

  createDish = (event) => {
    // 1. stop the form form submitting
    event.preventDefault();
    // 2. pull values from input

    const dish = {
      nameRef : this.nameRef.value,
      priceRef : parseFloat(this.priceRef.value), //1054 cents, no decimals
      statusRef : this.statusRef.value,
      descRef : this.descRef.value,
      imagesRef : this.imagesRef.value
    }
    this.props.addDish(dish);
    // refresh the form
    event.currentTarget.reset();

  }
  render() {
    return (

      <form className="dish-edit" onSubmit= {this.createDish}>
        <input name="name" ref={(ref)=>this.nameRef=ref} type="text" placeholder="Name" />
        <input name="price" ref={(ref)=>this.priceRef=ref} type="text" placeholder="Price" />
        <select name="status" ref={(ref)=>this.statusRef=ref}>
          <option value="available">Available</option>
          <option value="unavailable">Sold Out!</option>

        </select>
        <textarea name="desc" ref={(ref)=>this.descRef=ref} placeholder="Desc"></textarea>
        <input name="image" ref={(ref)=>this.imagesRef=ref} type="text" placeholder="Image" />
        <button type="submit"> +Add Dish</button>
      </form>


    )

  }
}

export default AddDishForm;
