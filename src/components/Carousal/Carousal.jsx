import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/carousal/img1.png";
import Img2 from "../../assets/carousal/img2.png";
import Img3 from "../../assets/carousal/img3.png";
import Img4 from "../../assets/carousal/img4.png";
import Img5 from "../../assets/carousal/img5.png";
import "./carousal.css";

function ImgCarousel() {
  const imgs = [Img1, Img2, Img3, Img4, Img5];
  return (
    <div className="carousal-wrapper">
      <Carousel
        autoPlay={true}
        interval={1000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {imgs.map((img) => (
          <div className="carousal-img">
            <img src={img} alt="carousal" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
