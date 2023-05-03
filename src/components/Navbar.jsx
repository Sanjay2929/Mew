import React, { useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav>
        <Container className="py-3">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className=" ff_slackey fs_27 fw_400 mb-0">Mew</h1>
            <div onClick={showUl} className="z_51">
              <h3 className="d-block d-sm-none ">
                <RiMenu3Fill />
              </h3>
            </div>
            <div
              className={
                first
                  ? "d-flex align-items-center w-100 mobile_screen"
                  : "d-flex align-items-center w-100  mobile_screen naV_0"
              }
            >
              <ul className="nav d-flex flex-sm-row flex-column align-items-center mb-0 w-100 justify-content-center ps-0 gap_55">
                <li>
                  <a className="fw_400 fs_16 ff_poppins clr_blueGray" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="fw_400 fs_16 ff_poppins clr_blueGray" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="fw_400 fs_16 ff_poppins clr_blueGray" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="fw_400 fs_16 ff_poppins clr_blueGray" href="#facilities">
                    Facilities
                  </a>
                </li>
              </ul>
              <Button className="fs_14 fw_600 ff_poppins clr_darkblue pad_18_32 Sign_up_button opacity-75">
                Sign&nbsp;up
              </Button>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
