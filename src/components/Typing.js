import React, { useEffect, useState } from "react";
import chatHead from '../assets/images/chat-head-icon.png'

function Typing() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(dots.length === 3 ? "" : dots + ".");
    }, 400);
    return () => clearInterval(intervalId);
  }, [dots]);

  return <div className="bot-message" aria-label="Bot is typing">
  <img className="bot-message__chat-head" src={chatHead} alt="Logo" />
  <p className="bot-message__typing">
    Typing{dots}
  </p>
</div>;
}

export default Typing;
