import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Btnred from './Btnred'
import petcat from '../assets/img/png/catpet.png'
import Slider from "react-slick";

const Decodblog = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <>
        <section className='bg_brownlight py-5'>
            <Container className='my-5 pb-sm-5 container'>
                <Row>
                    <Col lg={5}>
                        <p className='ff_Slackey fw_400 fs_45 cl_292525 mb-4'>DaCode Blog</p>
                        <p className='ff_Poppins fw_400 fs_16 cl_65668 maxw_362'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className='pt-5 mt-1'>
                            <Btnred redtext="Learn More"/>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Slider {...settings} className='slider_shadow saasbusines mt-lg-0 mt-5'>
            <div className='d-sm-flex gap-3 gap-xl-5 px-2 '>
                            <div className='bg_catimg'>
                                <img src={petcat} alt="Cat" className='tranform'/>
                            </div>
                            <div className='pt-3 pt-sm-1'>
                                <p className='ff_Poppins fw_600 fs_20 cl_292525'>Why Your SaaS Business should use WordPress</p>
                                <p className='ff_Poppins fw_400 fs_16 cl_65668 opacity5 pb-3'>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                                <div className='d-flex gap-3 pt-xl-4 pb-2'>
                                    <div className='redcricle'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9467 7.88379L2.82078 7.88379" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.9632 12.0261L2.82075 7.88368L6.9632 3.74124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='redcricle'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.82071 7.88379L12.9467 7.88379" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8.80426 3.74146L12.9467 7.8839L8.80426 12.0263" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
            </div>
            <div className='d-sm-flex gap-3 gap-xl-5 px-2'>
                            <div className='bg_catimg'>
                                <img src={petcat} alt="Cat" className='tranform'/>
                            </div>
                            <div className='pt-3 pt-sm-1'>
                                <p className='ff_Poppins fw_600 fs_20 cl_292525'>Why Your SaaS Business should use WordPress</p>
                                <p className='ff_Poppins fw_400 fs_16 cl_65668 opacity5 pb-3'>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
                                <div className='d-flex gap-3 pt-xl-4 pb-2'>
                                    <div className='redcricle'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9467 7.88379L2.82078 7.88379" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.9632 12.0261L2.82075 7.88368L6.9632 3.74124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='redcricle'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.82071 7.88379L12.9467 7.88379" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8.80426 3.74146L12.9467 7.8839L8.80426 12.0263" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
          
        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
}

export default Decodblog