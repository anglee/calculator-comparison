import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import chai from 'chai';
const expect = chai.expect;
import operators from '../constants/operators';
import Calculator from './Calculator.jsx';
import Summary from './Summary.jsx';
import jsdom from 'mocha-jsdom';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Calculator />', () => {
  it('renders a <Summary /> component', () => {
    const wrapper = shallow(<Calculator
      operator={{ symbol: "+", name: "Sum", fn: (a, b) => a + b }}
    />);
    expect(wrapper.find(Summary)).to.have.length(1);
  });
});
