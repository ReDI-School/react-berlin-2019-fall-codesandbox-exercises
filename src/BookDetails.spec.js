import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from './Welcome';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('BookDetails display book information', () => {
  //given
  const bookDetails = shallow(<BookDetails />);

  //when
  const bookId = bookDetails.find('#bookId').text();
  const title = bookDetails.find('.title').text();
  const author = bookDetails.find('author').text();

  //then
  expect(bookId).toBe('32156');
  expect(title).toBe('JavaScript: The Good Parts');
  expect(author).toBe('Douglas Crockford');
});
