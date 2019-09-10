import React from 'react';
import { shallow } from 'enzyme';
import TotalScore from './TotalScore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('TotalScore returns the accumulated score (bad results)', () => {
  //when
  const totalScore = shallow(<TotalScore scores={[34, 35, 36]} />);

  //then
  expect(totalScore.text()).toBe('The total score is: 105');
});

it('TotalScore returns the accumulated score (good results)', () => {
  //when
  const totalScore = shallow(<TotalScore scores={[65, 75, 86]} />);

  //then
  expect(totalScore.text()).toBe('The total score is: 226');
});
