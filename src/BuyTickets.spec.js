import React from 'react';
import { shallow } from 'enzyme';
import BuyTickets from './BuyTickets';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it(`
	BuyTickets doesn't allow the user to proceed 
	the he/she is below 18
`, () => {
  //given
  let user = { name: 'Anthony', age: 16 };

  //when
  const buyTickets = shallow(<BuyTickets user={user} />);

  //then
  expect(buyTickets.text()).toBe('Sorry, try again once you turn 18');
});

it(`
	BuyTickets allows the user to proceed 
	the he/she is at least 18
`, () => {
  //given
  let user = { name: 'Anthony', age: 21 };

  //when
  const buyTickets = shallow(<BuyTickets user={user} />);

  //then
  expect(buyTickets.text()).toBe('Enjoy the show!');
});
