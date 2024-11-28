"use client";

import React from "react";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useAnimate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "./nav.css";
import search_icon from "../../public/svgs/search-icon.svg";
import logo from "../../public/svgs/logo.svg";
import account from "../../public/svgs/account.svg";

const navBarVariant = {
  hidden: { y: "-100%" },
  vissible: { y: 0 },
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [navScope, animate] = useAnimate();
  const [menuScope, animate1] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: number = scrollY.getPrevious() ?? 0;
    if (isOpen) {
      return;
    }
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const menuBurgerAnimation = async function (isOpen: boolean) {
    animate(".menuBar-top", {
      transform: isOpen
        ? ["translateY(0px)", "rotate(45deg)"]
        : ["rotate(0deg)", "translateY(-2px)"],
    });

    animate(".menuBar-middle", {
      opacity: isOpen ? 0 : 1,
    });

    animate(".menuBar-bottom", {
      transform: isOpen
        ? ["translateY(0px)", "rotate(-45deg)"]
        : ["rotate(0deg)", "translateY(2px)"],
    });

    animate(navScope.current, {
      backgroundColor: isOpen ? "#fff" : "#ffc700",
      y: 0,
    });
  };

  const menuAnimation = async (isOpen: boolean) => {
    animate1(menuScope.current, {
      transform: isOpen ? "translateY(0%)" : "translateY(-110%)",
    });
  };

  return (
    <>
      <motion.nav
        className="nav"
        ref={navScope}
        variants={navBarVariant}
        animate={isHidden ? "hidden" : "vissible"}
      >
        <div
          className="menu-wrapper"
          onClick={() => {
            setIsOpen(!isOpen);
            menuBurgerAnimation(!isOpen);
            menuAnimation(!isOpen);
          }}
        >
          <motion.div className="menu-bar menuBar-top"></motion.div>
          <motion.div className="menu-bar menuBar-middle"></motion.div>
          <motion.div className="menu-bar menuBar-bottom"></motion.div>
        </div>

        <Link
          className="shop-button"
          href=""
          onClick={() => {
            window.location.href = "/#figmaCollection-section";
          }}
        >
          shop
        </Link>
        <Link className="about-button" href="./about">
          about
        </Link>

        <Image className="search-icon" src={search_icon} alt="search-icon" />

        <Link
          id="logo-link"
          href=""
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Image className="logo" src={logo} alt="logo" />
        </Link>

        <Image className="account-icon" src={account} alt="account-icon" />

        <Link className="cart" href="">
          <span className="cart-text">bag</span>
          <span className="cart-counter">0</span>
        </Link>
      </motion.nav>

      <div className="menu" ref={menuScope}>
        <ul className="menu-list">
          <li>
            <Link
              className="shop-menu-button"
              href="/#figmaCollection-section"
              onClick={() => {
                window.location.href = "/#figmaCollection-section";
              }}
            >
              shop
            </Link>
          </li>
          <li>
            <Link className="about-menu-button" href="./about">
              about
            </Link>
          </li>
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
