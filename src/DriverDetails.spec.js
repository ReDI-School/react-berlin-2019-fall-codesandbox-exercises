import React from 'react';
import { shallow } from 'enzyme';
import DriverDetails from './DriverDetails';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('DriverDetails toggles driver stats', () => {
  //when
  const wrapper = shallow(<DriverDetails />);
  const getPressMeButton = () => wrapper.find('button');
  const getDetails = () => wrapper.find('label.details');

  //then
  expect(getPressMeButton().text()).toBe('Toggle driver details');
  expect(getDetails().exists()).toBe(false);

  //when
  getPressMeButton().simulate('click');

  //then
  expect(getDetails().exists()).toBe(true);
  expect(getDetails().text()).toBe('Races: 314, Titles: 2, Poles: 22');

  //when
  getPressMeButton().simulate('click');

  //then
  expect(getDetails().exists()).toBe(false);
});
