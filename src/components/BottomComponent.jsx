import React, { useState, useEffect, useRef, Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import images from '../assets/SliderImgs';


const BottomComponent = () => {

    const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const ends = [160, 2, 80, 15, 5, 450, 2018, 2600];
    const duration = 2000;
    const numRef = useRef(null);
    const defaultimg = "https://res.cloudinary.com/dey1tujp8/image/upload/v1716464881/Ulinkit/default_hgvhd5.jpg";

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('fact-grid')) {
                        startCounting();
                    }
                }
            });
        });
        if (numRef.current) observer.observe(numRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    const startCounting = () => {
        setCounts([0, 0, 0, 0, 0, 0, 0, 0]);
        const totalSteps = 100;
        const intervalTime = duration / totalSteps;
        const increments = ends.map((end) => end / totalSteps);
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setCounts((prev) =>
                prev.map((count, i) => Math.min(count + increments[i], ends[i]))
            );
            if (currentStep >= totalSteps) {
                clearInterval(timer);
                setCounts(ends);
            }
        }, intervalTime);
        return () => clearInterval(timer);
    };

    return (
        <Fragment>
            <section className="bottom-component">
                <article className="flexcol start-center">
                    <h1 className="heading">PROVEN TRACK RECORD</h1>
                    <h2 className="headingBig">FACTSHEET</h2>
                </article>
                <section className="fact-grid" ref={numRef}>
                    <article><h2 className="headingBig">{Math.floor(counts[0])}+</h2><h1 className="textBig">Projects Delivered Successfully</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[1])}+</h2><h1 className="textBig">Project Management Experience in Hours</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[2])}+</h2><h1 className="textBig">Volume of Repeated Clients</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[3])}+</h2><h1 className="textBig">Projects Delivered Successfully</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[4])}+</h2><h1 className="textBig">Average Experience of Developers in Years</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[5])}+</h2><h1 className="textBig">Mobile & Web Developers Working on Floor</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[6])}+</h2><h1 className="textBig">Successful IT Company Since its Establishment in</h1></article>
                    <article><h2 className="headingBig">{Math.floor(counts[7])}+</h2><h1 className="textBig">Satisfied Clients Across the Globe</h1></article>
                </section>
            </section>
            <article className='brands'>
                <div className="flexcol center">
                    <h2 className="heading">TRUSTED BY</h2>
                    <h1 className="headingBig">Popular brands around the world</h1>
                </div>
                <div className="slider-inf">
                    <div className="slide_track-inf">
                        {images.map((imgSrc, index) => (
                            <div className="slide-inf" key={index}>
                                <LazyLoad height={130} offset={100} placeholder={<img src={defaultimg} alt="Loading..." />}>
                                    <img src={imgSrc} className="smallImage" alt={`image ${index + 1}`} loading="lazy" />
                                </LazyLoad>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </Fragment>
    )
};

export default BottomComponent;