import _ from 'lodash';
import React from 'react';
import operators from '../constants/operators';
import Summary from './Summary.jsx';

const Calculator = ({
  operandA,
  operandB,
  operator,
  result,
  onOperandAChange = _.noop,
  onOperandBChange = _.noop,
  onOperatorChange = _.noop
  }) => {
  const options = operators.map((op) => {
    return (<option key={op.symbol}>{op.symbol}</option>);
  });
  return (
    <div>
      <div>
        <input type="text" className="operand-a" value={operandA} onChange={onOperandAChange}/>
        <select value={operator.symbol} onChange={onOperatorChange}>
          {options}
        </select>
        <input type="text" className="operand-b" value={operandB} onChange={onOperandBChange}/>
      </div>
      <Summary
        name={operator.name}
        operandA={operandA}
        operandB={operandB}
        result={result}
      />
    </div>
  );
};

export default Calculator;
