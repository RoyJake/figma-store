"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { footerSvgs, footerColors } from "../lib/footerSvg.ts";
import "./footer.css";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: footerColors[Math.floor(Math.random() * 4)] }}
    >
      <div className="footerLogo">
        <Image
          src={footerSvgs[Math.floor(Math.random() * 8)].src}
          alt="footerlogo"
          fill
        />
      </div>
      <h2>
        OBJECTS
        <br />
        THAT INSPIRE.
      </h2>

      <ul className="footer-list">
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>

      <ul className="footer-socials">
        <li>FIGMA</li>
        <li>TWITTER</li>
        <li>INSTAGRAM</li>
        <li>YOUTUBE</li>
      </ul>

      <button>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="black">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z"
            fill="black"
          ></path>
        </svg>
      </button>

      <motion.div
        className="marquee"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        marvelously considered collection of objects for our time on figma&#39;s
      </motion.div>
    </footer>
  );
}
