import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Each action should create a TYPE of action
// See https://github.com/kyleyasumiishi/react-calculator/blob/master/src/__tests__/actions.test.js

describe("actions", () => {});
