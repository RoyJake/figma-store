import Image from "next/image";

import headerImages from "./imageArray.tsx";
import headerSvgs from "./svgArray.tsx";

export default function Home() {
  return (
    <header className="header">
      <div className="carousel-container"> 
        <div className="carousel">
          {headerImages.map((image, index) => (
            <div key={index} className="image_container">
              <Image
                key={index}
                src={headerSvgs[index]}
                alt={`${headerSvgs[index]}`}
              >
                <Image key={index} src={image} alt={`${image}`} />
              </Image>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
