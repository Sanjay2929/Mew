import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dogFoot from '../assets/img//png/service_dogFoot.png'
import injection from "../assets/img/png/injection.png";
import vetDoctor from '../assets/img/png/vet_doctor.png'
import serviceCat from '../assets/img/png/services_cat.png'
import cleaning from '../assets/img/png/cleaning.png'
import Slider from 'react-slick';
import OrangeButton from './OrangeButton';
import redArrow from "../assets/img/png/red_arrow.png";
import blueArrow from "../assets/img/png/blue_arrow.png";
import yellowArrow from "../assets/img/png/yellow_arrow.png";
import greenArrow from "../assets/img/png/green_arrow.png";

const Services = () => {
     var settings = {
       dots: false,
       infinite: true,
       slidesToShow: 4,
       arrows: true,
      //  nextArrow: ".next",
       pauseOnHover: false,
       cssEase: "linear",
       responsive: [
         {
           breakpoint: 1400,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1,
             infinite: true,
             dots: false,
           },
         },
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
  return (
    <div>
      <section className="bg_secondary pt-5 overflow-hidden">
        <Container className="py-5 mt-3">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <img src={dogFoot} alt="img" />
              <h3 className="fw_400 fs_45 ff_slackey clr_darkblue">
                Our Services
              </h3>
            </div>
            <p className=" fw_400 fs_16 ff_poppins clr_gray text-center max_w_482 lh_30 pb-5 mb-0">
              Best pets are waiting for adoption. Find out the the perfect one
              you will like it. It’s our promise.
            </p>
          </div>
          <Slider {...settings} className="py-1">
            <div className="pb-5 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center  services_slider max_w_250">
                <img className="mb-3" src={injection} alt="img" />
                <h4 className="fw_400 fs_20 ff_slackey clr_gray pt-3">
                  Vaccination
                </h4>
                <p className="mb-0 fw_400 fs_14 ff_poppins clr_gray lh_24 text-center">
                  Perfect one you will like it. It’s our promise.
                </p>
              </div>
            </div>
            <div className="pt-5 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center  services_slider max_w_250">
                <img className="mb-3" src={serviceCat} alt="img" />
                <h4 className="fw_400 fs_20 ff_slackey clr_gray pt-3">
                  Pet Grooming
                </h4>
                <p className="mb-0 fw_400 fs_14 ff_poppins clr_gray lh_24 text-center">
                  Perfect one you will like it. It’s our promise.
                </p>
              </div>
            </div>
            <div className="pb-5 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center  services_slider max_w_250">
                <img className="mb-3" src={vetDoctor} alt="img" />
                <h4 className="fw_400 fs_20 ff_slackey clr_gray pt-3">
                  Veterinary
                </h4>
                <p className="mb-0 fw_400 fs_14 ff_poppins clr_gray lh_24 text-center">
                  Perfect one you will like it. It’s our promise.
                </p>
              </div>
            </div>
            <div className="pt-5 d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center  services_slider max_w_250">
                <img className="mb-3" src={cleaning} alt="img" />
                <h4 className="fw_400 fs_20 ff_slackey clr_gray pt-3">
                  Cleaning
                </h4>
                <p className="mb-0 fw_400 fs_14 ff_poppins clr_gray lh_24 text-center">
                  Perfect one you will like it. It’s our promise.
                </p>
              </div>
            </div>
          </Slider>
          <div className="d-flex  pt-4 align-items-center gap_72  services_button">
            <OrangeButton />
            <div  className=" d-flex gap_15 ">
              <img src={redArrow} alt="arrow" />
              <img src={blueArrow} alt="arrow" />
              <img src={yellowArrow} alt="arrow" />
              <img src={greenArrow} alt="arrow" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Services