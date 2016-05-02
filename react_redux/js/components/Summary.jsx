import React from 'react';
const Summary = ({
  name,
  operandA,
  operandB,
  result
}) => {
  return (<div className="summary">{name} of {operandA} and {operandB} is : {result}</div>)
};

export default Summary;