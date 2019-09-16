import React from "react";
import { shallow, mount } from "enzyme";
import WorldChampions from "./WorldChampions";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('WorldChampions filters out the non-champion drivers', () => {

	//given
	const worldChampions = shallow(<WorldChampions drivers={[
		{ name: 'Nigel Mansell', isWorldChampion: true },
		{ name: 'Keke Rosbert', isWorldChampion: false },
		{ name: 'Alain Prost', isWorldChampion: true }
	]} />);

	//when
	let labels = worldChampions.find('label');

	//then
	expect(labels).toHaveLength(2);
	expect(labels.at(0).text()).toBe('Nigel Mansell');
	expect(labels.at(1).text()).toBe('Alain Prost');
});

it(
	'WorldChampions doesn\'t display anything ' +
	'if no champions are provided', () => {

		//given
		const worldChampions = shallow(<WorldChampions drivers={[
			{ name: 'Tarso Marques', isWorldChampion: false }
		]} />);

		//when
		let labels = worldChampions.find('label');

		//then
		expect(labels).toHaveLength(0);
	});