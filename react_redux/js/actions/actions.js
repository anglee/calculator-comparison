import _ from 'lodash';
import operators from '../constants/operators';

const actions = {
  setOperandA(calculatorId, operand) {
    return {
      type: "SET_OPERAND_A",
      calculatorId,
      operand
    }
  },
  setOperandB(calculatorId, operand) {
    return {
      type: "SET_OPERAND_B",
      calculatorId,
      operand
    }
  },
  setOperator(calculatorId, operatorSymbol) {
    return {
      type: "SET_OPERATOR",
      calculatorId,
      operator: _.find(operators, {symbol: operatorSymbol})
    };
  },
  undo() {
    console.log("undo");
    return {
      type: "UNDO"
    };
  }
};

export default actions;