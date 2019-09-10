import React from 'react';
import { shallow } from 'enzyme';
import ChallengeResults from './ChallengeResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it(`
	ChallengeResults displays a "keep training" message 
	when the average results are < 50
`, () => {
  //when
  const welcome = shallow(<ChallengeResults scores={[34, 54, 34, 23]} />);

  //then
  expect(welcome.text()).toBe('Keep training!');
});

it(`
	ChallengeResults displays a "well done" message 
	when the average results are >= 50
`, () => {
  //when
  const welcome = shallow(<ChallengeResults scores={[91, 71, 64, 79]} />);

  //then
  expect(welcome.text()).toBe('Well done!');
});
