import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import * as cn from './styles.module.scss';

export class BetterInputControl extends React.Component {
  render() {
    const { name, label, placeholder, value, onChange, errorMessage } =
      this.props;

    return (
      <div className={cns(cn.root, { [cn.error]: !!errorMessage })}>
        {!!label && !errorMessage && <label htmlFor={name}>{label}</label>}
        {!!errorMessage && <label htmlFor={name}>{errorMessage}</label>}
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

BetterInputControl.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string
};
