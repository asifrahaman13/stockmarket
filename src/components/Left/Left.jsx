import React from "react";
import "./Left.css";
import { NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiFillDashboard,
  AiOutlineLineChart,
} from "react-icons/ai";
import { SiTheconversation } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { BsCompassFill, BsDroplet } from "react-icons/bs";
import { GoRepoPull } from "react-icons/go";
import { MdOutlineSegment } from "react-icons/md";
import { GiDisintegrate } from "react-icons/gi";

const Left = () => {
  return (
    <>
      <div className="left-container">
        <div className="left-container-segments">
          <BsDroplet className="icon" />
          <p id="bluereceipt">BlueReceipt</p>
        </div>
        <div className="left-container-segments" id="search">
          <AiOutlineSearch className="icon" />
          <input type="text" className="text" placeholder="Search..."/>
        </div>
        <div className="left-container-segments" id="dashboard">
          <AiFillDashboard className="icon" />
          <p>
            <NavLink to="/">Dashboard</NavLink>
            </p>
        </div>
        <div className="left-container-segments" id="horizontal"></div>
        <div className="left-container-segments">
          <SiTheconversation className="icon" />
          <p>
            <NavLink to="/conversations">
            Conversations
            </NavLink>
            </p>
        </div>
        <div className="left-container-segments">
          <TbSettingsAutomation className="icon" />
          <p>
            <NavLink to="/automatics"> Automatics</NavLink>
           </p>
        </div>
        <div className="left-container-segments">
          <BsCompassFill className="icon" />
          <p><NavLink to="/compaigns">Compaigns</NavLink>
            </p>
        </div>
        <div className="left-container-segments">
          <GoRepoPull className="icon" />
          <p>
            <NavLink to="/popup">Popup</NavLink>
            </p>
        </div>
        <div className="left-container-segments">
          <AiOutlineLineChart className="icon" />
          <p>
            <NavLink to="/livechart">Live Chart</NavLink>
            </p>
        </div>
        <div className="left-container-segments">
          <MdOutlineSegment className="icon" />
          <p>
            <NavLink to="/segments">Segments</NavLink>
            </p>
        </div>
        <div className="left-container-segments">
          <GiDisintegrate className="icon" />
          <p>
            <NavLink to="/integrations">Integrations</NavLink>
            </p>
        </div>
        <div className="left-container-segments" id="kara">
          <div className="image"></div>
          <div className="profile">
            <div className="first">Oguz Yagiz Kara</div>
            <div className="second">Store Name</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
