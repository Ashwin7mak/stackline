import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Import components
import Product from "../js/components/Product";

configure({ adapter: new Adapter() });

// Test that components render correct elements
// Test that components have methods (e.g., onClick, etc.)

describe("components", () => {
  describe("Product", () => {
    it("should render a <div> element", () => {
      const wrapper = shallow(<Product />);
      const div = wrapper.find("div");
      expect(div.exists()).toBeTruthy();
    });
    it("should contain a <figure> element with a child <img> element that has a src attribute equal to {props.src}", () => {
      const wrapper = shallow(<Product src="google.com" />);
      const figure = wrapper.find("figure");
      const img = figure.find("img");
      expect(figure.exists()).toBeTruthy();
      expect(img.exists()).toBeTruthy();
      expect(img.props().src).toEqual("google.com");
    });
    it("the <figure> element should contain a child <figcaption> element with text equal to {props.title} and an id equal to 'title'", () => {
      const wrapper = shallow(<Product title="Cool Product" />);
      const figure = wrapper.find("figure");
      const figcaptions = figure.find("figcaption");
      const figcaption = figcaptions.find("#title");
      expect(figcaption.exists()).toBeTruthy();
      expect(figcaption.text()).toEqual("Cool Product");
    });
    it("the <figure> element should contain a child <figcaption> element with text equal to {props.subtitle} and an id equal to 'subtitle'", () => {
      const wrapper = shallow(<Product subtitle="Nice subtitle" />);
      const figure = wrapper.find("figure");
      const figcaptions = figure.find("figcaption");
      const figcaption = figcaptions.find("#subtitle");
      expect(figcaption.exists()).toBeTruthy();
      expect(figcaption.text()).toEqual("Nice subtitle");
    });
    it("should contain tags passed in from {props.tags}", () => {
      const wrapper = shallow(<Product tags="[<span>Tag</span>]" />);
      const spans = wrapper.find("#spans");
      expect(spans.props().children).toEqual("[<span>Tag</span>]");
    });
    it("should contain icons passed in from {props.icons}", () => {
      const wrapper = shallow(<Product icons="<Component />" />);
      const icons = wrapper.find("#icons");
      expect(icons.props().children).toEqual("<Component />");
    });
  });
});
