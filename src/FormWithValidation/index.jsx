import React from 'react';
import { InputControl } from '../InputControl';

import * as cn from './styles.module.scss';

export class FormWithValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, location } = this.state;
    const isFormValid =
      this.validateName(name) && this.validateLocation(location);

    if (isFormValid) {
      alert(`Success! Name: ${name}, location: ${location}`);
    } else {
      alert('Some of form inputs are invalid!');
    }
  }

  validateName(value) {
    return value !== 'Олег';
  }

  validateLocation(value) {
    return !value.length || value.length >= 3;
  }

  render() {
    const { name, location } = this.state;
    return (
      <form className={cn.root} onSubmit={this.handleSubmit}>
        <h2>Form with validation</h2>
        <InputControl
          name="name"
          label="What is your name?"
          placeholder="Type your name"
          value={name}
          onChange={this.handleInputChange}
          validate={this.validateName}
          errorMessage="Не Олег"
        />
        <InputControl
          name="location"
          label="Where are you from?"
          placeholder="Type your location"
          value={location}
          onChange={this.handleInputChange}
          validate={this.validateLocation}
          errorMessage="Value should contain more than 2 chars"
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
