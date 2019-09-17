import React from "react";
import { shallow } from "enzyme";
import Text from "./Text";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it(
	'Text displays a basic input text, with a value and a placeholder', () => {

		//given
		const wrapper = shallow(<Text />);

		//when
		let input = wrapper.find('input[type="text"]');

		//then
		expect(input.props().value).toBe('My first input!');
		expect(input.props().placeholder).toBe('This text is visible when input is blank');
	});