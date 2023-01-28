import { Configuration, OpenAIApi } from "openai";

const key1 = "sk-6qqzHWK1s";
const key2 = "JnGzoYkAihtT3BlbkF";
const key3 = "J2O5Znhb2MQFvhPERWnUY";
// Init OpenAi instance
const config = new Configuration({
  apiKey: key1 + key2 + key3,
});
const openai = new OpenAIApi(config);

async function getBotResponse(userMessage, lastMessage) {
  try {
    const response = await openai.createCompletion({
      prompt: lastMessage.user + lastMessage.bot + userMessage,
      temperature: 0.5,
      max_tokens: 3000,
      model: "text-davinci-003",
    });

    // Removes any newline characters or other non letters/numbers from the start of the response
    const responseText = response.data.choices[0].text.replace(
      /^[^a-zA-Z0-9]+/g,
      ""
    );
    if (responseText.trim() === "")
      return "Even though I am Artificial Intelligence, I am not intelligent enough to respond to that. \n Try to ask me in another way.";
    return responseText;
  } catch (e) {
    return "Something went wrong. Try to ask again.";
  }
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export { sleep, getBotResponse };
