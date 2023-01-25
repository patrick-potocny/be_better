const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getBotResponse(userMessage, lastMessage) {
  const response = await openai.createCompletion({
    prompt: lastMessage.user + lastMessage.bot + userMessage,
    temperature: 0.5,
    max_tokens: 3000,
    model: "text-davinci-003",
  });
  console.log(response);
  return response.data.choices[0].text.trimStart()
}

export { sleep, getBotResponse };
