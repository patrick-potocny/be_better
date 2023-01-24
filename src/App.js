import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Chat from "./components/Chat";

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showLp, setShowLp] = useState(true)

  async function openChat(params) {
    setChatOpen(true)
    setTimeout(() => {
      setShowLp(false);
    }, 2000);
  }

  return (
    <div className="app">
      {showLp ? <LandingPage openChat={openChat}></LandingPage> : ''}
      {chatOpen ? <Chat></Chat> : ''}
    </div>
  );
}

export default App;
