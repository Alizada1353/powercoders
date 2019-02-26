import React, {Component} from 'react';

class ShoppingList extends Component{
  render() {
    return (
        <ol>
          {this.props.items.map((item) => <li>{item}</li>)}
        </ol>
    );
  }
}

export default ShoppingList;
