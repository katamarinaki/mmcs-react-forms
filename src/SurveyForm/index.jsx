import React from 'react';

import * as cn from './styles.module.scss';

function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
}

export class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      gender: 'female',
      isEmployed: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, age, gender, isEmployed } = this.state;

    alert(
      `${name}, age ${age}, ${capitalize(gender)}. Currently is${
        !isEmployed ? ' not' : ''
      } employed`
    );
  }

  render() {
    const { name, age, gender, isEmployed } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={cn.form}>
        <h2>Multi value form</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Type your name"
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            name="age"
            type="number"
            value={age}
            onChange={this.handleInputChange}
            placeholder="Type your age"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select
            name="gender"
            value={gender}
            onChange={this.handleInputChange}
            placeholder="Select gender"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Are you employed?</label>
          <input
            name="isEmployed"
            className={cn.check}
            type="checkbox"
            checked={isEmployed}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}
