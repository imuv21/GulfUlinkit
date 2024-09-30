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
                                <h2>Jellyfish</h2>
                                <p>Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria.</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--two">
                            <div>
                                <h2>Seahorse</h2>
                                <p>
                                    Seahorses are mainly found in shallow tropical and temperate salt water throughout the world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves. Four species are found in Pacific waters from North America to South America.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--three">
                            <div>
                                <h2>octopus</h2>
                                <p>
                                    Octopuses inhabit various regions of the ocean, including coral reefs, pelagic waters, and the seabed; some live in the intertidal zone and others at abyssal depths. Most species grow quickly, mature early, and are short-lived.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--four">
                            <div>
                                <h2>Shark</h2>
                                <p>
                                    Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide--five">
                            <div>
                                <h2>Dolphin</h2>
                                <p>
                                    Dolphins are widespread. Most species prefer the warm waters of the tropic zones, but some, such as the right whale dolphin, prefer colder climates. Dolphins feed largely on fish and squid, but a few, such as the orca, feed on large mammals such as seals.
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