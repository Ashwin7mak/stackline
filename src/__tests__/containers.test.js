import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import json from "../data/Webdev_data.json";

const data = json[0];

// Import containers
import ProductContainer from "../js/containers/ProductContainer";
// Import components
import Product from "../js/components/Product";

configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);
let store;

describe("containers", () => {
  describe("ProductContainer", () => {
    beforeEach(() => {
      store = mockStore({ data: data });
    });
    it("renders 1 Product component", () => {
      const wrapper = mount(
        <Provider store={store}>
          <ProductContainer />
        </Provider>
      );
      expect(wrapper.find(Product)).toHaveLength(1);
    });
    it("passes the following items to Product component as props: src, title, subtitle, tags, icons", () => {
      const wrapper = mount(
        <Provider store={store}>
          <ProductContainer />
        </Provider>
      );
      const props = wrapper.find(Product).props();
      expect(props.src).toEqual(store.getState().data.image);
      expect(props.title).toEqual(store.getState().data.title);
      expect(props.subtitle).toEqual(store.getState().data.subtitle);
      expect(props.tags).toBeTruthy();
      expect(props.icons).toBeTruthy();
    });
  });
});
