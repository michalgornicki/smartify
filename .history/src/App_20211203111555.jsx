import React from "react";
import "./App.css";
import phone from "./phone.png";
import phoneSmall from "./phoneSmall.png";
import rating from "./rating.png";
import bulb from "./bulb.png";
import connections from "./connections.png";
import fan from "./fan.png";
import lock from "./lock.png";
import cloud from "./cloud.png";
import upgrade from "./upgrade.png";
import analytics from "./analytics.png";
import phones from "./phones.png";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";
import avatar5 from "./avatar5.png";
import avatar6 from "./avatar6.png";
import avatar7 from "./avatar7.png";
import avatar8 from "./avatar8.png";
import avatar9 from "./avatar9.png";
import avatar10 from "./avatar10.png";
import avatar11 from "./avatar11.png";
import avatar12 from "./avatar12.png";
import postPhoto1 from "./post-photo1.jpg";
import postPhoto2 from "./post-photo2.jpg";
import postPhoto3 from "./post-photo3.jpg";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <a href="#top"><div className="navbar-item navbar-item-logo">Smartify</div></a>
        <div className="navigation">
          <a href="#container-3"><div className="navbar-item">Solution</div></a>
          <a href="#container-6"><div className="navbar-item">Features</div></a>
          <a href="#container-5"><div className="navbar-item">Blog</div></a>
        </div>
        <div className="navbar-item button navbar-item-button">Get started</div>
      </div>

      <div className="container-1">
        <div className="text-and-image-container">
          <div className="text-container margin-top-30">
            <div className="header">
              Get our brilliant smart home app
            </div>
            <div className="footer">
              Fastest and simplest solution on market.
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
              Great for home and bussiness
            </div>
            <div className="footer black font-smaller text-center">
              <p> Smartify makes your smart home devices delightful to use. </p>
              <p>
                Leading brands turn to Smartify to get top-rated apps for their
                connected products.
              </p>
              <p>
              Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained
              </p>
              <p>
              His having within saw become ask passed misery giving. Recommend questions get too fulfilled. He fact in we case miss sake. Entrance be throwing he do blessing up. Hearts warmth in genius do garden advice mr it garret. 
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
            <div className="opinion-container">
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar1} alt="" />I just
                  love it.
                </div>{" "}
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar2} alt="" />
                  Very professional product.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar3} alt="" />
                  I'm fully satisfied.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar4} alt="" />
                  It just work!
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar5} alt="" />
                  My friends use it too.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar6} alt="" />
                  Nice!
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar7} alt="" />
                  Fantastic!
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar8} alt="" />
                  Very polished.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar9} alt="" />
                  Plug and play.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar10} alt="" />
                  Very easy to set up.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar11} alt="" />
                  Life-changing.
                </div>
              </Fade>
              <Fade bottom>
                <div className="opinion">
                  <img className="opinion-avatar" src={avatar12} alt="" />
                  Beautiful, simple, modern design.
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container-3" id="container-3">
        <div className="text-and-image-container width-60">
          <Fade left>
            <img className="image-phone-small" src={phoneSmall} alt="" />{" "}
          </Fade>

          <div className="text-container-column">
            <div className="header font-medium black">
              UX for any smart home device
            </div>
            <div className="footer black font-smaller">
              <div className="flex">
                <img className="icon" src={bulb} alt="" />
                <p>
                  {" "}
                  <div className="small-header">Smart lighting control</div>
                  Smartify's UX for connected lights and switches delights
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
                  intuitively master Smartify's interfaces for security devices.
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
            <div className="footer white font-smaller text-center">
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
      <div className="container-5" id="container-5">
        <div className="text-and-image-container">
          <div className="text-container center width-90">
            <div className="header font-medium text-center black">
              Smartify Insights
            </div>
            <div className="footer black font-smaller text-center width-60 center">
              <p>
                {" "}
                Lea.{" "}
              </p>
            </div>

            <div className="posts-container">
              <div className="post">
                <div className="header black margin-top-3 font-small bold  text-center height-30">
                  Collaboration with Yahwee
                  </div>
                <div className="footer black font-smaller text-center margin-bottom-3 margin-top-3 height-30">
                  In last months our company profits raised by 26%...
                </div>
                <img className="post-photo" src={postPhoto1} alt="" />
              </div>
              <div className="post">
              <div className="header black margin-top-3 font-small bold text-center height-30">
                  Creating perfect smart home system
                </div>
                <div className="footer black font-smaller text-center margin-bottom-3 margin-top-3 height-30">
                  Check how to create best integration between devices...
                </div>
                <img className="post-photo" src={postPhoto2} alt="" />
              </div>
              <div className="post">
              <div className="header black margin-top-3 bold font-small  text-center height-30">
                  We are looking for new team members
                </div>
                <div className="footer black font-smaller text-center margin-bottom-3 margin-top-3 height-30">
                  Would you like to join us? 
                </div>
                <img className="post-photo" src={postPhoto3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-6" id="container-6">
        <div className="text-and-image-container">
          <div className="text-container  center width-80">
            <div className="header font-medium text-center black">
              Complete software solution
            </div>
            <div className="footer black font-smaller text-center margin-bottom-10 width-60 margin-auto">
              <p>
                {" "}
                Smartify offers the only complete software solution that gets
                your product to market faster and keeps you ahead of the
                industry.{" "}
              </p>
            </div>

            <div className="flex flex-wrap margin-bottom-10">
              <div className="width-50 margin-bottom-10">
                <img
                  className="icon center background-blue"
                  src={phones}
                  alt=""
                />
                <p>
                  <div className="small-header text-center">
                  iOS & Android
                  </div>
                  <div className="footer black font-smaller text-center center width-80">
                  Intuitive smart home interfaces based on what we’ve learned developing award winning iOS and Android apps that have been enjoyed by millions of users around the world.
                  </div>

                </p>
              </div>
              <div className="width-50 margin-bottom-10">
                <img
                  className="icon center background-green"
                  src={cloud}
                  alt=""
                />
                <p>
                  <div className="small-header text-center">
                  Cloud services
                  </div>
                  <div className="footer black font-smaller text-center center width-80">
                  Fully-managed cloud services that seamlessly integrate with your existing systems to support features like notifications, emails, activity feeds, accounts and settings, etc.
                  </div>

                </p>
              </div>
              <div className="width-50 margin-bottom-10">
                <img
                  className="icon center background-orange"
                  src={analytics}
                  alt=""
                />
                <p>
                  <div className="small-header text-center">
                  Analytics
                  </div>
                  <div className="footer black font-smaller text-center center width-80">
                  Deep insights into how your apps and hardware products can be improved based on analysis of user interaction data and qualitative reviews.
                  </div>

                </p>
              </div>
              <div className="width-50 margin-bottom-10">
                <img
                  className="icon center background-red"
                  src={upgrade}
                  alt=""
                />
                <p>
                  <div className="small-header text-center">
                  Upgrades
                  </div>
                  <div className="footer black font-smaller text-center center width-80">
                  Experiences that are always improving with new features and kept up-to-date with the latest phones, OS upgrades, and all of the changes in the connected ecosystem.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
