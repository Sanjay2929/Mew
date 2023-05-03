import React, { useState } from "react";
import doctor from "../assets/img/png/doctor_img.png";

const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);

  return (
    <div>
      <section id="none">
        <div
          className="w-100 min-vh-100 bg_secondary z_10 d-flex justify-content-center position-absolute top-0 start-0
         align-items-center"
        >
          <img src={doctor} alt="img" />
        </div>
      </section>
    </div>
  );
};

export default Preloader;
