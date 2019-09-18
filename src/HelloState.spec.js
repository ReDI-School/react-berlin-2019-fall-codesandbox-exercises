import React from 'react';
import { shallow } from 'enzyme';
import AverageScore from './AverageScore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('AverageScore displays a message from the state', () => {
  //when
  const wrapper = shallow(<AverageScore />);

  //then
  expect(wrapper.state().message).toBe('Hello state!');
  expect(wrapper.text()).toBe('Hello state!');
});
