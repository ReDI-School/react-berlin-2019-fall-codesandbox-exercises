import React from 'react';
import { shallow } from 'enzyme';
import Calc from './Calc';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

[
  {
    it: 'Displays total=16 when a=7, b=4, c=5',
    c: 5,
    total: 16,
    expected: 'The total is: 16',
  },
  {
    it: 'Displays total=9 when a=7, b=4, c=-2',
    c: -2,
    total: 9,
    expected: 'The total is: 9',
  },
].forEach(scenario => {
  it(scenario.it, () => {
    //when
    const wrapper = shallow(<Calc c={scenario.c} />);
    const state = wrapper.state();

    //then
    expect(state.a).toBe(7);
    expect(state.b).toBe(4);
    expect(state.total).toBe(scenario.total);
    expect(wrapper.text()).toBe(scenario.expected);
  });
});
