import React, { Component } from 'react';
import routes from './routes'
import './reset.css'



import Header from './components/Header/Header';
import Shopheader from './components/Shopheader/Shopheader';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Shopheader />
        

        {routes}
      </div>
    );
  }
}

export default App;
