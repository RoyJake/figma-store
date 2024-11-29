"use client";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Image from "next/image";

import NavBar from "../ui/nav.tsx";
import Footer from "../ui/footer.tsx";
import "./product.css";

import { RootState } from "../lib/redux/redux_store.ts";
import { ProductKey } from "../lib/product.ts";
import Products from "../lib/product.ts";

export default function Product() {
  const productName = useSelector(
    (state: RootState) => state.product.productName
  );
  const product: ProductKey = productName as ProductKey;
  console.log(Products[product].productName);
  return (
    <>
      <NavBar />
      <main id="small_screen">
        <section id="product_info">
          <h1 id="layers">LAYERS</h1>
          <h2>{Products[product].productName}</h2>
          <p>{Products[product].productDescription}</p>
        </section>

        <section id="slider-section">
          <motion.div
            id="product_slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1300 }}
          >
            {Products[product].productImages.map((image, index) => (
              <div key={index} className="product_images">
                <Image
                  className="image"
                  src={image}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="product_order">
          <a href="">Size guide</a>
          <div id="product_size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
          <div id="item_add_sub_counter">
            <div id="sub">-</div>
            <div id="counter">1</div>
            <div id="add">+</div>
          </div>
          <div id="product_price">ADD $45.00</div>
        </section>
      </main>

      <main id="large_screen">
        <section id="showcase_section">
          <div id="product_showcase">
            {Products[product].productImages.map((image, index) => (
              <div key={index} className="ls_product_images">
                <Image
                  className="image"
                  src={image}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </div>
            ))}
          </div>
          <div id='main_showcase'></div>

        </section>

        <section id="product_info">
          <h1 id="layers">LAYERS</h1>
          <h2>{Products[product].productName}</h2>
          <a href="">Size guide</a>
          <div id="product_size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
          <div id="item_add_sub_counter">
            <div id="sub">-</div>
            <div id="counter">1</div>
            <div id="add">+</div>
          </div>
          <div id="product_price">ADD $45.00</div>
          <p>{Products[product].productDescription}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
