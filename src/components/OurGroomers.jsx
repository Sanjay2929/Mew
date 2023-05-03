import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import Adam from "../assets/img/png/Adam.png"
import Morgan from "../assets/img/png/Morgan.png"
import Ana from "../assets/img/png/Ana.png"
import Mouran from "../assets/img/png/Mouran.png"
import Btnred from './Btnred';

const OurGroomers = () => {
    const ourgroomers = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
       responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    };
  return (
    <>
        <section className='bg_FFF4EA pb-4'>
            <Container className='py-5'>
                <p className='ff_Slackey fw_400 fs_45 cl_lightgray text-center pb-3 mt-4'>Our Groomers</p>
                <Slider {...ourgroomers} className='py-5 mb-5 ourgromers_slider'>
            <div className='px-2 py-3'>
                <div className='mt-5 pt-5'></div>
                <div className='card_ourgroomers'>
                    <img src={Adam} alt="Adam Smith" className='border_radiusimg'/>
                    <p className='ff_Poppins fw_600 fs_20 cl_lightgray pt-4 mt-3'>Adam Smith</p>
                    <p className='ff_Poppins fw_400 fs_16 cl_65668 mb-4 pb-3'>Veterinarian</p>
                </div>
            </div>        
            <div className='px-2 py-3'>
                <div className='mt-5 pt-5'></div>
                <div className='card_ourgroomers'>
                    <img src={Morgan} alt="Morgan" className='border_radiusimg'/>
                    <p className='ff_Poppins fw_600 fs_20 cl_lightgray pt-4 mt-3'>Morgan Mark</p>
                    <p className='ff_Poppins fw_400 fs_16 cl_65668 mb-4 pb-3'>Trainer</p>
                </div>
            </div>        
            <div className='px-2 py-3'>
                <div className='mt-5 pt-5'></div>
                <div className='card_ourgroomers'>
                    <img src={Ana} alt="Ana" className='border_radiusimg'/>
                    <p className='ff_Poppins fw_600 fs_20 cl_lightgray pt-4 mt-3'>Ana Fargun</p>
                    <p className='ff_Poppins fw_400 fs_16 cl_65668 mb-4 pb-3'>Trainer</p>
                </div>
            </div>        
            <div className='px-2 py-3'>
                <div className='mt-5 pt-5'></div>
                <div className='card_ourgroomers'>
                    <img src={Mouran} alt="Mouran" className='border_radiusimg'/>
                    <p className='ff_Poppins fw_600 fs_20 cl_lightgray pt-4 mt-3'>Mouran Maz</p>
                    <p className='ff_Poppins fw_400 fs_16 cl_65668 mb-4 pb-3'>Care Taker</p>
                </div>
            </div>        
        </Slider>
        <div className='pb-5 text-center'>
            <Btnred redtext="View Team"/>
        </div>
            </Container>
        </section>
    </>
  )
}

export default OurGroomers