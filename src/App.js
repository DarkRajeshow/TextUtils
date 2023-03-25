import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar.js'
import About from './components/About.js'
import TextArea from './components/TextArea.js'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")

  let toggleButton = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      for (let j = 0; j < document.querySelectorAll("*").length; j++) {
        document.querySelectorAll("*")[j].style.color = "black";
      }
      showAlert("The Dark mode was successfully disabled.", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#151715";
      for (let j = 0; j < document.querySelectorAll("*").length; j++) {
        document.querySelectorAll("*")[j].style.color = "white";
      }
      showAlert("The Dark mode was successfully Enabled.", "success");

    }
  }

  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  let applytheme = () => {
    let choices = document.querySelectorAll(".choiceCards>input");
    let ThemeBack = ["#9AE6B4", "#81E6D9", "#00B5D8", "#4A5568"];
    let ThemeColor = ["#000000", "#01352f", "white", "#ffffff"];
    let navColor = ["rgb(228 212 228 / 69%)", "rgb(225 255 215)", "rgb(44 54 67)", "rgb(24 42 66)"];

    let navbar = document.querySelector(".navbar");
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        setMode(ThemeBack[i]);
        document.body.style.backgroundColor = ThemeBack[i];
        for (let j = 0; j < document.querySelectorAll("*").length; j++) {
          document.querySelectorAll("*")[j].style.color = ThemeColor[i];
        }
        navbar.style.backgroundColor = navColor[i];
        navbar.style.color = ThemeColor[i];

        showAlert("The mode was successfully Enabled.", "success");
        console.log(mode);
      }
    }

  }

  return (
    <Router>
      <NavBar name1="TextUtils" home="Home Page" mode={mode} toggleFunc={toggleButton} applyTheme={applytheme} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/TextUtils' element={<TextArea showAlert={showAlert} />}></Route>
        <Route exact path='/TextUtils/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
