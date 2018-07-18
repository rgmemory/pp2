import React, { Component } from 'react';
import routes from './routes'
import './reset.css'
import './app.css'



import Header from './components/Header/Header';
import Shopheader from './components/Shopheader/Shopheader';



class App extends Component {
  render() {
    return (
      <div className="app">

        

        {/* <div className="wrapper"> */}
          <Header />
          <Shopheader />
          {routes}
        {/* </div> */}
        
      </div>
    );
  }
}

export default App;
