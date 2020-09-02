import React, { Component } from 'react';
import { Products } from '../../components';

class Home extends Component {
  // rendering fruits
  render() {
    return (
      <div>
        <Products category="Fruits" />
      </div>
    );
  }
}

export default Home;
