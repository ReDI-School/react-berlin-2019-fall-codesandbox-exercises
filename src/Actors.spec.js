import React from "react";
import { shallow, mount } from "enzyme";
import Actors from "./Actors";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('Actors takes 3 actors and display their name and age', () => {

	//given
	const actors = shallow(
		<Actors actors={[
			{ name: 'Arnold', age: 71 }, { name: 'Silvester', age: 72 }
		]} />
	);

	//when
	let paragraphs = actors.find('p');

	//then
	expect(paragraphs).to.have.length(2);
	expect(paragraphs.at(0).text()).to.equal('Arnold (71)');
	expect(paragraphs.at(1).text()).to.equal('Silvester (72)');
});

it('Actors takes 1 actor and display their name and age', () => {

	//given
	const actors = shallow(
		<Actors actors={[{ name: 'Steven', age: 66 }]} />
	);

	//when
	let paragraphs = actors.find('p');

	//then
	expect(paragraphs).to.have.length(1);
	expect(paragraphs.at(0).text()).to.equal('Steven (66)');
})