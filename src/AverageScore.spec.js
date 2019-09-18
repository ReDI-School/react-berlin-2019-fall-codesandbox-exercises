import React from 'react';
import { shallow } from 'enzyme';
import AverageScore from './AverageScore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('AverageScore display the rounded score of a player', () => {
  //when
  const wrapper = shallow(<AverageScore newScore={61} />);
  const state = wrapper.state();

  //then
  expect(state.firstScore).toBe(78);
  expect(state.secondScore).toBe(81);
  expect(wrapper.text()).toBe('The average score is: 73');
});
