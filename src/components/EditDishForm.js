import React from 'react';

class EditDishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    // update that dish
    // 1. take copy of current dish
    const updatedDish = {
      ...this.props.dish,
    [event.currentTarget.name]: event.currentTarget.value};
    this.props.updateDish(this.props.index, updatedDish);
  }
  render() {
    return (
      <div className="dish-edit">
      <input type="text" name="name" value={this.props.dish.name} onChange={this.handleChange}/>
      <input type="text" name="price" value={this.props.dish.price} onChange={this.handleChange}/>
      <select type="text" name="status" value={this.props.dish.status} onChange={this.handleChange}>
        <option value="available">Available!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" value={this.props.dish.desc} onChange={this.handleChange}></textarea>
      <input type="text" name="image" value={this.props.dish.image} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default EditDishForm;
