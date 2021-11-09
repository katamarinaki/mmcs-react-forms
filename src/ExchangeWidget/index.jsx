import React from 'react';
import { CurrencyInput } from './CurrencyInput';

import * as cn from './styles.module.scss';

const USD_VALUE = 71.29; // in roubles

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function convertCurrency(from, to, amount) {
  if (from === 'RUR' && to === 'USD') {
    return round(amount * USD_VALUE);
  } else if (from === 'USD' && to === 'RUR') {
    return round(amount / USD_VALUE);
  }

  return amount;
}

export class ExchangeWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCurrency: 'USD',
      value: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(currency) {
    return function (event) {
      const value = event.target.value;

      this.setState({
        value,
        activeCurrency: currency
      });
    }.bind(this);
  }

  render() {
    const { activeCurrency, value } = this.state;
    return (
      <div>
        <h2>Exchange widget</h2>
        <div className={cn.inputs}>
          <CurrencyInput
            name="USD"
            value={convertCurrency('USD', activeCurrency, value)}
            onChange={this.handleInputChange}
          />
          <CurrencyInput
            name="RUR"
            value={convertCurrency('RUR', activeCurrency, value)}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}
