import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Doctor from "../assets/img/png/doctor_img.png";
import OrangeButton from "./OrangeButton";
import dotBox from '../assets/img/png/dotSquare.png'
import Plus from '../assets/img/png/plus.png'
import orangePlus from '../assets/img/png/orangePlus.png'
import wLine from '../assets/img/png/sec2_wLine.png'
import telephone from '../assets/img/png/telephone.png'

const Appointment = () => {
  return (
    <div>
      <section>
        <Container className="py-5 ">
          <Row className="align-items-center py-5">
            <Col md={6}>
              <h3 className="ff_slackey fw_400 fs_45 clr_darkblue pb-4">
                Lets book a call and stay connected
              </h3>
              <div className="d-flex align-items-center gap_36 pb-4">
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
              <p className="fw_400 fs_16 lh_30 ff_poppins clr_gray py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className=" d-flex align-items-center gap_29">
                <OrangeButton />
                <div className="d-flex align-items-center ">
                 <img src={telephone} alt="img" />
                  <a className="mb-0 fw_500 fs_18 ff_poppins clr_48" href="#">Emergency Call</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="ps-5 position-relative">
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
