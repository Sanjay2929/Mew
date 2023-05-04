import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facilitiesDog from "../assets/img/png/dog_facilities.png";

const Facilities = () => {
  return (
    <div>
      <section>
        <Container className="py-sm-5">
          <Row className=" align-items-start justify-content-center py-5 mt-2">
            <Col xl={4} md={6}>
              <h3 className=" ff_slackey fw_400 fs_45 clr_darkblue lh_55 mb-0">
                Facilities we provides
              </h3>
            </Col>
            <Col md={6}>
              <p className=" ff_poppins fw_400 fs_16 clr_gray mb-0 lh_30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-md-between justify-content-center py-5 mt-3 mb-md-5 mb-4">
            <Col md={4} xl={3} xs={10} className=" ">
              <div className="d-flex flex-column justify-content-between gap_147 pe-lg-4">
                <div
                  className=" pe-lg-3 facilites_afterLine position-relative facilites_circle1"
                  data-aos="fade-right"
                >
                  <h3 className="fw_400 fs_22 pb-lg-3 text-md-start text-center pb-2 mb-0 clr_darkblue ff_slackey">
                    Feed Training
                  </h3>
                  <p className=" ff_poppins fw_400  fs_16 text-md-start text-center pb-md-0 pb-4 clr_gray mb-0 lh_30">
                    Ut enim ad minim velit esse cillum dolore eu fugiat..
                  </p>
                </div>
                <div
                  className=" pe-lg-3 facilites_afterLine position-relative facilites_circle1"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <h3 className="fw_400 fs_22 pb-lg-3 text-md-start text-center pb-2 mb-0 clr_darkblue ff_slackey">
                    Health test
                  </h3>
                  <p className=" ff_poppins fw_400  fs_16 text-md-start text-center pb-md-0 pb-4 clr_gray mb-0 lh_30">
                    tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                </div>
                <div
                  className=" pe-lg-3"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <h3 className="fw_400 fs_22 pb-lg-3 text-md-start text-center pb-2 mb-0 clr_darkblue ff_slackey">
                    Vaccination
                  </h3>
                  <p className=" ff_poppins fw_400  fs_16 text-md-start text-center pb-md-0 pb-4 clr_gray mb-0 lh_30">
                    tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={8}>
              <div className="p-lg-2 py-sm-5 py-4 ">
                <img
                  className="w-100 br_300 border_dog hover_facilities_dog"
                  src={facilitiesDog}
                  alt="dog"
                />
              </div>
            </Col>
            <Col md={4} xl={3} xs={10}>
              <div className="d-flex flex-column ps-lg-4 ps-2 gap_147">
                <div className="ps-lg-3 facilites_beforeLine facilites_circle position-relative" data-aos="fade-left">
                  <h3 className="fw_400 fs_22 pb-lg-3 text-md-start text-center pb-2 mb-0 clr_darkblue ff_slackey">
                    Overnight Care
                  </h3>
                  <p className=" ff_poppins fw_400  fs_16 text-md-start text-center pb-md-0 pb-4 clr_gray mb-0 lh_30">
                    Ut enim ad minim velit esse cillum dolore eu fugiat..
                  </p>
                </div>
                <div className="ps-lg-3 facilites_beforeLine position-relative facilites_circle" data-aos="fade-left"
                  data-aos-delay="400">
                  <h3 className="fw_400 fs_22 pb-lg-3 text-md-start text-center pb-2 mb-0 clr_darkblue ff_slackey">
                    Medical Care
                  </h3>
                  <p className=" ff_poppins fw_400  fs_16 text-md-start text-center pb-md-0 pb-4 clr_gray mb-0 lh_30">
                    tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                </div>
                <div className="ps-lg-3" data-aos="fade-left"
                  data-aos-delay="200">
                  <h3 className="fw_400 fs_22 pb-lg-3 text-md-start text-center pb-2 mb-0 clr_darkblue ff_slackey">
                    Traning Facility
                  </h3>
                  <p className=" ff_poppins fw_400  fs_16 text-md-start text-center pb-md-0 pb-4 clr_gray mb-0 lh_30">
                    tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Facilities;
