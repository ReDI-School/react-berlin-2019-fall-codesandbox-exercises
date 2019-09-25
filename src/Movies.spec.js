import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

[
  {
    it: 'Movies display a list of modern action titles',
    list: [
      { title: 'Wonder Woman', year: 2017, director: 'Patty Jenkins' },
      { title: 'Black Panther', year: 2018, director: 'Ryan Coogler' }
    ],
    expected: [
      'Wonder Woman (2017), directed by Patty Jenkins',
      'Black Panther (2018), directed by Ryan Coogler'
    ]
  },
  {
    it: 'Movies display a list of classic comedy titles',
    list: [
      { title: 'Airplane!', year: 1980, director: 'David Zucker' },
      { title: 'Ghostbusters', year: 1984, director: 'Ivan Reitman' }
    ],
    expected: [
      'Airplane! (1980), directed by David Zucker',
      'Ghostbusters (1984), directed by Ivan Reitman'
    ]
  }
].forEach(scenario => {
  it(scenario.it, () => {
    //when
    const wrapper = shallow(<Movies list={scenario.list} />);
    const movies = wrapper.find('p');

    //then
    expect(movies).toHaveLength(2);
    expect(movies.at(0).text()).toBe(scenario.expected[0]);
    expect(movies.at(1).text()).toBe(scenario.expected[1]);
  });
});
