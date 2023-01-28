import { sleep, getBotResponse } from "../utils";
import "axios";

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

describe("Utility functions", () => {
  test("should return the response text from the OpenAI API", async () => {
    const userMessage = "What is the weather like today?";
    const lastMessage = {
      user: "",
      bot: "",
    };
    const response = await getBotResponse(userMessage, lastMessage);
    expect(response).toBe("Mocked response text");
  });

  test("should sleep for the specified amount of time", async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
