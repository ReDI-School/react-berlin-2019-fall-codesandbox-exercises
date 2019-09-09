import React from 'react';
import { shallow, mount } from 'enzyme';
import BasketballStar from './BasketballStar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('BasketballStar displays Michael Jordan details', () => {
  //when
  const star = shallow(<BasketballStar />);

  //then
  expect(star.find('.firstName').text()).toBe('Michael');
  expect(star.find('.lastName').text()).toBe('Jordan');
});
