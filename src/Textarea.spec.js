import React from "react";
import { shallow } from "enzyme";
import Textarea from "./Textarea";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it('Textarea displays a multi-line input (user thoughts)', () => {

	//given
	const wrapper = shallow(
		<Textarea
			value='Over 300 languages are spoken in London'
			placeholder='Please share your thoughts' />
	);

	//when
	let textarea = wrapper.find('textarea');

	//then
	expect(textarea.props().value).toBe('Over 300 languages are spoken in London');
	expect(textarea.props().placeholder).toBe('Please share your thoughts');
});

it('Textarea displays a multi-line input (race positions)', () => {

	//given
	const wrapper = shallow(
		<Textarea
			value='1. Ferrari, 2. McLaren, 3. Williams'
			placeholder='Please enter the positions here' />
	);

	//when
	let textarea = wrapper.find('textarea');

	//then
	expect(textarea.props().value).toBe('1. Ferrari, 2. McLaren, 3. Williams');
	expect(textarea.props().placeholder).toBe('Please enter the positions here');
});;