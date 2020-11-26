import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Header titleName="Phone Store" />
      <Hero heroTitle="Best Sellers!" />
    </div>
  );
}

export default App;
