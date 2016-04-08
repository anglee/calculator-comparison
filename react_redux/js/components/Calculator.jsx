import _ from 'lodash';
import React from 'react';
import operators from '../constants/operators';

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
      <div className="calculator">
        <div>
          <input type="text" className="operand-a" value={operandA} onChange={onOperandAChange}/>
          <select value={operator.symbol} onChange={onOperatorChange}>
            {options}
          </select>
          <input type="text" className="operand-b" value={operandB} onChange={onOperandBChange}/>
        </div>
        <div className="summary">{operator.name} of {operandA} and {operandB} is : {result}</div>
      </div>
  );
};

export default Calculator;
