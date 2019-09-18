import React from 'react';
import { shallow } from 'enzyme';
import Salary from './Salary';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('Salary exposes the salary expectations of a player', () => {
  //when
  const wrapper = shallow(<Salary />);
  const getInput = () => wrapper.find('input[type="number"]');
  const getMessage = () => wrapper.find('label');

  //then
  expect(getInput().props().value).toEqual('');
  expect(getMessage().text()).toEqual('');

  //when
  getInput().simulate('change', { target: { value: '28000' } });

  //then
  expect(getInput().props().value).toEqual('28000');
  expect(getMessage().text()).toEqual('Expected salary: £28000');
});
