import React from 'react';
import { shallow } from 'enzyme';
import Calc from './Calc';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

[
  {
    it: `Adds the numbers if the 'add' operation is passed`,
    operation: 'add',
    expected: 'The result is: 11',
  },
  {
    it: `Subtracts the numbers if the 'subtract' operation is passed`,
    operation: 'subtract',
    expected: 'The result is: 3',
  },
  {
    it: 'Displays an error if the passed operation is not supported',
    operation: 'multiply',
    expected: 'This operation is not supported yet!',
  },
].forEach(scenario => {
  it(scenario.it, () => {
    //when
    const wrapper = shallow(<Calc operation={scenario.operation} />);
    const state = wrapper.state();

    //then
    expect(state.a).toBe(7);
    expect(state.b).toBe(4);
    expect(wrapper.text()).toBe(scenario.expected);
  });
});
