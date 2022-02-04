import React from "react";
import "./App.css";
import FontConverter from "./Components/FontConverter/FontConverter";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import SpeechToText from "./Components/SpeechToText/SpeechToText";
function App() {
  return (
    <div className="App">
      <Info />
      <FontConverter />
      <SpeechToText />
      <Footer />
    </div>
  );
}

export default App;
