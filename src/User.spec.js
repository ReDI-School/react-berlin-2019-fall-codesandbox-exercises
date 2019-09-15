import React from "react";
import { shallow, mount } from "enzyme";
import WorldChampions from "./User";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('User displays name and age details', () => {

	//given
	const user = shallow(<User user={{ name: 'Peter', age: 31 }} />);

	//when
	let details = user.find('.detail');

	//then
	expect(details).to.have.length(2);
	expect(details.at(0).text()).to.equal('name: Peter');
	expect(details.at(1).text()).to.equal('age: 31');
});

it('User displays firstName and lastName details', () => {

	//given
	const user = shallow(
		<User user={{ firstName: 'Ada', lastName: 'Lovelace' }} />
	);

	//when
	let details = user.find('.detail');

	//then
	expect(details).to.have.length(2);
	expect(details.at(0).text()).to.equal('firstName: Ada');
	expect(details.at(1).text()).to.equal('lastName: Lovelace');
});