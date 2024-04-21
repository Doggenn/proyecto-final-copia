// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import OnBoardingOne from './OnBoardingOne'
import OnBoardingTwo from './OnBoardingTwo'
import OnBoardingThree from './OnBoardingThree'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function Carrusel() {

    return (
        <div>
            <div className='b-uton'>
                <Link to={'/Home'} className="btn-close " />


            </div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <OnBoardingOne />
                </Carousel.Item>
                <Carousel.Item>
                    <OnBoardingTwo />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <OnBoardingThree />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
