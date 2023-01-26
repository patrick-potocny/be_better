const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getBotResponse(userMessage, lastMessage) {
  try {
    const response = await openai.createCompletion({
      prompt: lastMessage.user + lastMessage.bot + userMessage,
      temperature: 0.5,
      max_tokens: 3000,
      model: "text-davinci-003",
    });

    // Removes any newline characters or other non letters/numbers from the start of the response
    const responseText = response.data.choices[0].text.replace(/^[^a-zA-Z0-9]+/g, '');
    return responseText
  } catch (e) {
    return 'Something went wrong. Try to ask again.'
  }
}

export { sleep, getBotResponse };
