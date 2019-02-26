import React, {Component} from 'react';

class ItemInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    };

    this.onItemChange = this.onItemChange.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }
  onItemChange(event) {
    this.setState({item: event.target.value});
  }
  onQuantityChange(event) {
    this.setState({quantity: event.target.value});
  }

  render() {
    return (
        <div>
          <label htmlFor="item"> Type the item you want to buy </label>
          <input onChange={this.onQuantityChange} type="text" id="quantity" size="8" placeholder="quantity"/>
          <input onChange={this.onItemChange} type="text" id="item" placeholder="Type something to buy"/>
          <button onClick={() => this.props.onAddItem(this.state.item.trim(), this.state.quantity.trim())}
                  disabled={this.state.item.trim() === ''}
                  id="add">Add item</button>
        </div>
    );
  }
}

export default ItemInput;
