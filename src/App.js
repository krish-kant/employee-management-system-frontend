import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <ListEmployeeComponent />
    </div>
  );
}

export default App;
