import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import "../components/LandingPage";
import "../components/Chat";

jest.mock("../components/LandingPage", () => () => <div>Landing page</div>);
jest.mock("../components/Chat", () => () => <div>Chat</div>);

describe("App component", () => {
  test("should match snapshot", () => {
    const { container } = render(<App></App>);
    expect(container).toMatchSnapshot();
  });
});
