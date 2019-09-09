import React from 'react';
import { shallow, mount } from 'enzyme';
import President from './President';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('President displays details for Bill Clinton', () => {
  //when
  const president = shallow(<President firstName="Bill" lastName="Clinton" />);

  //then
  expect(president.find('.firstName').text()).toBe('First name: Bill');
  expect(president.find('.lastName').text()).toBe('Last name: Clinton');
});

it('President displays details for Barack Obama', () => {
  //when
  const president = shallow(<President firstName="Barack" lastName="Obama" />);

  //then
  expect(president.find('.firstName').text()).toBe('First name: Barack');
  expect(president.find('.lastName').text()).toBe('Last name: Obama');
});
