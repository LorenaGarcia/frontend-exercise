import React from "react";
import Layer from "../assets/images/layer.png";
import Visa from "../assets/images/visa.png";
import Phone from "@material-ui/icons/Phone";

const FooterMenu = () => {
  return (
    <div className="container-footer-menu">
      <div className="flex">
        <div className="div-footer-menu">
          <p className="title-footer-menu">CONTÁCTANOS</p>
          <p className="text-footer-menu">
            <Phone className="icon-phone" />
            (555) 530 9858
          </p>
        </div>
        <div className="div-footer-menu">
          <p className="title-footer-menu">CONÓCENOS</p>
          <p className="text-footer-menu">Acerca de nosotros </p>
          <p className="text-footer-menu">Nuestro equipo</p>
          <p className="text-footer-menu">Nuestros servicios</p>
          <p className="text-footer-menu">Responsabilidad social</p>
          <p className="text-footer-menu">Atención a proveedores</p>
        </div>
        <div className="div-footer-menu">
          <p className="title-footer-menu">COMPRA SEGURA</p>
          <p className="text-footer-menu">
            Aceptamos tarjetas de crédito, débito, prepago y pagos en efectivo.
          </p>
          <div className="flex-cards">
            <img className="image-credit-card" alt="" src={Layer} />
            <img className="image-credit-card2" alt="" src={Visa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
