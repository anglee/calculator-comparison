import { connect } from 'react-redux';
import actions from '../actions/actions';
import Calculator from '../components/Calculator.jsx';
import operators from '../constants/operators';

const parse = (value) => _.isEmpty(value) ? value : parseInt(value);

const calculatorFactory = (calculatorId) => {
  function mapStateToProps(state) {
    return {
      operandA: state[calculatorId].operandA,
      operandB: state[calculatorId].operandB,
      operator: state[calculatorId].operator,
      result: state[calculatorId].result
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      onOperandAChange: (e) => {
        dispatch(actions.setOperandA(calculatorId, parse(e.target.value)));
      },
      onOperandBChange: (e) => {
        dispatch(actions.setOperandB(calculatorId, parse(e.target.value)));
      },
      onOperatorChange: (e) => {
        dispatch(actions.setOperator(calculatorId, e.target.value));
      }
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(Calculator);
};

export default calculatorFactory;