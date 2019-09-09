import React from 'react';
import { shallow, mount } from 'enzyme';
import Player from './Player';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Player displays score details for Andrea', () => {
  //given
  const person = { name: 'Andrea', score: 65 };

  //when
  const player = shallow(<Player person={person} />);

  //then
  expect(player.find('.name').text()).toBe('Name: Andrea');
  expect(player.find('.score').text()).toBe('Score: 65');
});

it('Player displays score details for Lily', () => {
  //given
  const person = { name: 'Lily', score: 71 };

  //when
  const player = shallow(<Player person={person} />);

  //then
  expect(player.find('.name').text()).toBe('Name: Lily');
  expect(player.find('.score').text()).toBe('Score: 71');
});
