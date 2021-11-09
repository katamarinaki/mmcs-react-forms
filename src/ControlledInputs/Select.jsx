import React from 'react';

export class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'memact' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Select</h2>
        <label>Какую лабу сдаем сегодня?</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="memact">Memact</option>
          <option value="basics">React basics</option>
          <option value="todo">TODO extension</option>
          <option value="poll" disabled>
            Poll app
          </option>
        </select>
      </div>
    );
  }
}
