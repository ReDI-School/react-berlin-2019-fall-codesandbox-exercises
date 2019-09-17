import React from "react";
import { shallow } from "enzyme";
import FruitPicker from "./FruitPicker";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it('FruitPicker allows user to select Apple and Orange', () => {

	//given
	const wrapper = shallow(<FruitPicker />);

	//when
	let select = wrapper.find('select');

	//then
	expect(select.find('option').at(0).text()).toBe('Apple');
	expect(select.find('option').at(1).text()).toBe('Orange');
});

it('FruitPicker can select Apple fruit by default', () => {

	//given
	const wrapper = shallow(<FruitPicker selected='Apple' />);

	//when
	let select = wrapper.find('select');

	//then
	expect(select.props().value).toBe('Apple');
});

it('FruitPicker can select Banana fruit by default', () => {

	//given
	const wrapper = shallow(<FruitPicker selected='Orange' />);

	//when
	let select = wrapper.find('select');

	//then
	expect(select.props().value).toBe('Orange');
});