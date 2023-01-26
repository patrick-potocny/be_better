import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import sendIcon from "../assets/images/Send.svg";

function Inputs({ handleSend}) {
  const inputRef = useRef(null)

  return (
    <div className="inputs">
        <input
        ref={inputRef}
          className="inputs__text-input"
          placeholder="Message..."
          onKeyUp={(e) => (e.key === "Enter" ? handleSend(inputRef) : "")}
          type="text"
          maxLength="1000"
        />
        <button onClick={() => handleSend(inputRef)} className="inputs__send-button">
          <img src={sendIcon} alt="Send" />
        </button>
      </div>
  );
}

Inputs.propTypes = {
  handleSend: PropTypes.func.isRequired
}

export default Inputs;