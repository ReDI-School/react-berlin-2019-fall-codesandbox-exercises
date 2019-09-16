import React from "react";
import { shallow, mount } from "enzyme";
import User from "./User";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('User displays name and age details', () => {

	//given
	const user = shallow(<User user={{ name: 'Peter', age: 31 }} />);

	//when
	let details = user.find('.detail');

	//then
	expect(details).toHaveLength(2);
	expect(details.at(0).text()).toBe('name: Peter');
	expect(details.at(1).text()).toBe('age: 31');
});

it('User displays firstName and lastName details', () => {

	//given
	const user = shallow(
		<User user={{ firstName: 'Ada', lastName: 'Lovelace' }} />
	);

	//when
	let details = user.find('.detail');

	//then
	expect(details).toHaveLength(2);
	expect(details.at(0).text()).toBe('firstName: Ada');
	expect(details.at(1).text()).toBe('lastName: Lovelace');
});