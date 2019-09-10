import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Awaiting for evaluation result...
it('Welcome displays a welcome message when the last ' + 'name is provided', () => {
  //when
  const welcome = shallow(<Welcome firstName="Valentino" lastName="Rossi" />);

  //then
  expect(welcome.text()).toBe('Welcome Mr Rossi');
});

it('Welcome displays a welcome message when the last ' + 'name is not provided', () => {
  //when
  const welcome = shallow(<Welcome firstName="Carl" />);

  //then
  expect(welcome.text()).toBe('Welcome Carl');
});
