import React from 'react';
import { shallow } from 'enzyme';
import FilmScore from './FilmScore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('FilmScore identifies "poor" movies', () => {
  const filmScore = shallow(<FilmScore title="Alien vs Predator" score={45} />);
  expect(filmScore.text()).toBe('Poor');
});
it('FilmScore identifies "nice" movies', () => {
  const filmScore = shallow(<FilmScore title="Top Gun" score={68} />);
  expect(filmScore.text()).toBe('Nice');
});
it('FilmScore identifies "excellent" movies', () => {
  const filmScore = shallow(
    <FilmScore title="A Clockwork Orange" score={82} />
  );
  expect(filmScore.text()).toBe('Excellent');
});
