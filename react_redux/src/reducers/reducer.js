import operators from '../constants/operators';
import calculatorIds from '../constants/calculatorIds';

const defaultCalculatorState = {
  operandA: 1,
  operandB: 1,
  operator: operators[0],
  result: 2
};
const defaultState = {};
defaultState[calculatorIds.CALCULATOR_1] = defaultCalculatorState;
defaultState[calculatorIds.CALCULATOR_2] = defaultCalculatorState;
defaultState[calculatorIds.CALCULATOR_3] = defaultCalculatorState;

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  const calcState = state[action.calculatorId];

  function updateCalculator3 () {
    const calc3State = state[calculatorIds.CALCULATOR_3];
    const operandA = newState[calculatorIds.CALCULATOR_1].result;
    const operandB = newState[calculatorIds.CALCULATOR_2].result;
    newState[calculatorIds.CALCULATOR_3] = Object.assign({}, calc3State, {
      operandA,
      operandB,
      result: calc3State.operator.fn(operandA, operandB)
    });
  }

  switch (action.type) {
    case "SET_OPERAND_A":
      newState[action.calculatorId] = Object.assign({}, calcState, {
        operandA: action.operand,
        result: calcState.operator.fn(action.operand, calcState.operandB)
      });
      if (action.calculatorId !== calculatorIds.CALCULATOR_3) {
        updateCalculator3();
      }
      return newState;
    case "SET_OPERAND_B":
      newState[action.calculatorId] = Object.assign({}, calcState, {
        operandB: action.operand,
        result: calcState.operator.fn(calcState.operandA, action.operand)
      });
      if (action.calculatorId !== calculatorIds.CALCULATOR_3) {
        updateCalculator3();
      }
      return newState;
    case "SET_OPERATOR":
      newState[action.calculatorId] = Object.assign({}, calcState, {
        operator: action.operator,
        result: action.operator.fn(calcState.operandA, calcState.operandB)
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;