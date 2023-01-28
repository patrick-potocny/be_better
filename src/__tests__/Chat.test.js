import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Chat from "../components/Chat";
import "../components/Typing";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import "../utils";

jest.setTimeout(10000);
jest.mock("../components/Typing", () => () => <div>Typing</div>);
jest.mock("../utils", () => {
  const utils = jest.genMockFromModule("../utils");
  utils.getBotResponse = async () => Promise.resolve("Mocked bot response");
  return utils;
});
jest.mock("axios", () => ({
  post: async () =>
        Promise.resolve({
          data: {
            choices: [
              {
                text: "Mocked response text",
              },
            ],
          },
        })
}));

describe("Chat component", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  test("show typing.. and after while remove it and show welcome message", async () => {
    render(<Chat></Chat>);

    expect(screen.getByText("Typing")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText("Typing"), {
      timeout: 4000,
    });
    expect(await screen.findByText(/BetterBot/i)).toBeInTheDocument();
  });

  test("should send users message display it and then bots response", async () => {
    render(<Chat></Chat>);

    await new Promise((res) => setTimeout(res, 4000));
    const input = screen.getByPlaceholderText("Message...");
    userEvent.type(input, "Users message");
    userEvent.click(input);
    userEvent.keyboard("{Enter>}{/Enter}");

    expect(screen.getByText("Users message")).toBeInTheDocument();
    expect(await screen.findByText("Mocked bot response")).toBeInTheDocument();
  });
});
