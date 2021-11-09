import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import * as cn from './styles.module.scss';

export class InputControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: this.props.validate
        ? this.props.validate(this.props.value)
        : true
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    const { validate, value } = this.props;

    const isValid = validate ? validate(value) : true;

    if (!isValid) {
      this.setState({ isValid });
    }
  }

  handleFocus() {
    this.setState({ isValid: true });
  }

  render() {
    const { name, label, placeholder, value, onChange, errorMessage } =
      this.props;
    const { isValid } = this.state;
    return (
      <div className={cns(cn.root, { [cn.error]: !isValid })}>
        {!!label && isValid && <label htmlFor={name}>{label}</label>}
        {!!errorMessage && !isValid && (
          <label htmlFor={name}>{errorMessage}</label>
        )}
        <input
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}

InputControl.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string
};
