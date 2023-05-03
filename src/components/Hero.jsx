import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrangeButton from "./OrangeButton";
import caretaker1 from "../assets/img/png/caretaker1.png";
import caretaker2 from "../assets/img/png/caretaker2.png";
import caretaker3 from "../assets/img/png/caretaker3.png";
import caretaker4 from "../assets/img/png/caretaker4.png";
import caretaker5 from "../assets/img/png/caretaker5.png";
import cat from '../assets/img/png/hero-cat.png'
import dog from '../assets/img/png/hero-dog.png'
import dogFoot from "../assets/img/png/dog_foot.png";
import daniel from "../assets/img/png/Daniel.png";

const Hero = () => {
  return (
    <div>
      <section>
        <Container>
          <Row className="py-5">
            <Col>
              <div className="position-relative">
                <img
                  className="w-100 position-relative cat_hero"
                  src={cat}
                  alt="img"
                />
                <img
                  className=" position-absolute w_65   end-0 bottom-0 hero_dog"
                  src={dog}
                  alt="img"
                />
              </div>
            </Col>
            <Col md={7}>
              <div className="ps-5">
                <h2 className="fw_400 fs_55 clr_darkblue ff_slackey pb-4 mb-2">
                  We take care of your pet and help them to grow
                </h2>
                <p className="fw_500 fs_16 ff_poppins clr_gray max_w_482 pb-5">
                  Best pets are waiting for adoption. Find out the the perfect
                  one you will like it. It’s our promise.
                </p>
                <div className="d-flex gap_56">
                  <OrangeButton />
                  <div className="d-flex align-items-center">
                    <img
                      className="caretaker w-100 "
                      src={caretaker1}
                      alt="img"
                    />
                    <img
                      className="mg_left_n17 caretaker w-100 "
                      src={caretaker2}
                      alt="img"
                    />
                    <img
                      className="mg_left_n17 caretaker w-100 "
                      src={caretaker3}
                      alt="img"
                    />
                    <img
                      className="mg_left_n17 caretaker w-100 "
                      src={caretaker4}
                      alt="img"
                    />
                    <div className="position-relative caretaker mg_left_n17">
                      <img className=" w-100 " src={caretaker5} alt="img" />
                      <div className="ff_poppins fw_600 fs_16 clr_white more7 position-absolute">
                        +7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-5">
                  <img src={dogFoot} alt="img" />
                  <div>
                    <h3 className="fw_400 fs_20 ff_slackey clr_gray mb-0 lh_30 ">
                      How to take care
                    </h3>
                    <p className="fw_400 fs_16 ff_poppins clr_gray lh_30 mb-0">
                      Perfect one you will like it. It’s our promise.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-end">
            <Col md={8}>
              <Row className="data_orange_linear ps-4 py-3">
                <Col md={4} className="py-5 d-flex  flex-column">
                  <h3 className="ff_poppins fw_400 fs_18 mb-3 clr_white">Adopted</h3>
                  <h4 className="ff_slackey fw_400 fs_35 mb-0 clr_white">2500+</h4>
                </Col>
                <Col md={4} className="py-5 d-flex  flex-column">
                  <h3 className="ff_poppins fw_400 fs_18 mb-3 clr_white">
                    Customers
                  </h3>
                  <h4 className="ff_slackey fw_400 fs_35 mb-0 clr_white">1850+</h4>
                </Col>
                <Col md={4} className="py-5 d-flex  flex-column">
                  <h3 className="ff_poppins fw_400 fs_18 mb-3 clr_white">
                    Testimonials
                  </h3>
                  <h4 className="ff_slackey fw_400 fs_35 mb-0 clr_white">1300+</h4>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="Green_hero_bg pad_31_34">
              <div>
                <p className="fw_500 fs_16 ff_poppins clr_white lh_28">
                  Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do
                  eiusmod tempor incididu ut labore et quis nostrud sed do eius
                  .....
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="w_65">
                    <hr className="clr_white"/>
                    <h3 className="mb-0 fw_400 fs_18 ff_slackey clr_white">
                      Daniel Kahneman
                    </h3>
                  </div>
                  <img src={daniel} alt="img" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;