import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Home from "./pages/Home/Home";

jest.mock("./utils/mockData", () => ({
  getMockData: jest.fn(() => Promise.resolve([])),
}));

describe("<App />", () => {
  it("renders <Home /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
