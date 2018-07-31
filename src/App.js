import React, { Component } from 'react';
import routes from './routes'
import './reset.css'
import './app.css'



import Header from './components/Header/Header';
import Shopheader from './components/Shopheader/Shopheader';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="app">

        

          <Header />
          <Shopheader />
          {routes}
          <Footer />
        
      </div>
    );
  }
}

export default App;
