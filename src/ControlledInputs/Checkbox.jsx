import React from 'react';

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.checked);
    this.setState({ isChecked: event.target.checked });
  }

  render() {
    return (
      <div>
        <h2>Checkbox</h2>
        <label>Check me</label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
        <span>{this.state.isChecked.toString()}</span>
      </div>
    );
  }
}
