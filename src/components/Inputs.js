import React from 'react';
import PropTypes from 'prop-types'
import sendIcon from "../assets/images/Send.svg";

function Inputs({ handleSend, inputVal, setInputVal}) {
  return (
    <div className="inputs">
        <input
          className="inputs__text-input"
          placeholder="Message..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? handleSend() : "")}
          type="text"
          maxLength="1000"
        />
        <button onClick={handleSend} className="inputs__send">
          <img src={sendIcon} alt="Send" />
        </button>
      </div>
  );
}

Inputs.propTypes = {
  handleSend: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
  setInputVal: PropTypes.func.isRequired
}

export default Inputs;