import Image from "next/image";
import { motion } from "framer-motion"

import "./page.css";
import headerImages from "./imageArray.tsx";

export default function Home() {
  return (
    <header className="header">
      <div className="carousel-container">
        <motion.div className="carousel" drag="x">
          <div className="header-image-containers">
            <svg
              className="headerSvgs one-svg"
              // width="1124"
              // height="612"
              viewBox="0 0 1124 612"
              fill="none"
            >
              <defs>
                <pattern
                  id="9ec3ec12-3d86-4315-b660-2cbee1cedb72"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[1].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
                fill="url(#9ec3ec12-3d86-4315-b660-2cbee1cedb72)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="650"
              // height="650"
              viewBox="0 0 650 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="90bbe729-77e1-4102-8a5f-533992e3c942"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[2].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <rect
                x="2"
                y="2"
                width="646"
                height="646"
                rx="103"
                fill="url(#90bbe729-77e1-4102-8a5f-533992e3c942)"
              ></rect>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="658"
              // height="658"
              viewBox="-2 -2 654 654"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="4d1b2e4d-d66c-4b87-bbad-d753c62db021"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[3].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
                fill="url(#4d1b2e4d-d66c-4b87-bbad-d753c62db021)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg className="headerSvgs four-svg"
              // width="1124"
              // height="612"
              viewBox="0 0 1124 612"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="188d1671-d29a-4af9-815d-2e775ba8a897"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[4].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
                fill="url(#188d1671-d29a-4af9-815d-2e775ba8a897)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="650"
              // height="650"
              viewBox="0 0 650 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="caed66ad-af6e-4a01-ae43-bde4a813b5b8"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[5].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z"
                fill="url(#caed66ad-af6e-4a01-ae43-bde4a813b5b8)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="650"
              // height="648"
              viewBox="0 0 650 648"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="d9dcd03f-4f85-4f3a-aa86-a68d7215ea0b"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[6].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                d="M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z"
                fill="url(#d9dcd03f-4f85-4f3a-aa86-a68d7215ea0b)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="650"
              // height="650"
              viewBox="0 0 650 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="94e2a6be-8fcd-40c5-b48f-b52866f4b443"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[7].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z"
                fill="url(#94e2a6be-8fcd-40c5-b48f-b52866f4b443)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="650"
              // height="650"
              viewBox="0 0 650 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="65fbfbbc-a231-4efe-8eb0-2632cf674770"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[8].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <rect
                x="2"
                y="2"
                width="646"
                height="646"
                rx="103"
                fill="url(#65fbfbbc-a231-4efe-8eb0-2632cf674770)"
              ></rect>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="650"
              // height="648"
              viewBox="0 0 650 648"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="d4d5c9a0-d644-47ad-bcd6-c6bd7f56cb16"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[9].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                d="M648 4.22453L648 643.684C648 644.463 647.15 644.943 646.483 644.54L645.449 646.252L646.483 644.54L449.926 525.864C447.953 524.673 445.42 524.985 443.795 526.62L325.709 645.449C325.318 645.842 324.682 645.842 324.291 645.449L206.205 526.62C204.58 524.985 202.047 524.673 200.074 525.864L3.51682 644.54C2.85037 644.943 1.99997 644.463 1.99997 643.684L2 4.22451C2 3.4526 2.83746 2.97177 3.50403 3.36084L4.51221 1.63352L3.50409 3.36084L200.147 118.131C202.087 119.264 204.544 118.963 206.154 117.397L324.303 2.46841C324.691 2.09081 325.309 2.09082 325.697 2.46841L443.846 117.397C445.456 118.963 447.913 119.264 449.853 118.131L646.496 3.36087C647.163 2.97178 648 3.45263 648 4.22453Z"
                fill="url(#d4d5c9a0-d644-47ad-bcd6-c6bd7f56cb16)"
              ></path>
            </svg>
          </div>

          <div className="header-image-containers">
            <svg
              className="headerSvgs"
              // width="658"
              // height="658"
              viewBox="-2 -2 654 654"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a2fff064-d150-402f-950f-f53d970c7949"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={headerImages[0].src}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  ></image>
                </pattern>
              </defs>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
                fill="url(#a2fff064-d150-402f-950f-f53d970c7949)"
              ></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
