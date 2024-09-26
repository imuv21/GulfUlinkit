import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { ImPointRight } from "react-icons/im";
import About from '../assets/about/about.jpg';
import Services from '../assets/about/it-con-b2.png';
import Html from '../assets/technologyIcon/html.png';
import Css from '../assets/technologyIcon/css.png';
import JavaScript from '../assets/technologyIcon/javascript.png';
import ReactIcon from '../assets/technologyIcon/react.png';
import Firebase from '../assets/technologyIcon/firebase.png';


const AboutUs = () => {
  
  const technology = [
    { id: 1, name: 'HTML', image: Html },
    { id: 2, name: 'CSS', image: Css },
    { id: 3, name: 'JavaScript', image: JavaScript },
    { id: 4, name: 'React.js', image: ReactIcon },
    { id: 5, name: 'SEO', image: Firebase },
    { id: 6, name: 'JAVA', image: Services },
    { id: 7, name: 'MySQL', image: Services },
    { id: 8, name: 'AWS', image: Services },
    { id: 9, name: 'SpringBoot', image: Services },
  ]

  return (
    <Fragment>
      <Helmet>
        <title>Gulf Ulinkit | AboutUs Page</title>
        <meta name="description" content=""></meta>
        <link rel="canonical" href="" />
      </Helmet>
      <div className='about'>
        <div className='about-us'>
          <img className='about-us-banner' src={About} />
        </div>
        <div className='about-containt'>
          <div className=' info-content'>
            <div className='info'>
              <h1 className='heading slogun'>WE ARE A CREATIVE AGENCY</h1>
              <h1 className='headingBig slogun'>If You Can Think It, We Can Make It</h1>
              <p className='textBig para1'>At Ulinkit, creativity isn’t just a part of our process; it’s at the core of who we are. We are a creative agency where imagination meets innovation. If you can think it, we can make it happen. With a team of visionary designers, developers, and strategists, we turn ideas into reality, crafting digital experiences that leave a lasting impression.</p>
              <p className='textBig para1'>Our approach is collaborative and forward-thinking. We believe that every challenge presents an opportunity for creativity, and every idea has the potential to be groundbreaking. We work closely with our clients, embracing their vision while pushing the boundaries of what’s possible to create something truly unique and impactful.</p>
              <p className='textBig para1'>From stunning web designs that captivate users to digital marketing campaigns that resonate and engage, Alayra Tech is dedicated to excellence in all we do. Our mission is to help your business stand out in the digital landscape, combining aesthetic appeal with functional design to achieve your goals. lasting impression.</p>
              <p className=' textBig para1'>Let your imagination run wild, and trust Alayra Tech to bring your vision to life. Together, we can create something extraordinary.</p>
              <button>ContactUs</button>
            </div>
            <div className='img-it' >
              <img className='it-con' src={Services} />
            </div>
          </div>
          <div className='technology heading slogun'>Our Work Experience </div>
          <div className='flex-technology'>
            {technology.map((item) => (
              <div className='img-container'>
                <img className='img1' src={item.image} />
                <p className='text'> {item.name}</p>
              </div>
            ))}
          </div>
          <div className='info-content choosen-flex  '>
            <div className='img-it'>
              <img className='it-con' src={Services} />
            </div>
            <div className='info'>
              <h1 className='heading slogun hetop'>Why we choosen</h1>
              <p className='textBig para1'> U-link It Us offers global business development. They assist in the growth of a growing business. All types of events are organized by U-link It Us like IT / Data Security / AWS.</p>
              <ul className='steps'>
                <li className='list-items'><ImPointRight className='right-icon' /> Proven Experties and Experience.</li>
                <li className='list-items'><ImPointRight className='right-icon' /> Storng Support Team.</li>
                <li className='list-items'><ImPointRight className='right-icon' /> Creative Problem Solving.</li>
                <li className='list-items'><ImPointRight className='right-icon' /> Commintment To Quality.</li>
                <li className='list-items'><ImPointRight className='right-icon' /> Inovation and Adaptbility.</li>
                <li className='list-items'><ImPointRight className='right-icon' /> Focus on user experiences.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default AboutUs;