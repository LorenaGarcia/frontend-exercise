import React from "react";
import Truper from "../assets/images/truper.png";
import Phillips from "../assets/images/phillips.png";
import Coflex from "../assets/images/coflex.png";
import Teka from "../assets/images/teka.png";
import Steren from "../assets/images/steren.png";

const FooterImages = () => {
  return (
    <div className="container-footer-images">
      <div className="flex">
        <div className="div-footer-images">
          <img className="images-footer" alt="" src={Truper} />
        </div>
        <div className="div-footer-images">
          <img className="images-footer" alt="" src={Phillips} />
        </div>
        <div className="div-footer-images">
          <img className="images-footer" alt="" src={Coflex} />
        </div>
        <div className="div-footer-images">
          <img className="images-footer" alt="" src={Teka} />
        </div>

        <div className="div-footer-images">
          <img className="images-footer" alt="" src={Steren} />
        </div>
      </div>
    </div>
  );
};

export default FooterImages;
