import React, {Component} from 'react';

class ClearList extends Component{
  render() {
    return (
    <button onClick={this.props.onClearList} id="clear"> clear list</button>
    )
  }
}

export default ClearList;
