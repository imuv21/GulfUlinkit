import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageSlider from '../components/ImageSlider';
import TuneIcon from '@mui/icons-material/Tune';
import CodeIcon from '@mui/icons-material/Code';
import HubIcon from '@mui/icons-material/Hub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


const Home = () => {

  const hiOneRef = useRef([]);
  const hiTwoRef = useRef([]);

  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const ends = [5, 20, 3, 100, 50, 29];
  const duration = 2000;
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('counting')) {
            startCounting();
          } else if (entry.target.classList.contains('delayOne')) {
            entry.target.classList.add('siOne');
          } else if (entry.target.classList.contains('delayTwo')) {
            entry.target.classList.add('siTwo');
          }
        } else {
          if (entry.target.classList.contains('delayOne')) {
            entry.target.classList.remove('siOne');
          } else if (entry.target.classList.contains('delayTwo')) {
            entry.target.classList.remove('siTwo');
          }
        }
      });
    });

    hiOneRef.current.forEach((el) => observer.observe(el));
    hiTwoRef.current.forEach((el) => observer.observe(el));
    if (numberRef.current) observer.observe(numberRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = () => {

    setCounts([0, 0, 0, 0, 0, 0]);
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
      <Helmet>
        <title>Gulf Ulinkit | Home Page</title>
        <meta name="description" content=""></meta>
        <link rel="canonical" href="" />
      </Helmet>

      <ImageSlider />

      <div className='page flexcol'>

        <section className="secOne">
          <article className="hiOneRev delayOne subsecOne" ref={(el) => (hiOneRef.current[0] = el)}>
            <p className='heading'>WE ARE A CREATIVE AGENCY</p>
            <h1 className='headingBig'>If You Can Think It, We Can Make It</h1>
            <h2 className='textBig'>
              At Alayra Tech, creativity isn’t just a part of our process; it’s at the core of who we are. We are a creative agency where imagination meets innovation. If you can think it, we can make it happen. With a team of visionary designers, developers, and strategists, we turn ideas into reality, crafting digital experiences that leave a lasting impression.
              Our approach is collaborative and forward-thinking. We believe that every challenge presents an opportunity for creativity, and every idea has the potential to be groundbreaking. We work closely with our clients, embracing their vision while pushing the boundaries of what’s possible to create something truly unique and impactful.
              From stunning web designs that captivate users to digital marketing campaigns that resonate and engage, Alayra Tech is dedicated to excellence in all we do. Our mission is to help your business stand out in the digital landscape, combining aesthetic appeal with functional design to achieve your goals.
              Let your imagination run wild, and trust Alayra Tech to bring your vision to life. Together, we can create something extraordinary.
            </h2>
            <button>Book Free Consultation</button>
          </article>
          <section className='subsecTwo'>
            <section className="hiOne delayOne ssubsec" ref={(el) => (hiOneRef.current[1] = el)}>
              <article>
                <TuneIcon />
                <h1 className='headingSmol'>Customized Solutions for Every Business Need</h1>
                <p className='text'>We understand that no two businesses are alike, which is why we offer personalized strategies tailored to your specific goals and challenges. From captivating web designs that reflect your brand’s ethos to digital marketing campaigns that drive tangible results, our team is equipped to handle all your digital needs.</p>
              </article>
              <article>
                <CodeIcon />
                <h1 className='headingSmol'>Web Development and Design</h1>
                <p className='text'>A website is more than just a digital address. It’s a powerful tool to tell your story, showcase your products or services, and engage with your customers. Our web development and design experts specialize in creating responsive, user-friendly, and visually appealing websites that not only attract visitors but also convert them into loyal customers.</p>
              </article>
            </section>
            <section className="hiOne delayOne ssubsec" ref={(el) => (hiOneRef.current[2] = el)}>
              <article>
                <HubIcon />
                <h1 className='headingSmol'>Digital Marketing Services</h1>
                <p className='text'>Expanding your digital footprint and staying ahead of the competition requires a strategic approach to digital marketing. Our services, including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing (SMM), and content marketing, are designed to increase your visibility online, attract high-quality traffic to your website, and boost your conversion rates.</p>
              </article>
              <article>
                <RocketLaunchIcon />
                <h1 className='headingSmol'>Scaling Your Business</h1>
                <p className='text'>Growth is a continuous process, and scaling up requires strategic planning and execution. We provide the tools, technologies, and expertise to help you expand your reach, explore new markets, and achieve sustainable growth. From optimizing your existing campaigns to exploring new digital channels, we work with you every step of the way to ensure your business scales up efficiently and effectively.</p>
              </article>
            </section>
          </section>
        </section>

        <article>
          <h1 className='headingBig wh flex center'>Our Core Services</h1>
        </article>

        <section className='perfect-grid'>
          <article className="hiTwoRev delayTwo" ref={(el) => (hiTwoRef.current[0] = el)}>
            <h1 className='heading'>Designing</h1>
            <img src="https://img.icons8.com/?size=50&id=3LU4sgfdp2Kp&format=png&color=000000" alt="Designing" />
            <h2 className='headingSmol'>Digital Products UX Design And Development</h2>
          </article>
          <article className="hiTwoRev delayTwo" ref={(el) => (hiTwoRef.current[1] = el)}>
            <h1 className='heading'>Website Development</h1>
            <img src="https://img.icons8.com/?size=50&id=b7SpNjqNHg9H&format=png&color=000000" alt="Website Development" />
            <h2 className='headingSmol'>Website Creation</h2>
          </article>
          <article className="hiTwoRev delayTwo" ref={(el) => (hiTwoRef.current[2] = el)}>
            <h1 className='heading'>Mobile App Development</h1>
            <img src="https://img.icons8.com/?size=50&id=ARYeNCV6at2F&format=png&color=000000" alt="Mobile App Development" />
            <h2 className='headingSmol'>Android IOS Hybrid</h2>
          </article>
          <article className="hiTwo delayTwo" ref={(el) => (hiTwoRef.current[3] = el)}>
            <h1 className='heading'>SEO</h1>
            <img src="https://img.icons8.com/?size=50&id=13555&format=png&color=000000" alt="SEO" />
            <h2 className='headingSmol'>Marketing Strategy & CEO Campaigns</h2>
          </article>
          <article className="hiTwo delayTwo" ref={(el) => (hiTwoRef.current[4] = el)}>
            <h1 className='heading'>Branding</h1>
            <img src="https://img.icons8.com/?size=50&id=SBSBqsIbuBpa&format=png&color=000000" alt="Branding" />
            <h2 className='headingSmol'>Discover Explore & Understanding</h2>
          </article>
          <article className="hiTwo delayTwo" ref={(el) => (hiTwoRef.current[5] = el)}>
            <h1 className='heading'>Digital Marketing</h1>
            <img src="https://img.icons8.com/?size=50&id=Zc1kZ3IwI9aZ&format=png&color=000000" alt="Digital Marketing" />
            <h2 className='headingSmol'>Art Direction & Brand Communication</h2>
          </article>
        </section>

        <iframe className="youtube" src="https://www.youtube.com/embed/Yc_GmHnGw14?si=j8wym0AallhS76Xa" title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" loading="lazy" sandbox="allow-scripts allow-same-origin" allowfullscreen>
        </iframe>

        <div className='counting' ref={numberRef}>
          <div>
            <WorkIcon />
            <p className='headingBig'>{Math.floor(counts[0])}+</p>
            <p className='textBig'>Year in Business</p>
          </div>
          <div>
            <GroupsIcon />
            <p className='headingBig'>{Math.floor(counts[1])}+</p>
            <p className='textBig'>Engineer on Board</p>
          </div>
          <div>
            <PublicIcon />
            <p className='headingBig'>{Math.floor(counts[2])}+</p>
            <p className='textBig'>Global Centers</p>
          </div>
          <div>
            <ThumbUpIcon />
            <p className='headingBig'>{Math.floor(counts[3])}+</p>
            <p className='textBig'>Satisfied Clients</p>
          </div>
          <div>
            <VerifiedIcon />
            <p className='headingBig'>{Math.floor(counts[4])}+</p>
            <p className='textBig'>Project Completed</p>
          </div>
          <div>
            <SettingsSuggestIcon />
            <p className='headingBig'>{Math.floor(counts[5])}+</p>
            <p className='textBig'>Industries Served</p>
          </div>
        </div>

      </div>
    </Fragment>
  )
};

export default Home;