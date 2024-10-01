"use client";

import { motion } from "framer-motion";
import Image from "next/image"

import './nav.css'
import search_icon from "../public/svgs/search-icon.svg"; 
import logo from "../public/svgs/logo.svg";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="menu-wrapper">
        <div className="menu-bar menuBar-top"></div>
        <div className="menu-bar menuBar-middle"></div>
        <div className="menu-bar menuBar-bottom"></div>
      </div>

    <Image className="search-icon" src={search_icon} alt='search-icon'></Image>

    <Image className="logo" src={logo} alt="logo" />

    <div className="cart-counter"></div>

    </nav>
  );
}
