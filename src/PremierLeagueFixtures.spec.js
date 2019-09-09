import React from 'react';
import { shallow, mount } from 'enzyme';
import PremierLeagueFixtures from './PremierLeagueFixtures';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('PremierLeagueFixtures display match results', () => {
  //given
  const premierLeagueFixtures = shallow(<PremierLeagueFixtures />);

  //when
  let fixtures = premierLeagueFixtures.find('.fixtures');
  let fixture = fixtures.find('.fixture');

  //then
  expect(fixtures).toHaveLength(1);
  expect(fixture).toHaveLength(1);

  //and
  expect(fixture.find('.team1').text()).toBe('Tottenham');
  expect(fixture.find('.team2').text()).toBe('Southampton');
  expect(fixture.find('.result').text()).toBe('3-1');
});
