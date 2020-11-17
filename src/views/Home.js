import React from "react";
import Offers from "@material-ui/icons/LocalOffer";
import { newProducts, bestSellers } from "../data";

import Menu from "../components/menu";
import Carousel from "../components/carousel";
import Products from "../components/products";
import Information from "../components/information";
import FooterImages from "../components/footerImages";
import FooterMenu from "../components/footerMenu";
import FooterInformation from "../components/footerInformation";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="offers-container">
        <div className="offers">
          OFERTAS <Offers className="icon-offers" />
        </div>
      </div>
      <Carousel />
      <Products title={"Nuevos productos"} listProducts={newProducts} />
      <Information />
      <Products title={"Más vendidos"} listProducts={bestSellers} />
      <FooterImages />
      <FooterMenu />
      <FooterInformation />
    </div>
  );
};

export default Home;
