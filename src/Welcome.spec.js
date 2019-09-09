import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from './Welcome';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Welcome displays a welcome message to Peter', () => {
  //when
  const welcome = shallow(<Welcome user="Peter" />);

  //then
  expect(welcome.text()).toBe('Welcome to React, Peter!');
});

it('Welcome displays a welcome message to Laura', () => {
  //when
  const welcome = shallow(<Welcome user="Laura" />);

  //then
  expect(welcome.text()).toBe('Welcome to React, Laura!');
});
