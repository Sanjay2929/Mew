import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Doctor from "../assets/img/png/doctor_img.png";
import OrangeButton from "./OrangeButton";
import dotBox from '../assets/img/png/dotSquare.png'
import Plus from '../assets/img/png/plus.png'
import orangePlus from '../assets/img/png/orangePlus.png'
import wLine from '../assets/img/png/sec2_wLine.png'
import telephone from '../assets/img/png/telephone.png'
import Btnred from "./Btnred";

const Appointment = () => {
  return (
    <div>
      <section>
        <Container className="py-sm-5 mb-md-4">
          <Row className="align-items-center py-5 flex-wrap-reverse">
            <Col md={6}>
              <h3
                className="ff_slackey fw_400 fs_45 clr_darkblue pb-lg-4 pb-2"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Lets book a call and stay connected
              </h3>
              <div
                className="d-flex align-items-center gap_36 pb-4 justify-content-xl-start justify-content-between"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center gap_20 ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="#FF5D31" />
                    <path
                      d="M18.1875 8.0625L10.3125 15.9371L6.375 12"
                      stroke="#FFF2E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="fw_500 fs_18 ff_poppins clr_48 mb-0">
                    Vaccination Service{" "}
                  </h4>
                </div>
                <div className="d-flex align-items-center gap_20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="#FF5D31" />
                    <path
                      d="M18.1875 8.0625L10.3125 15.9371L6.375 12"
                      stroke="#FFF2E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="fw_500 fs_18 ff_poppins clr_48 mb-0">
                    Veterinary Service{" "}
                  </h4>
                </div>
              </div>
              <p
                className="fw_400 fs_16 lh_30 ff_poppins clr_gray py-lg-3 "
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className=" d-flex align-items-lg-center gap_29 flex-lg-row flex-md-column flex-sm-row flex-column">
                <div className="max_w_180  mt-3">
                  <Btnred redtext="Book a Schedule" />
                </div>
                <div className="d-flex align-items-center mt-2">
                  <img src={telephone} alt="img" />
                  <a className="mb-0 fw_500 fs_18 ff_poppins clr_48 under_line position-relative" href="#">
                    Emergency&nbsp;Call
                  </a>
                </div>
              </div>
            </Col>
            <Col className=" pb-md-0 pb-5">
              <div
                className="ps-xl-5 position-relative"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img className="w-100" src={Doctor} alt="img" />
                <img
                  className="top-0 start-0 position-absolute dotSquare"
                  src={dotBox}
                  alt="dots"
                />
                <img
                  className="position-absolute orange_plus "
                  src={orangePlus}
                  alt="img"
                />
                <img
                  className="position-absolute green_plus"
                  src={Plus}
                  alt="img"
                />
                <img
                  className="position-absolute Curl_line "
                  src={wLine}
                  alt="img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Appointment;
