import React, {Component} from 'react';

class ShoppingList extends Component{
  render() {
    return (
        <ol>
          {this.props.items.map((item, index) => <li key={index}>{item}
          <button onClick={() => this.props.onDeleteItem(index)} id="delete">Delete</button></li>)}
        </ol>
    );
  }
}

export default ShoppingList;
