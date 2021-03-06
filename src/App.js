import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { ThemeProvider } from "@material-ui/core";
import theme from "./resources/theme.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Landing />
        <About />
        <Portfolio />
        <Contact />
      </>
    </ThemeProvider>
  );
}

export default App;
