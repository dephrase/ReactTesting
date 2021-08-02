import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should return 5 when adding 4 and 1', () => {
    const runningTotal = container.find('#running-total');
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const addButton = container.find('#operator_add');
    const equalsButton = container.find('#operator-equals');
    button4.simulate('click');
    addButton.simulate('click');
    button1.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('Should return 3 when subtracting 4 from 7', () => {
    const runningTotal = container.find('#running-total');
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtractButton = container.find('#operator-subtract');
    const equalsButton = container.find('#operator-equals');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should get 15 when multiplying three by five', () => {
    const runningTotal = container.find('#running-total');
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('Shouldl retun 3 when diving 21 by 7', () => {
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const equalsButton = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should be able to concatenate two number clicks to equal 22', () => {
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    button2.simulate('click');
    button2.simulate('click');
    expect(runningTotal.text()).toEqual('22');
  })

  it('Should be able to concatenate multiple operations', () => {
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const subtractButton = container.find('#operator-subtract');
    const addButton = container.find('#operator_add');
    const equalsButton = container.find('#operator-equals');
    button2.simulate('click');
    addButton.simulate('click');
    button5.simulate('click');
    subtractButton.simulate('click');
    button2.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('Should clear the last value added', () => {
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const button3 = container.find('#number3');
    const subtractButton = container.find('#operator-subtract');
    const equalsButton = container.find('#operator-equals');
    const clear = container.find('#clear');
    button5.simulate('click');
    subtractButton.simulate('click');
    button2.simulate('click');
    clear.simulate('click');
    subtractButton.simulate('click')
    button3.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('2');
  })
})

