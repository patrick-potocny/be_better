import React from "react";
import Typing from "./Typing";
import chatHead from "../assets/images/chat-head-icon.png";
import microphone from "../assets/images/Microphone.svg";
import sendIcon from "../assets/images/Send.svg";
import recording from "../assets/images/Recording.png";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <img className="chat__header__icon" src={chatHead} alt="Logo" />
        <div>
          <p className="chat__header__top-text">beBetter.chat</p>
          <p className="chat__header__bottom-text">beBetter</p>
        </div>
      </div>
      <div className="chat__conversation">
        <div className="bot-message">
          <img className="bot-message__chat-head" src={chatHead} alt="Logo" />
          <p className="bot-message__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            dolor, asperiores qui voluptates, voluptas quo fugit autem dolore
            reiciendis in nostrum? Aperiam soluta asperiores, illo aliquam
            doloremque laborum nostrum doloribus.
          </p>
        </div>

        <div className="user-message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          at obcaecati iste placeat consequatur sint expedita aut ea repudiandae
          laboriosam voluptas eos, numquam provident quaerat ullam sed beatae
          modi facilis.
        </div>

        <div className="bot-message">
          <img className="bot-message__chat-head" src={chatHead} alt="Logo" />
          <Typing className="bot-message__typing"></Typing>
        </div>
      </div>

      <div className="chat__inputs">
        <button className="chat__inputs__rec">
          <img src={microphone} alt="Record" />
        </button>
        <input
          className="chat__inputs__text-input"
          placeholder="Message..."
          type="text"
        />
        <button className="chat__inputs__send">
          <img src={sendIcon} alt="Send" />
        </button>
      </div>

      <button className="chat__recording">
        <img src={recording} alt="Recording" />
      </button>
    </div>
  );
}

export default Chat;
