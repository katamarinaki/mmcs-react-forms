import React from 'react';
import ReactDOM from 'react-dom';
import { FormikExample } from './FormikExample';
import {
  Checkbox,
  MultiSelect,
  MyInputControl,
  Select,
  NameForm
} from './ControlledInputs';
import { SurveyForm } from './SurveyForm';
import { FormWithBetterValidation } from './FormWithBetterValidation';
import { FormWithValidation } from './FormWithValidation';
import { ExchangeWidget } from './ExchangeWidget';

export const App = props => {
  return (
    <div style={props.style}>
      {/* <MyInputControl /> */}
      {/* <Checkbox /> */}
      {/* <Select /> */}
      {/* <MultiSelect /> */}
      {/* <NameForm /> */}

      {/* <SurveyForm /> */}
      {/* <FormWithValidation /> */}
      {/* <FormWithBetterValidation /> */}
      {/* <ExchangeWidget /> */}
      <FormikExample />
    </div>
  );
};

ReactDOM.render(
  <App style={{ paddingTop: 50, paddingLeft: 50 }} />,
  document.getElementById('app')
);
