import React from 'react';
import { shallow, mount } from 'enzyme';
import ScoreDetails from './ScoreDetails';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('ScoreDetails displays details (2 values passed)', () => {
  //given
  const scores = [54, 65];

  //when
  const scoreDetails = shallow(<ScoreDetails scores={scores} />);

  //then
  expect(scoreDetails.find('.total').text()).toBe('Total: 2');
  expect(scoreDetails.find('.first').text()).toBe('First: 54');
  expect(scoreDetails.find('.second').text()).toBe('Second: 65');
});

it('ScoreDetails displays details (3 values passed)', () => {
  //given
  const scores = [71, 85, 91];

  //when
  const scoreDetails = shallow(<ScoreDetails scores={scores} />);

  //then
  expect(scoreDetails.find('.total').text()).toBe('Total: 3');
  expect(scoreDetails.find('.first').text()).toBe('First: 71');
  expect(scoreDetails.find('.second').text()).toBe('Second: 85');
});
