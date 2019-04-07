import React, { Component } from 'react';

// styles
import './App.css';

// library components
import { BrowserRouter as Router } from 'react-router-dom';

// layout components
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
// import ParallaxSplash from './components/layouts/ParallaxSplash';


class App extends Component {
  render() {
    return (
      <Router basename={'/react-sites/react-template'}>
        <div>
          <Header />
          {/* <ParallaxSplash /> */}
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
