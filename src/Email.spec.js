import React from 'react';
import { shallow } from 'enzyme';
import Email from './Email';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('Email displays 2 inputs and check if they match', () => {
  //when
  const wrapper = shallow(<Email />);
  const getEmail = () => wrapper.find('.email');
  const getConfirmEmail = () => wrapper.find('.confirmEmail');
  const getMatchMessage = () => wrapper.find('label');

  //then
  expect(getEmail().props().value).toEqual('');
  expect(getMatchMessage().text()).toEqual('Great! Emails match');

  //when
  getEmail().simulate('change', { target: { value: 'a@b.com' } });

  //then
  expect(getMatchMessage().text()).toEqual('Oh! Emails do not match!');

  //when
  getConfirmEmail().simulate('change', { target: { value: 'a@b.com' } });

  //then
  expect(getMatchMessage().text()).toEqual('Great! Emails match');
});
