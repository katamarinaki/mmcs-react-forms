import React from 'react';

import * as cn from './styles.module.scss';

const SIGNS = {
  RUR: '₽',
  USD: '$'
};

export class CurrencyInput extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <div className={cn.currencyInput}>
        <label htmlFor={name}>{SIGNS[name]}</label>
        <input
          name={name}
          type="number"
          value={value}
          onChange={onChange(name)}
        />
      </div>
    );
  }
}
