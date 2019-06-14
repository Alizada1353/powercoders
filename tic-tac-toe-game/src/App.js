import React, { Component } from 'react';

import main from './components/main'
import about from './components/about'
import {BrowserRouter, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' component={main}/>
          <Route path='/about' component={about}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
