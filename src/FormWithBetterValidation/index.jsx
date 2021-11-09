import React from 'react';
import { BetterInputControl } from '../BetterInputControl';

import * as cn from './styles.module.scss';

export class FormWithBetterValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // updated
      name: { value: '', error: null },
      location: { value: '', error: null }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: { value, error: null } });
  }

  validateForm() {
    const { name, location } = this.state;

    const nameError = this.validateName(name.value);
    const locationError = this.validateLocation(location.value);

    if (nameError) {
      this.setState({ name: { value: name.value, error: nameError } });
    }

    if (locationError) {
      this.setState({
        location: { value: location.value, error: locationError }
      });
    }

    return !nameError && !locationError;
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, location } = this.state;
    const isFormValid = this.validateForm();

    if (isFormValid) {
      alert(`Success! Name: ${name.value}, location: ${location.value}`);
    }
  }

  validateName(value) {
    return value === 'Олег' ? 'Не Олег' : null;
  }

  validateLocation(value) {
    return value.length > 0 && value.length < 3
      ? 'Value should contain at least 3 chars'
      : null;
  }

  render() {
    const { name, location } = this.state;
    return (
      <form className={cn.root} onSubmit={this.handleSubmit}>
        <h2>Form with better validation</h2>
        <BetterInputControl
          name="name"
          label="What is your name?"
          placeholder="Type your name"
          value={name.value}
          errorMessage={name.error}
          onChange={this.handleInputChange}
        />
        <BetterInputControl
          name="location"
          label="Where are you from?"
          placeholder="Type your location"
          value={location.value}
          errorMessage={location.error}
          onChange={this.handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
