import React from "react";
import { shallow, mount } from "enzyme";
import Welcome from "./Welcome";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("Welcome displays a welcome message", () => {
  //when
  const welcome = shallow(<Welcome />);

  //then
  expect(welcome.text()).toBe("Welcome to React!");
});
