import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Typing from "./Typing";
import Inputs from "./Inputs";
import chatHead from "../assets/images/chat-head-icon.png";
import { sleep, getBotResponse } from "../utils";

function Chat() {
  const [conversation, setConversation] = useState([]);
  const [lastMessage, setLastMessage] = useState({
    user: "",
    bot: "",
  });
  const [typing, setTyping] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const bottomRef = useRef();

  useEffect(() => {
    async function showWelcomeMessage() {
      await sleep(3000);
      const welcomeMessage = {
        text: "Hey I am BetterBot, \nan AI chatbot here to help you improve in any area of your life. Whether you're looking to create a plan and achieve your goals or find your purpose, I am here to guide and support you every step of the way. I look forward to working with you and helping you reach your full potential. \n Ask me anything, take what you need from the answer and be BETTER!",
        isUser: false,
      };
      setTyping(false);
      setConversation((conv) => [...conv, welcomeMessage]);
    }

    showWelcomeMessage();
  }, []);

  useEffect(() => {
    // scroll to bottom every time messages,typing change
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [conversation, typing]);

  async function handleSend() {
    // check if we`re not waiting for response and then if inputVal is not empty and more than one word.
    if (
      !typing &&
      inputVal.trim() !== "" &&
      inputVal.trim().split(" ").length > 1
    ) {
      const userMessage = {
        text: inputVal,
        isUser: true,
      };
      setConversation((conv) => [...conv, userMessage]);
      setInputVal("");
      await sleep(1000);
      setTyping(true);
      const botResponse = await getBotResponse(inputVal, lastMessage);
      setLastMessage({
        user: userMessage,
        bot: botResponse,
      });
      setTyping(false);
      setConversation((conv) => [
        ...conv,
        { text: botResponse, isUser: false },
      ]);
    }
  }

  return (
    <>
      <div className="chat__header">
        <img className="chat__header__icon" src={chatHead} alt="Logo" />
        <div>
          <p className="chat__header__top-text">beBetter.chat</p>
          <p className="chat__header__bottom-text">beBetter</p>
        </div>
      </div>

      <div className="chat__conversation">
        <div className="chat__conversation__wrapper">
          {conversation.map((message) =>
            message.isUser ? (
              <div key={uuid()} className="user-message">
                {message.text}
              </div>
            ) : (
              <div key={uuid()} className="bot-message">
                <img
                  className="bot-message__chat-head"
                  src={chatHead}
                  alt="Logo"
                />
                <p className="bot-message__text">{message.text}</p>
              </div>
            )
          )}
          {typing && <Typing></Typing>}
          <div ref={bottomRef}></div>
        </div>
      </div>

      <Inputs
        handleSend={handleSend}
        inputVal={inputVal}
        setInputVal={setInputVal}
      ></Inputs>
    </>
  );
}

export default Chat;
