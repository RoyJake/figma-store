"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./nav.css";
import search_icon from "../public/svgs/search-icon.svg";
import logo from "../public/svgs/logo.svg";
import account from "../public/svgs/account.svg";

export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="menu-wrapper">
          <div className="menu-bar menuBar-top"></div>
          <div className="menu-bar menuBar-middle"></div>
          <div className="menu-bar menuBar-bottom"></div>
        </div>

        <div className="shop-button">shop</div>
        <div className="about-button">about</div>

        <Image className="search-icon" src={search_icon} alt="search-icon" />

        <Image className="logo" src={logo} alt="logo" />

        <Image className="account-icon" src={account} alt="account-icon" />

        <div className="cart">
          <span className="cart-text">cart</span>
          <span className="cart-counter">0</span>
        </div>
      </nav>
      
      <div className="menu">
        <ul className="menu-list">
          <li>shop</li>
          <li>about</li>
        </ul>
        <ul className="menu-footer-list">
          <li>FAQ</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
          <li>terms of service</li>
          <li>account</li>
        </ul>
      </div>
    </>
  );
}
