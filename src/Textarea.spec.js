import React from "react";
import { shallow } from "enzyme";
import Textarea from "./Textarea";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it('Text displays email details with a default value', () => {

	//given
	const wrapper = shallow(
		<Textarea
			value='donald@trump.com'
			placeholder='Enter your email' />
	);

	//when
	let input = wrapper.find('input[type="text"]');

	//then
	expect(input.props().value).toBe('donald@trump.com');
	expect(input.props().placeholder).toBe('Enter your email');
});

it('Text displays location details with a default value', () => {

	//given
	const wrapper = shallow(
		<Textarea
			value='London'
			placeholder='Enter your location' />
	);

	//when
	let input = wrapper.find('input[type="text"]');

	//then
	expect(input.props().value).toBe('London');
	expect(input.props().placeholder).toBe('Enter your location');
});