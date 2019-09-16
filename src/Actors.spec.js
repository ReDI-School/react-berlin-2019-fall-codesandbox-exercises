import React from "react";
import { shallow, mount } from "enzyme";
import Actors from "./Actors";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('Actors displays a list of 3 actors', () => {

	//given
	const actors = shallow(
		<Actors names={['Arnold', 'Silvester', 'Steven']} />
	);

	//when
	let paragraphs = actors.find('p');

	//then
	expect(paragraphs).toHaveLength(3);
	expect(paragraphs.at(0).text()).toBe('Arnold');
	expect(paragraphs.at(1).text()).toBe('Silvester');
	expect(paragraphs.at(2).text()).toBe('Steven');
});

it('Actors displays a list of 1 actor', () => {

	//given
	const actors = shallow(<Actors names={['Leonardo']} />);

	//when
	let paragraphs = actors.find('p');

	//then
	expect(paragraphs).toHaveLength(1);
	expect(paragraphs.at(0).text()).toBe('Leonardo');
});