import React from "react";
import { Alaram } from "./component/alaram";
import { Nav } from "./component/nav";
import { Footer } from "./component/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Alaram />
      <Footer />
    </div>
  );
}

export default App;
