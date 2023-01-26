import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Inputs from "../components/Inputs";

describe("Inputs component", () => {
  test("input field should update value on change", () => {
    const handleSend = jest.fn();
    render(<Inputs handleSend={handleSend} />);

    const input = screen.getByPlaceholderText("Message...");
    userEvent.type(input, "Hello");

    expect(input.value).toBe("Hello");
  });

  test("handleSend function should be called when enter key is pressed", () => {
    const handleSend = jest.fn();
    render(<Inputs handleSend={handleSend} />);

    const input = screen.getByPlaceholderText("Message...");
    userEvent.click(input);
    userEvent.keyboard("{Enter>}{/Enter}");

    expect(handleSend).toHaveBeenCalledTimes(1);
  });

  test("handleSend function should be called when send button is clicked", () => {
    const handleSend = jest.fn();
    render(<Inputs handleSend={handleSend} />);

    const sendButton = screen.getByAltText("Send");
    userEvent.click(sendButton);

    expect(handleSend).toHaveBeenCalledTimes(1);
  });
});
