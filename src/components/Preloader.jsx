import React, { useState } from "react";
import doctor from "../assets/img/png/doctor_img.png";

const Preloader = () => {

  return (
    <div>
      <section id="none">
        <div
          className="w-100 min-vh-100 bg_secondary z_10 d-flex justify-content-center position-fixed top-0 start-0 flex-column
         align-items-center"
        >
          <img src={doctor} alt="img" />
          <div className="loader_outerBox mt-4">
            <div className="innerBox"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preloader;
