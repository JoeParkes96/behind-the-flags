import './App.css';

import React, { Component } from 'react';

import FlagList from './components/flagList/FlagList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <FlagList />
        <Footer />
    </div>
    );
  }
}

export default App;
