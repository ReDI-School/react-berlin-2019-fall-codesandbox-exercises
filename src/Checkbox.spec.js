import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./Checkbox";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it('Checkboxes only marks the terms input', () => {

	//given
	const wrapper = shallow(<Checkboxes terms={true} news={false} />);

	//when
	let termsInput = wrapper.find('input[type="checkbox"].terms');
	let newsInput = wrapper.find('input[type="checkbox"].news');

	// //then
	expect(termsInput.props().value).toBe(true);
	expect(newsInput.props().value).toBe(false);
});

it('Checkboxes only marks the news input', () => {

	//given
	const wrapper = shallow(<Checkboxes terms={false} news={true} />);

	//when
	let termsInput = wrapper.find('input[type="checkbox"].terms');
	let newsInput = wrapper.find('input[type="checkbox"].news');

	// //then
	expect(termsInput.props().value).toBe(false);
	expect(newsInput.props().value).toBe(true);
});