import React from 'react';
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>READY TO HARD WORK IS THE <br/> KEY TO SUCCESS</h3>
                      
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>INCREASE YOUR MUSCLE POWER <br />WITH THE GYM</h3>
                     
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>FOR FITNESS BODYAND BETTER MIND <br />THE BEST GYM CENTER</h3>
                      
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;