import React from "react";
import "./App.css";
import phone from "./phone.png";
import phoneSmall from "./phoneSmall.png";
import rating from "./rating.png";
import bulb from "./bulb.png";
import connections from "./connections.png";
import fan from "./fan.png";
import lock from "./lock.png";
import cloud from "./lock.png";
import upgrade from "./lock.png";
import analytics from "./lock.png";
import lock from "./lock.png";

function App() {
  return (
    <div className="wrapper">
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
            <div>
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
          </div>

          <img className="image-phone" src={phone} alt="" />
        </div>
      </div>
      <div className="container-2  light-gradient">
        <div className="text-and-image-container">
          <div className="text-container  center width-60">
            <div className="header font-big black text-center">
              Built for Hardware Companies
            </div>
            <div className="footer black font-small">
              <p> Kraftful makes your smart home devices delightful to use. </p>
              <p>
                Leading brands turn to Kraftful to get top-rated apps for their
                connected products.
              </p>
              <p>
                We're Apple, Slack, CZI, Facebook, and IFTTT alumni with years
                of experience developing software enjoyed by millions of users.
              </p>
              <p>
                Kraftful is backed by Y Combinator, Google, Samsung Next,
                Precursor Ventures, F7 Ventures, Cleo Capital, Leadout Capital,
                and many exceptional entrepreneurs.
              </p>
            </div>
          </div>
        </div>
        <div className="text-and-image-container">
          <div className="text-container center width-60">
            <img className="image-rating" src={rating} alt="" />
            <div className="header font-big black text-center">
              Thousands of delighted users
            </div>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="text-and-image-container width-60">
          <img className="image-phone-small" src={phoneSmall} alt="" />

          <div className="text-container-column">
            <div className="header font-medium black">
              UX for any smart home device
            </div>
            <div className="footer black font-small">
              <div className="flex">
                <img className="icon" src={bulb} alt="" />
                <p>
                  {" "}
                  <div className="small-header">Smart lighting control</div>
                  Kraftful's UX for connected lights and switches delights
                  users. They will want to connect (and buy!) more of your
                  products.{" "}
                </p>
              </div>
              <div className="flex">
                <img className="icon" src={fan} alt="" />
                <p>
                  <div className="small-header">
                    Climate control and air quality
                  </div>
                  Our UX empowers users to enjoy a perfect temperature and air
                  quality, while minimizing their energy consumption.
                </p>
              </div>

              <div className="flex">
                <img className="icon" src={lock} alt="" />
                <p>
                  <div className="small-header">
                    Locks, cameras and security
                  </div>
                  Your users will feel secure and in control because they can
                  intuitively master Kraftful's interfaces for security devices.
                </p>
              </div>

              <div className="flex">
                <img className="icon" src={connections} alt="" />
                <p>
                  <div className="small-header">Other connected products</div>
                  Our solution covers interfaces for a wide range of smart home
                  appliances and we are constantly expanding our product
                  offering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-4">
        <div className="text-and-image-container flex column">
          <div className="text-container  center width-60">
            <div className="header font-medium white text-center">
              Get to market faster and better
            </div>
            <div className="footer white font-small text-center">
              <p> Save up to 80% on development costs.</p>
            </div>
          </div>
          <div className="margin-auto">
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
              value="Contact us"
            />
          </div>
        </div>
      </div>
      <div className="container-5">
        <div className="text-and-image-container">
          <div className="text-container  center width-60">
            <div className="header font-medium text-center black">
              Kraftful Insights
            </div>
            <div className="footer black font-small">
              <p>
                {" "}
                Get in touch if you're curious to learn more about the research
                behind our white papers. We love sharing what we learn.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-6">
        <div className="text-and-image-container">
          <div className="text-container  center width-60">
            <div className="header font-medium text-center black">
              Complete software solution
            </div>
            <div className="footer black font-small text-center margin-bottom-10">
              <p>
                {" "}
                Kraftful offers the only complete software solution that gets
                your product to market faster and keeps you ahead of the
                industry.{" "}
              </p>
            </div>


              <div className="flex flex-wrap">
                <div className="width-50">
                  <img className="icon center" src={connections} alt="" />
                  <p>
                    <div className="small-header">Other connected products</div>
                    Our solution covers interfaces for a wide range of smart
                    home appliances and we are constantly expanding our product
                    offering.
                  </p>
                </div>
                <div className="width-50">
                  <img className="icon center" src={connections} alt="" />
                  <p>
                    <div className="small-header">Other connected products</div>
                    Our solution covers interfaces for a wide range of smart
                    home appliances and we are constantly expanding our product
                    offering.
                  </p>
                </div>
                <div className="width-50">
                  <img className="icon center" src={connections} alt="" />
                  <p>
                    <div className="small-header">Other connected products</div>
                    Our solution covers interfaces for a wide range of smart
                    home appliances and we are constantly expanding our product
                    offering.
                  </p>
                </div>
                <div className="width-50">
                  <img className="icon center" src={connections} alt="" />
                  <p>
                    <div className="small-header">Other connected products</div>
                    Our solution covers interfaces for a wide range of smart
                    home appliances and we are constantly expanding our product
                    offering.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">bottom</div>
    </div>
  );
}

export default App;
