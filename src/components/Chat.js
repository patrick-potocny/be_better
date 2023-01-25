import React, { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';
import Typing from "./Typing";
import chatHead from "../assets/images/chat-head-icon.png";
import sendIcon from "../assets/images/Send.svg";
import { sleep, getBotResponse } from "../utils";

function Chat() {
  const [conversation, setConversation] = useState([]);
  const [lastMessage, setLastMessage] = useState({
    user: "",
    bot: "",
  });
  const [typing, setTyping] = useState(true);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    async function showWelcomeMessage() {
      await sleep(3000);
      const welcomeMessage = {
        text: "Hey I am BetterBot, \nan AI chatbot here to help you improve in any area of your life. Whether you're looking to create a plan and achieve your goals or find your purpose, I am here to guide and support you every step of the way. I look forward to working with you and helping you reach your full potential. \n Ask me anything.",
        isUser: false,
      };
      setTyping(false);
      setConversation((conv) => [...conv, welcomeMessage]);
    }

    showWelcomeMessage();
  }, []);

  async function handleSend() {
    if (!typing) {
      const userMessage = {
        text: inputVal,
        isUser: true,
      };
      setConversation(conv => [...conv, userMessage]);
      setInputVal("");
      await sleep(1000);
      setTyping(true);
      const botResponse = await getBotResponse(inputVal, lastMessage)
      setLastMessage({
        user: userMessage,
        bot: botResponse
      })
      setTyping(false)
      setConversation(conv => [...conv, {text: botResponse, isUser: false}])
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
              <div key={uuid()} className="user-message">{message.text}</div>
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
        </div>
      </div>

      <div className="chat__inputs">
        <input
          className="chat__inputs__text-input"
          placeholder="Message..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? handleSend() : "")}
          type="text"
          maxLength="1000"
        />
        <button onClick={handleSend} className="chat__inputs__send">
          <img src={sendIcon} alt="Send" />
        </button>
      </div>
    </>
  );
}

export default Chat;
