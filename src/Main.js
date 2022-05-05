import React, { useState, useRef } from "react";
import "./App.css";
import { Collapse, Drawer } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinFilled,
  MenuOutlined,
} from "@ant-design/icons";

import logo from "./assets/logo1.png";
import entry from "./assets/entry.jpg";
import collection from "./assets/collection.gif";
import world from "./assets/world2.png";
import utilities from "./assets/utilities.png";
import roadMap from "./assets/roadMap.jpeg";
import roadMapMobile from "./assets/roadMapMobile.jpeg";
import placeholder from "./assets/placeholder.png";
import elite from "./assets/nft/elite.png";
import joe from "./assets/nft/joe.png";
import yash from "./assets/nft/yash.png";
import shawn from "./assets/nft/shawn.jpg";
import david from "./assets/nft/david.jpg";
import { DiscordIcon } from "./components/Icon/DiscordIcon";
import ImgCarousel from "./components/Carousal/Carousal";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

function App() {
  const [visible, setVisible] = useState(false);
  const introductionRef = useRef(null);
  const collectionRef = useRef(null);
  const worldwideviewRef = useRef(null);
  const utilitiesRef = useRef(null);
  const roadmapRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

  const introductionScroll = () =>
    introductionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const collectionScroll = () =>
    collectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const worldwideviewRefScroll = () =>
    worldwideviewRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const utilitiesScroll = () =>
    utilitiesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const roadmapScroll = () =>
    roadmapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const teamScroll = () =>
    teamRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const faqScroll = () =>
    faqRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="App">
      <div className="container">
        <section className="entry">
          <div className="navwrapper">
            <div className="desktopNav">
              <img
                className="logo"
                src={logo}
                alt="logo"
                width={264}
                height="auto"
              ></img>
              <li className="menulink">
                <a onClick={introductionScroll}>INTRODUCTION</a>
              </li>
              <li className="menulink">
                <a onClick={collectionScroll}>COLLECTION</a>
              </li>
              <li className="menulink">
                <a onClick={worldwideviewRefScroll}>WORLDVIEW</a>
              </li>
              <li className="menulink">
                <a onClick={utilitiesScroll}>UTILITIES</a>
              </li>
              <li className="menulink">
                <a onClick={roadmapScroll}>ROADMAP</a>
              </li>
              <li className="menulink">
                <a onClick={teamScroll}>TEAM</a>
              </li>
              <li className="menulink">
                <a onClick={faqScroll}>FAQ</a>
              </li>
            </div>
            <div className="mobileNav">
              <div className="mobilenav-wrapper">
                <img
                  className="logo"
                  src={logo}
                  alt="logo"
                  width={264}
                  height="auto"
                ></img>
                <button className="navbar-btn" onClick={showDrawer}>
                  <MenuOutlined />
                </button>
              </div>
              <Drawer
                placement="right"
                onClose={onClose}
                visible={visible}
                className="navbar-items-mobile"
              >
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#introduction">INTRODUCTION</a>
                </li>
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#collection">COLLECTION</a>
                </li>
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#worldwideview">WORLDVIEW</a>
                </li>
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#utilities">UTILITIES</a>
                </li>
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#roadmap">ROADMAP</a>
                </li>
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#team">TEAM</a>
                </li>
                <li className="menulink-mob" onClick={() => setVisible(false)}>
                  <a href="#faqs">FAQ</a>
                </li>
              </Drawer>
            </div>
            <img
              className="entryImg"
              src={entry}
              alt="entry"
              width={2048}
              height={1258}
            ></img>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={introductionRef} id="introduction" className="intro">
          <div className="introcontainer">
            <div className="introwrapper">
              <div className="introcontent">
                <h2>INTRODUCTION</h2>
                <p>
                  Welcome to the Pessimistic Donkey Club. This is a group of
                  7777 donkeys who live on Happy Farm. This is a farm where
                  donkeys play sports, design clothing, practice magic, and make
                  porcelain. There are schools, playgrounds, and stadiums.
                </p>
              </div>
              <ImgCarousel />
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={collectionRef} id="collection" className="intro">
          <div className="introcontainer">
            <div className="introwrapper">
              <img
                className="introImg"
                width={1024}
                height={683}
                src={collection}
                alt="collection"
              ></img>
              <div className="introcontent">
                <h2>COLLECTION</h2>
                <p>
                  Each Donkey is generated programmatically and unique. We had
                  over 160 traits including hair, clothing, backgrounds,
                  necklaces, etc. In our traits, we included streets wear,
                  crypto related items, and Chinese cultures. The Donkeys are
                  stored on the Solana blockchain and the price to purchase a
                  Donkey is 1 Solana.
                </p>
                <button className="mint-btn">Mint a donkey</button>
              </div>
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={worldwideviewRef} id="worldwideview" className="intro">
          <div className="introcontainer">
            <div className="introwrapper">
              <div className="introcontent">
                <h2>WORLDVIEW</h2>
                <p>
                  Our Donkeys live in the Happy Farm. All of them have their own
                  stories about their lives. Danny, Porcelain Master, Bat
                  Donkey, Joker, Wizard, Ninja, Pepe Donkey, etc. Our stories
                  surround Danny’s life and his adventures…
                </p>
                <Link to="/worldview">
                  <button className="mint-btn">Read a Lore</button>
                </Link>
              </div>
              <img
                className="introImg"
                width={1024}
                height={683}
                src={world}
                alt="intro"
              ></img>
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={utilitiesRef} id="utilities" className="intro">
          <div className="introcontainer">
            <div className="introwrapper">
              <img
                className="introImg"
                width={1024}
                height={683}
                src={utilities}
                alt="utilities"
              ></img>
              <div className="introcontent">
                <h2>UTILITIES</h2>
                <ul>
                  <li>
                    Owning a PDC NFT, means you have complete rights for the
                    NFT. You can use it as your profile pictures, and show it
                    off on your social media!
                  </li>
                  <li>
                    Owners of PDC NFT will have access to our private
                    members-only Discord channel.
                  </li>
                  <li>
                    The owner of PDC NFT will have access and gain special items
                    in Metaverse games collaborated with PDC.
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={roadmapRef} id="roadmap" className="intro">
          <div className="introcontainer">
            <div className="introwrapper">
              <img src={roadMap} className="roadmapImg1" alt="road map" />
              <img src={roadMapMobile} className="roadmapImg2" alt="road map" />
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={teamRef} id="team" className="intro">
          <div className="introcontainer">
            <div className="faqwrapper">
              <div className="faqcontent">
                <h2>MEET OUR FANTASTIC TEAM</h2>
                <div className="image-wrapper">
                  <div className="image-container">
                    <img src={joe} alt="Elite NFT Studio"></img>
                    <h2>Joe Zhao</h2>
                    <p>Co-Founder</p>
                    <span className="icons">
                      <span className="icon-filled">
                        <InstagramOutlined />
                      </span>
                      <span className="icon-filled">
                        <TwitterOutlined />
                      </span>
                      <span className="icon-filled">
                        <LinkedinFilled />
                      </span>
                      <span className="icon-filled">
                        <DiscordIcon />
                      </span>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src={shawn} alt="Joe"></img>
                    <h2>Shawn Wu</h2>
                    <p>Co-Founder</p>
                    <span className="icons">
                      <span className="icon-filled">
                        <InstagramOutlined />
                      </span>
                      <span className="icon-filled">
                        <TwitterOutlined />
                      </span>
                      <span className="icon-filled">
                        <LinkedinFilled />
                      </span>
                      <span className="icon-filled">
                        <DiscordIcon />
                      </span>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src={david} alt="Yash"></img>
                    <h2>David Huang</h2>
                    <p>Co-Founder</p>
                    <span className="icons">
                      <span className="icon-filled">
                        <InstagramOutlined />
                      </span>
                      <span className="icon-filled">
                        <TwitterOutlined />
                      </span>
                      <span className="icon-filled">
                        <LinkedinFilled />
                      </span>
                      <span className="icon-filled">
                        <DiscordIcon />
                      </span>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src={yash} alt="Shawn"></img>
                    <h2>Yash Gawde</h2>
                    <p>Artist</p>
                    <span className="icons">
                      <span className="icon-filled">
                        <InstagramOutlined />
                      </span>
                      <span className="icon-filled">
                        <TwitterOutlined />
                      </span>
                      <span className="icon-filled">
                        <LinkedinFilled />
                      </span>
                      <span className="icon-filled">
                        <DiscordIcon />
                      </span>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src={elite} alt="David"></img>
                    <h2>Rupesh Dudhmal</h2>
                    <p>Artist</p>
                    <span className="icons">
                      <span className="icon-filled">
                        <InstagramOutlined />
                      </span>
                      <span className="icon-filled">
                        <TwitterOutlined />
                      </span>
                      <span className="icon-filled">
                        <LinkedinFilled />
                      </span>
                      <span className="icon-filled">
                        <DiscordIcon />
                      </span>
                    </span>
                  </div>
                  {/* <div className="image-container">
                    <img src={placeholder}></img>
                    <h2>Shawn Wu</h2>
                    <p>Founder</p>
                    <span className="icons">
                      <span className="icon-filled">
                        <InstagramOutlined />
                      </span>
                      <span className="icon-filled">
                        <TwitterOutlined />
                      </span>
                      <span className="icon-filled">
                        <LinkedinFilled />
                      </span>
                      <span className="icon-filled">
                        <DiscordIcon />
                      </span>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section ref={faqRef} id="faqs" className="intro">
          <div className="introcontainer">
            <div className="faqwrapper">
              <div className="faqcontent">
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <div>
                  <Collapse
                    expandIcon={({ isActive }) =>
                      isActive ? <MinusOutlined /> : <PlusOutlined />
                    }
                    accordion
                    className="collapse"
                  >
                    <Panel header="Why Pessimistic Donkey Club?" key="1">
                      <p className="paneltext">
                        Owning a PDC NFT means you have 100% of the right to the
                        digital art. Our aim is to create a community to help
                        everyone achieve mental peace & not feel alone in hard
                        times. Our project is designed to increase its price in
                        the future. Joining PDC means joining our positive
                        community and our future projects.
                      </p>
                    </Panel>
                    <Panel header="How many Donkeys are there?" key="2">
                      <p>
                        We are preselling 200 Donkeys, afterwards, the rest of
                        9398 Donkeys includes 3999 whitelist and 5399 public
                        sales. There will be 502 Donkeys being set aside, so
                        there are a total of 8088 Donkeys.
                      </p>
                    </Panel>
                    <Panel header="How to mint a Donkey?" key="3">
                      <p>
                        You will need a Phantom Wallet to mint a Donkey. After
                        you created one, connect your Phantom Wallet on our
                        website. Then use the mint link on the top of our
                        website, you will be all set!
                      </p>
                    </Panel>
                    <Panel
                      header="How much does it cost to buy a Donkey?"
                      key="4"
                    >
                      <p>1 SOL</p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
            <hr className="divider"></hr>
          </div>
        </section>
        <section id="footer" className="intro">
          <div className="introwrapper">
            <div className="introcontent" style={{ width: "100%" }}>
              <p>Copyright © 2022 Pessimistic Donkey Club</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
