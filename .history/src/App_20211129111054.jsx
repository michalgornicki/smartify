import React from "react";
import "./App.css";
import phone from "./phone.png";
import rating from "./rating.png";

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
        <div className="text-and-image-container">
          <div className="text-container">
            <div className="header">
              Make your smart home product easy to use
            </div>
            <div className="footer">
              Get a top-rated app 6x faster with our no-code solution.
            </div>

            <input
              className="input-text"
              placeholder="enter your e-mail"
              type="text"
              name=""
              id=""
            />
            <input
              className="button container-button"
              type="button"
              value="Learn more"
            />
          </div>

          <img className="image" src={phone} alt="" />
        </div>
      </div>
      <div className="container-2">
        <div className="text-and-image-container">
          <div className="text-container  center width-70">
            <div className="header  black">Built for Hardware Companies</div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>Leading
              brands turn to Kraftful to get top-rated apps for their connected
              products. </p>
              <p>We're Apple, Slack, CZI, Facebook, and IFTTT alumni with
              years of experience developing software enjoyed by millions of
              users. </p>
              <p>Kraftful is backed by Y Combinator, Google, Samsung Next,
              Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
              and many exceptional entrepreneurs. </p>
            </div>
          </div>
        </div>
        <div className="text-and-image-container">
          <div className="text-container  center width-70">
          <img className="image-rating" src={rating} alt="" />
            <div className="header f black">Thousands of delighted users</div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>Leading
              brands turn to Kraftful to get top-rated apps for their connected
              products. </p>
              <p>We're Apple, Slack, CZI, Facebook, and IFTTT alumni with
              years of experience developing software enjoyed by millions of
              users. </p>
              <p>Kraftful is backed by Y Combinator, Google, Samsung Next,
              Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
              and many exceptional entrepreneurs. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="text-and-image-container">
          <div className="text-container  center width-70">
            <div className="header  black">UX for any smart home device</div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>Leading
              brands turn to Kraftful to get top-rated apps for their connected
              products. </p>
              <p>We're Apple, Slack, CZI, Facebook, and IFTTT alumni with
              years of experience developing software enjoyed by millions of
              users. </p>
              <p>Kraftful is backed by Y Combinator, Google, Samsung Next,
              Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
              and many exceptional entrepreneurs. </p>
            </div>
          </div>
        </div>
        </div>
        <div className="container-4">
        <div className="text-and-image-container">
          <div className="text-container  center width-70">
            <div className="header  black">Get to market faster and better</div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>Leading
              brands turn to Kraftful to get top-rated apps for their connected
              products. </p>
              <p>We're Apple, Slack, CZI, Facebook, and IFTTT alumni with
              years of experience developing software enjoyed by millions of
              users. </p>
              <p>Kraftful is backed by Y Combinator, Google, Samsung Next,
              Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
              and many exceptional entrepreneurs. </p>
            </div>
          </div>
        </div>
        </div>
        <div className="container-5">
        <div className="text-and-image-container">
          <div className="text-container  center width-70">
            <div className="header  black">Kraftful Insights</div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>Leading
              brands turn to Kraftful to get top-rated apps for their connected
              products. </p>
              <p>We're Apple, Slack, CZI, Facebook, and IFTTT alumni with
              years of experience developing software enjoyed by millions of
              users. </p>
              <p>Kraftful is backed by Y Combinator, Google, Samsung Next,
              Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
              and many exceptional entrepreneurs. </p>
            </div>
          </div>
        </div>
        </div>
        <div className="container-6">
        <div className="text-and-image-container">
          <div className="text-container  center width-70">
            <div className="header  black">Complete software solution</div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>Leading
              brands turn to Kraftful to get top-rated apps for their connected
              products. </p>
              <p>We're Apple, Slack, CZI, Facebook, and IFTTT alumni with
              years of experience developing software enjoyed by millions of
              users. </p>
              <p>Kraftful is backed by Y Combinator, Google, Samsung Next,
              Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
              and many exceptional entrepreneurs. </p>
            </div>
          </div>
        </div>
        </div>
        <div className="bottom-bar">bottom</div>
    </div>
  );
}

export default App;
