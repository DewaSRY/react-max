import { shallow } from "enzyme";
import App from "./App";

it("first test op app", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeInTheDocument();
});
