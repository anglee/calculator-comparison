import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import calculatorFactory from './containers/calculatorFactory';
import calculatorIds from './constants/calculatorIds';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const Calculator1 = calculatorFactory(calculatorIds.CALCULATOR_1);
const Calculator2 = calculatorFactory(calculatorIds.CALCULATOR_2);
const Calculator3 = calculatorFactory(calculatorIds.CALCULATOR_3);

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Calculator1/>
        <Calculator2/>
        <Calculator3/>
      </div>
    </Provider>,
    document.getElementById('root'));