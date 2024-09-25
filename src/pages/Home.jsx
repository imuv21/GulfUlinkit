import React, { useEffect, useRef, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageSlider from '../components/ImageSlider';


const Home = () => {

  const hiOneRef = useRef([]);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('siOne');
        } else {
          entry.target.classList.remove('siOne');
        }
      });
    });

    hiOneRef.current.forEach((el) => scrollObserver.observe(el));

    return () => {
      hiOneRef.current.forEach((el) => scrollObserver.unobserve(el));
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Gulf Ulinkit | Home Page</title>
        <meta name="description" content=""></meta>
        <link rel="canonical" href="" />
      </Helmet>

      <ImageSlider />

      <div className='page' style={{ height: '200vh' }}>

        <section className="secOne outline1">
          <article className="hiOne delayOne subsecOne outline3" ref={(el) => (hiOneRef.current[0] = el)}>
            <p className='heading' style={{ color: 'var(--codeFour)'}}>WE ARE A CREATIVE AGENCY</p>
            <h1 className='headingBig' style={{ color: 'var(--codeFour)'}}>If You Can Think It, We Can Make It</h1>
            <h2 className='textBig'>
              At Alayra Tech, creativity isn’t just a part of our process; it’s at the core of who we are. We are a creative agency where imagination meets innovation. If you can think it, we can make it happen. With a team of visionary designers, developers, and strategists, we turn ideas into reality, crafting digital experiences that leave a lasting impression.
              Our approach is collaborative and forward-thinking. We believe that every challenge presents an opportunity for creativity, and every idea has the potential to be groundbreaking. We work closely with our clients, embracing their vision while pushing the boundaries of what’s possible to create something truly unique and impactful.
              From stunning web designs that captivate users to digital marketing campaigns that resonate and engage, Alayra Tech is dedicated to excellence in all we do. Our mission is to help your business stand out in the digital landscape, combining aesthetic appeal with functional design to achieve your goals.
              Let your imagination run wild, and trust Alayra Tech to bring your vision to life. Together, we can create something extraordinary.
            </h2>
          </article>
          <section className='subsecTwo'>
            <article className="hiOne delayOne outline2" ref={(el) => (hiOneRef.current[1] = el)}>
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
              Trustpilot helps businesses by providing authentic reviews, trust with transparent and dependable feedback solutions.
            </article>
            <article className="hiOne delayOne outline2" ref={(el) => (hiOneRef.current[2] = el)}>
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
              Google Reviews build trust and credibility for businesses, fostering customer satisfaction through genuine feedback.
            </article>
          </section>
        </section>

      </div>
    </Fragment>
  )
};

export default Home;