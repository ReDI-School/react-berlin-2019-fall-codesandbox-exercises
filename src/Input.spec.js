import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('ResetableInput shows an input and a button to reset it', () => {
  //when
  const wrapper = shallow(<Input />);
  const getInput = () => wrapper.find('input[type="text"]');
  const getResetButton = () => wrapper.find('button');

  //then
  expect(getInput().props().value).toEqual('Charlotte');
  expect(getResetButton().text()).toEqual('Reset');

  //when
  getResetButton().simulate('click');

  //then
  expect(getInput().props().value).toEqual('');
});
