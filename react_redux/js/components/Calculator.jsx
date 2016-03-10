import React from 'react';
import operators from '../constants/operators';

const Calculator = ({
    operandA,
    operandB,
    operator,
    result,
    onOperandAChange,
    onOperandBChange,
    onOperatorChange
    }) => {
  const options = operators.map((op) => {
    return (<option key={op.symbol}>{op.symbol}</option>);
  });
  return (
      <div>
        <div>
          <input type="text" value={operandA} onChange={onOperandAChange}/>
          <select value={operator.symbol} onChange={onOperatorChange}>
            {options}
          </select>
          <input type="text" value={operandB} onChange={onOperandBChange}/>
        </div>
        <div>{operator.name} of {operandA} and {operandB} is : {result}</div>
      </div>
  );
};

export default Calculator;
