import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import chai from 'chai';
const expect = chai.expect;
import operators from '../constants/operators';
import Calculator from './Calculator.jsx';
import jsdom from 'mocha-jsdom';

// This is needed because TestUtils doesn't work well with stateless components,
// renderIntoDocument(ReactDOM.render) returns null for stateless components
// see: https://github.com/facebook/react/issues/4972
function wrap(statelessComponent) {
  return React.createClass({
    displayName: statelessComponent.name,
    render() {
      return statelessComponent(this.props);
    }
  });
}

const WCalculator = wrap(Calculator);

describe('Calculator', () => {

  const props = {
    operandA: 1,
    operandB: 1,
    operator: operators[0],
    result: 2
  };

  jsdom();

  describe('props: [operandA, operandB, operator, result]', () => {
    it('should determine the display text', () => {
      const componentElement = ReactTestUtils.renderIntoDocument(
          <WCalculator {...props} />
      );

      const operandANode = ReactTestUtils.findRenderedDOMComponentWithClass(componentElement, 'operand-a');
      const operandBNode = ReactTestUtils.findRenderedDOMComponentWithClass(componentElement, 'operand-b');
      const operatorNode = ReactTestUtils.findRenderedDOMComponentWithTag(componentElement, 'select');
      const summaryNode = ReactTestUtils.findRenderedDOMComponentWithClass(componentElement, 'summary');

      expect(parseInt(operandANode.value)).to.equal(props.operandA);
      expect(parseInt(operandBNode.value)).to.equal(props.operandB);
      expect(operatorNode.value).to.equal(props.operator.symbol);
      expect(summaryNode.textContent).to.equal(
          `${props.operator.name} of ${props.operandA} and ${props.operandB} is : ${props.result}`
      );
    });
  });

  describe('prop: onOperandAChange', () => {
    it('should be called and receive the new value when operand A text input changes', () => {
      let actual;
      const newValue = 3;
      const onChangeHandler = (e) => {
        actual = parseInt(e.target.value);
      };
      const componentElement = ReactTestUtils.renderIntoDocument(
          <WCalculator  {...props} onOperandAChange={onChangeHandler}/>
      );
      const operandANode = ReactTestUtils.findRenderedDOMComponentWithClass(componentElement, 'operand-a');
      operandANode.value = newValue;
      ReactTestUtils.Simulate.change(operandANode);
      expect(actual).to.equal(newValue);
    });
  });

  describe('prop: onOperandBChange', () => {
    it('should be called and receive the new value when operand B text input changes', () => {
      let actual;
      const newValue = 3;
      const onChangeHandler = (e) => {
        actual = parseInt(e.target.value);
      };
      const componentElement = ReactTestUtils.renderIntoDocument(
          <WCalculator  {...props} onOperandBChange={onChangeHandler}/>
      );
      const operandBNode = ReactTestUtils.findRenderedDOMComponentWithClass(componentElement, 'operand-b');
      operandBNode.value = newValue;
      ReactTestUtils.Simulate.change(operandBNode);
      expect(actual).to.equal(newValue);
    });
  });

  describe('prop: onOperatorChange', () => {
    it('should be called and receive the new value when operator selection changes', () => {
      let actual;
      const newValue = operators[1].symbol;
      const onChangeHandler = (e) => {
        actual = e.target.value;
      };
      const componentElement = ReactTestUtils.renderIntoDocument(
          <WCalculator  {...props} onOperatorChange={onChangeHandler}/>
      );
      const operatorNode = ReactTestUtils.findRenderedDOMComponentWithTag(componentElement, 'select');
      operatorNode.value = newValue;
      ReactTestUtils.Simulate.change(operatorNode);
      expect(actual).to.equal(newValue);
    });
  });

});
