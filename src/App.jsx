import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
