import React from "react";

const FooterInformation = () => {
  return (
    <div className="container-footer-information">
      <div className="flex-footer">
        <div className="div-footer-conditions">
          <p>© All Rights Reserved</p>
        </div>
        <div className="div-footer-images flex-conditions">
          <p>
            <a className="text-link " href="/">
              Terminos & Condiciones
            </a>
          </p>
          <p>
            <a className="text-link " href="/">
              Aviso de privacidad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInformation;
