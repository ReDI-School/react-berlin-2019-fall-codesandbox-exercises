import React from "react";
import { shallow, mount } from "enzyme";
import Welcome from "./Welcome";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('Welcome returns welcome message in 2 paragraphs', () => {

	//given
	const welcome = shallow(<Welcome />);
	
	//when
	let paragraphs = welcome.find('p');
	
	//then
	expect(welcome.find('p')).toHaveLength(2);
	expect(paragraphs.at(0).text()).toBe('Welcome');
	expect(paragraphs.at(1).text()).toBe('to React');
});