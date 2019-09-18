import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('Input displays a controlled input field', () => {
  //when
  const wrapper = shallow(<Input />);
  const getInput = () => wrapper.find('input[type="text"]');

  //then
  expect(getInput().props().value).toEqual('');

  //when
  getInput().simulate('change', { target: { value: 'Olivia' } });

  //then
  expect(getInput().props().value).toEqual('Olivia');
});
