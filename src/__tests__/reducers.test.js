import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Import reducers

configure({ adapter: new Adapter() });

// Test that reducers handle certain action types (compare initial state to after state)

describe("reducers", () => {});
