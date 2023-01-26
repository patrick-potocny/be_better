import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Chat from "./components/Chat";
import { sleep } from "./utils";

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showLp, setShowLp] = useState(true)

  // Delay the removing of LandingPage until animations finish
  async function openChat(params) {
    setChatOpen(true)
    await sleep(2000)
    setShowLp(false);
  }

  return (
    <div className="app">
      {showLp ? <LandingPage openChat={openChat}></LandingPage> : ''}
      {chatOpen ? <div className="chat"><Chat></Chat></div>: ''}
    </div>
  );
}

export default App;
