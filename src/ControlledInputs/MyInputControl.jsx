import React from 'react';

export class MyInputControl extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.focusInput = this.focusInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  focusInput() {
    console.log('focus');
    this.inputRef.current.focus();
  }

  clearInput() {
    console.log('clear');
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <div style={{ marginBottom: 32 }}>
        <h2>Ref + input example</h2>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus input</button>
        <button onClick={this.clearInput}>Clear input</button>
      </div>
    );
  }
}
