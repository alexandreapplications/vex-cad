import React from "react";
import HomePage from "./Public/HomePage";
import LandingPage from "./Internal/LandingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <HomePage />
      <LandingPage />
    </div>
  );
}

export default App;
