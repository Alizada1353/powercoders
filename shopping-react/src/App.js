import React, { Component } from 'react';
import './App.css';
import ItemInput from './ItemInput'
import ClearList from './ClearList'
import ShoppingList from './ShoppingList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onClearList = this.onClearList.bind(this);
  }

  onClearList() {
    this.setState({items: []});
  }

  onAddItem(name, quantity) {
    let item = name;
    if (quantity !== '') {
      item = `(${quantity}) ` + item;
    }
    this.setState((prevState) => ({items: prevState.items.concat(item)}));
  }

  render() {
    return (
        <>
          <ItemInput onAddItem={this.onAddItem}/>
          <ClearList onClearList={this.onClearList}/>
          <ShoppingList items={this.state.items}/>
        </>
    );
  }
}


export default App;