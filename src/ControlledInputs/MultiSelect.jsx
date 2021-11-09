import React from 'react';

export class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = { values: ['memact'] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.values);
  }

  handleChange(event) {
    const { value } = event.target;
    const values = [...this.state.values];
    const index = this.state.values.findIndex(v => v === value);
    if (index === -1) {
      values.push(value);
    } else {
      values.splice(index, 1);
    }
    this.setState({ values });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Multiselect</h2>
        <label>Какую лабу сдаем сегодня?</label>
        <select multiple value={this.state.values} onChange={this.handleChange}>
          <option value="memact">Memact</option>
          <option value="basics">React basics</option>
          <option value="todo">TODO extension</option>
          <option value="poll">Poll app</option>
        </select>
        <button>Отправить</button>
      </form>
    );
  }
}
