import React, { Component } from 'react';
import './App.scss';

import meals from './meals.json';
import MealBox from './Component/MealBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: meals,
      showFrom: false,
      search: '',
      arr: []
    };
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      //the array of meals is being rendered here
      <div className="App">
        {this.state.meals.map(meals => {
          return <MealBox {...meals} />;
        })}
      </div>
    );
  }
}

export default App;
