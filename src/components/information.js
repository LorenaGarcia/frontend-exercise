import React from "react";
import Delivery from "../assets/images/delivery.png";
import Return from "../assets/images/return.png";
import Like from "../assets/images/like.png";

const Information = () => {
  return (
    <div className="container-information">
      <div className="flex">
        <div className="div-information">
          <img className="image-information" alt="" src={Delivery} />
          <p className="title">Envíos y devoluciones</p>
          <p className="sub-title">
            Entrega garantizada en máximo de 48 horas.
          </p>
        </div>
        <div className="div-information">
          <img className="image-information" alt="" src={Return} />
          <p className="title">Garantía de devolución</p>
          <p className="sub-title">Clientes 100% satisfechos.</p>
        </div>
        <div className="div-information">
          <img className="image-information" alt="" src={Like} />
          <p className="title">Clientes satisfechos</p>
          <p className="sub-title">Ofrecemos la mejor variedad de productos.</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
