import axios from "axios";

async function getBotResponse(userMessage, lastMessage) {
  try {
    const response = await axios.post('/v1/completions', {
      prompt: lastMessage.user + lastMessage.bot + userMessage,
      temperature: 0.5,
      max_tokens: 3000,
      model: "text-davinci-003",
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    // Removes any newline characters or other non letters/numbers from the start of the response
    const responseText = response.data.choices[0].text.replace(/^[^a-zA-Z0-9]+/g, '');
    if (responseText.trim() === '') return "Even though I am Artificial Intelligence, I am not intelligent enough to respond to that. \n Try to ask me in another way."
    return responseText;
  } catch (e) {
    console.log(e);
    return 'Something went wrong. Try to ask again.'
  }
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export { sleep, getBotResponse };
