import React from "react";
import { shallow, mount } from "enzyme";
import Actors from "./Actors";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("Welcome displays a welcome message", () => {
  //when
  const welcome = shallow(<Actors />);

  //then
  expect(welcome.text()).toBe("Welcome to React!");
});

it('Actors displays a list of 1 actor', () => {

	//given
	const actors = shallow(<Actors names={['Leonardo']} />);

	//when
	let paragraphs = actors.find('p');

	//then
	expect(paragraphs).to.have.length(1);
	expect(paragraphs.at(0).text()).to.equal('Leonardo');
});