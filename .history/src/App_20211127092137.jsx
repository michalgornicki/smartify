import React from "react";
import "./App.css";;
import phone from "./phone.jpg"

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-item navbar-item-logo">Smart home</div>
        <div className="navigation">
          <div className="navbar-item">Solution</div>
          <div className="navbar-item">Features</div>
          <div className="navbar-item">Blog</div>
          <div className="navbar-item">Team</div>
        </div>
        <div className="navbar-item button navbar-item-button">Get started</div>
      </div>

      <div className="container-1">
        <div className="text-container">
        <div className="header">Make your smart home product easy to use</div>
        <div className="footer">Get a top-rated app 6x faster with our no-code solution.</div>

        <input className="input-text" placeholder="enter your e-mail"
        type="text" name="" id="" />
        <input className="button container-button" type="button" value="Learn more" />

        </div>
        
        
      </div>
    </div>
  );
}

export default App;
