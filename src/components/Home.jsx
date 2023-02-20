import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversation from "./Conversations/Conversation";
import Left from "./Left/Left";
import Right from "./Right/Right";
import Automatics from "./Automatics/Automatics";
import Compaigns from "./Compaigns/Compaigns";
import Popup from "./Popup/Popup";
import LiveChart from "./LiveChart/LiveChart";
import Segments from "./Segments/Segments";
import "./Home.css";
import Integrations from "./Integrations/Integrations";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-div">
          <div className="main-left">
            <Left />
          </div>
          <div className="main-right">
            <Routes>
              <Route path="/" element={<Right />} />
              <Route path="/conversations" element={<Conversation />} />
              <Route path="/automatics" element={<Automatics />} />
              <Route path="/compaigns" element={<Compaigns />} />
              <Route path="/popup" element={<Popup />} />
              <Route path="/livechart" element={<LiveChart />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
