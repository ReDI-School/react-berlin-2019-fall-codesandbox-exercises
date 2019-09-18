import React from 'react';
import { shallow } from 'enzyme';
import FruitPicker from './FruitPicker';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('FruitPicker allows user to select Apple and Orange', () => {
  //when
  const wrapper = shallow(<FruitPicker selected="Apple" />);
  const getSelector = () => wrapper.find('select');

  //then
  expect(
    getSelector()
      .find('option')
      .at(0)
      .text()
  ).toEqual('Apple');
  expect(
    getSelector()
      .find('option')
      .at(1)
      .text()
  ).toEqual('Orange');
  expect(getSelector().props().value).toEqual('Apple');

  //when
  getSelector().simulate('change', { target: { value: 'Orange' } });

  //then
  expect(getSelector().props().value).toEqual('Orange');
});
