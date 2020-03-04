import React, { Component } from 'react';
import './App.scss';

import meals from './meals.json';

import MealBox from './Component/MealBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: meals
    };
  }

  render() {
    return <div>{<MealBox />}</div>;
  }
}

export default App;
