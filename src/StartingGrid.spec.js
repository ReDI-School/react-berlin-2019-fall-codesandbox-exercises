import React from "react";
import { shallow, mount } from "enzyme";
import StartingGrid from "./StartingGrid";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('StartingGrid reverses a list of 3 teams', () => {

	//given
	const startingGrid = shallow(
		<StartingGrid teams={['Ferrari', 'McLaren', 'Williams']} />
	);

	//when
	let positions = startingGrid.find('.position');

	//then
	expect(positions).to.have.length(3);
	expect(positions.at(0).text()).to.equal('1. Williams');
	expect(positions.at(1).text()).to.equal('2. McLaren');
	expect(positions.at(2).text()).to.equal('3. Ferrari');
});

it('StartingGrid reverses a list of 2 teams', () => {

	//given
	const startingGrid = shallow(
		<StartingGrid teams={['Jordan', 'Minardi']} />
	);

	//when
	let positions = startingGrid.find('.position');

	//then
	expect(positions).to.have.length(2);
	expect(positions.at(0).text()).to.equal('1. Minardi');
	expect(positions.at(1).text()).to.equal('2. Jordan');
});;