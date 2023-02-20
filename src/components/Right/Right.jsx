import React, { useState } from "react";
import "./Right.css";
import { SiTheconversation } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import LineChart from "./Charts/LIneChart/LineChart";
import GaugeChat from "./Charts/GaugeChart/GaugeChat";

const Right = () => {
  return (
    <>
      <div className="right-container">
        <div className="right-container-fragments" id="right-first-fragment">
          <div className="upper-header" id="upper-icon">
            <div className="upper-image"></div>
            <div className="profile">
              <div className="upper-icon">Good Morning Oguz</div>
              <div className="second">
                Here are your stats for Today, 24 Aug 2020
              </div>
            </div>
          </div>
          <div className="upper-header" id="upper-icon">
            <div className="date">
              <SiTheconversation className="today" />
              <p className="today">Today</p>
            </div>
            <div className="date">compared to</div>
            <div className="date">Previous Period</div>
          </div>
        </div>
        <div className="right-container-fragments">
          <div className="right-middle-fragment">
            <div className="designation">
              <p>Total Revenue</p>
              <div className="positive-change">+12.5%</div>
            </div>
            <div className="figures">$32,631.71</div>
            <div className="sales">433 Orders</div>
          </div>
          <div className="right-middle-fragment">
            <div className="designation">
              <p>Subscribers</p>
              <div className="positive-change">+32.5%</div>
            </div>
            <div className="figures">484,205</div>
            <div className="sales">$56 Average Order</div>
          </div>
          <div className="right-middle-fragment">
            <div className="designation">
              <p>Conversations</p>
              <div className="negative-change">-3.4%</div>
            </div>
            <div className="figures">552,553</div>
            <div className="sales">5 min Average Response Time</div>
          </div>
          <div className="right-middle-fragment">
            <div className="designation">
              <p>Pop Conversion Rate</p>
              <div className="positive-change">+32.5%</div>
            </div>
            <div className="figures">25%</div>
            <div className="sales">5% Sales Conversion Rate</div>
          </div>
        </div>
        <div className="right-container-fragments" id="graph">
          <LineChart className="graph" id="line" />
        </div>
        <div className="right-container-fragments">
          <div className="right-foooter-fragment">
            <div className="cart-header">
              <div className="cart-headers">Automations</div>
              <div className="cart-headers">Compaigns</div>
              <div className="cart-headers">Segments</div>
              <div className="cart-headersdfd" id="last-month">
                <div className="select-month">Last Month</div>
              </div>
            </div>
            <div className="cart-body">
              <div className="cart-items">
                <div className="cart-content" id="cart-content">
                  <TiShoppingCart className="cart-title" />
                  <div className="cart-title">
                    <div className="title">Abandoned Cart 7 Days</div>
                    <div className="stats">4024 Sent | 124 Clicks</div>
                  </div>
                </div>
                <div className="cart-content" id="cart-numbers">
                  <div className="amount">$5,231</div>
                  <div className="orders">41 Orders | $150 AOV</div>
                </div>
              </div>
              <div className="cart-items">
                <div className="cart-content" id="cart-content">
                  <TiShoppingCart className="cart-title" />
                  <div className="cart-title">
                    <div className="title">Abandoned Cart 7 Days</div>
                    <div className="stats">4024 Sent | 124 Clicks</div>
                  </div>
                </div>
                <div className="cart-content" id="cart-numbers">
                  <div className="amount">$5,231</div>
                  <div className="orders">41 Orders | $150 AOV</div>
                </div>
              </div>
              <div className="cart-items">
                <div className="cart-content" id="cart-content">
                  <TiShoppingCart className="cart-title" />
                  <div className="cart-title">
                    <div className="title">Abandoned Cart 7 Days</div>
                    <div className="stats">4024 Sent | 124 Clicks</div>
                  </div>
                </div>
                <div className="cart-content" id="cart-numbers">
                  <div className="amount">$5,231</div>
                  <div className="orders">41 Orders | $150 AOV</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-foooter-fragment">
            <div className="gauge" id>
              <div className="level-header">Level 5</div>
              <div className="level-header">+$32,050 in the last month</div>
            </div>
            <GaugeChat className="gauge" />
            <div className="gauge">$14,495</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
