import "./about.css";
import aboutImage from "../../public/aboutImages/about-image.jpg";
import NavBar from "../ui/nav.tsx"

export default function About() {
  return (
    <main>
      <NavBar/>
      <svg
        className="about-image"
        viewBox="0 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="template--23648770720115__1634231695ab1e43fb"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href={aboutImage.src}
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
          fill="url(#template--23648770720115__1634231695ab1e43fb)"
        ></path>
      </svg>

      <h1 className='about-header'>About</h1>
      <p>
        Welcome to the Figma Store, a collection of Figma apparel (layers) and
        accessories (components) designed for our community
      </p>
    </main>
  );
}
