import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/images/banner.png";

const ImagesCarousel = () => {
  return (
    <Carousel autoPlay showArrows={false} showThumbs={false} showStatus={false}>
      <div>
        <div className="banner-left">
          <div className="text-banner">
            Conoce la <strong>nueva</strong>
          </div>
        </div>
        <div className="banner-right">
          <img className="img-banner" alt="" src={Image1} />
        </div>
      </div>

      <div>
        <div className="banner-left2">
          <div className="text-banner">
            Conoce la <strong>nueva</strong>
          </div>
        </div>
        <div className="banner-right">
          <img className="img-banner" alt="" src={Image1} />
        </div>
      </div>

      <div>
        <div className="banner-left">
          <div className="text-banner">
            Conoce la <strong>nueva</strong>
          </div>
        </div>
        <div className="banner-right">
          <img className="img-banner" alt="" src={Image1} />
        </div>
      </div>
    </Carousel>
  );
};

export default ImagesCarousel;
