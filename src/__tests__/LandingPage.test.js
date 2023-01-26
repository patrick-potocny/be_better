import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../components/LandingPage";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("LandingPage component", () => {
  test("should render the component", () => {
    render(<LandingPage openChat={() => {}} />);
    expect(
      screen.getByText(/Helping you find your way to a better/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Start Chat")).toBeInTheDocument();
    expect(screen.getByAltText("header-logo")).toBeInTheDocument();
    expect(screen.getByAltText(/chat-icon/i)).toBeInTheDocument();
  });

  test("should call openChat when Start Chat button is clicked", () => {
    const openChatMock = jest.fn();
    render(<LandingPage openChat={openChatMock} />);
    userEvent.click(screen.getByText("Start Chat"));
    expect(openChatMock).toHaveBeenCalled();
  });

  test("should add slide-out class to elements when Start Chat button is clicked", () => {
    render(<LandingPage openChat={() => {}} />);
    userEvent.click(screen.getByText("Start Chat"));
    expect(screen.getByTestId("bg-logo")).toHaveClass("slide-out");
    expect(
      screen.getByText(/Helping you find your way to a better/i)
    ).toHaveClass("slide-out");
    expect(screen.getByText(/Get help anytime/i)).toHaveClass("slide-out");
    expect(screen.getByText("Start Chat")).toHaveClass("slide-out");
    expect(screen.getByAltText("chat-icon")).toHaveClass("slide-out");
  });
});
