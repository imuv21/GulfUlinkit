import React, { Fragment, useEffect } from 'react';
import './Coverflow.scss';

const Coverflow = () => {

    useEffect(() => {
        const Swiper = window.Swiper;
        new Swiper('.swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
            },
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                thresholdDelta: 70,
            },
            loop: true,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
                1560: {
                    slidesPerView: 3,
                },
            },
        });
    }, []);


    return (
        <Fragment>
            <div className="swiper-cont">
                <article className='testimon'>
                    <h1 className='heading'>Client Testimonials</h1>
                    <h2 className="headingBig">What Clints Love In Working With Ulinkit</h2>
                </article>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide--one">
                            <div>
                                <h2>Acme Corp</h2>
                                <p>
                                    Acme Corp specializes in cutting-edge technology solutions, delivering innovative products that transform businesses and improve efficiency globally.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--two">
                            <div>
                                <h2>Bright Solutions</h2>
                                <p>
                                    Bright Solutions is a leader in renewable energy, providing sustainable power solutions to residential and commercial clients worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--three">
                            <div>
                                <h2>Vivid Designs</h2>
                                <p>
                                    Vivid Designs is a creative agency known for its unique approach to branding and marketing, helping businesses stand out in crowded markets.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--four">
                            <div>
                                <h2>Pixel Innovations</h2>
                                <p>
                                    Pixel Innovations excels in developing digital products, from mobile apps to full-scale web platforms, driving user engagement and satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--five">
                            <div>
                                <h2>Nimbus Logistics</h2>
                                <p>
                                    Nimbus Logistics offers reliable and efficient transportation services, specializing in logistics management and supply chain optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Coverflow;