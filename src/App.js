import React from "react";
import MainLayout from "./components/MainLayout";
import backgroundImage from "./img/19861.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="App-header">
        <MainLayout />
      </header>
    </div>
  );
}

export default App;
