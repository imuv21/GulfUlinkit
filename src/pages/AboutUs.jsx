import React, { Fragment, useEffect, useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { ImPointRight } from "react-icons/im";
import Services from '../assets/about/it-con-b2.png';
import NewBg from '../assets/about/service-it.png';
const ImageComponent = lazy(() => import('../components/ImageComponent'));

const AboutUs = () => {

  const technology = [
    { id: 1, name: 'Web Development', },
    { id: 2, name: 'AWS Server Management', },
    { id: 3, name: 'Mobile App Development', },
    { id: 4, name: 'SEO Optimization' },
    { id: 5, name: 'Warehous Management' },
    { id: 6, name: 'Account Management' },
    { id: 7, name: 'Logistics Management' },
    { id: 8, name: 'Procurement Services' },
    { id: 9, name: 'Digital Marketing' },
    { id: 10, name: 'Ecommerce Development' },
    { id: 11, name: 'Graphics Design' }
  ]


  const teamTalent = [
    { id: 1, name: 'Unmatched Expertise', info: 'Our team is composed of industry veterans and creative minds who are not just proficient in their respective domains but are also constantly updating their knowledge with the latest trends and technologies. This blend of experience and innovation ensures that we deliver cutting-edge solutions that are both effective and efficient.' },
    { id: 2, name: 'Tailored Strategies', info: 'We understand that no two businesses are the same, which is why we dont believe in one-size-fits-all solutions. Our approach is to create customized strategies that align perfectly with your business goals and target audience, ensuring maximum impact and return on investment' },
    { id: 3, name: 'Cutting-Edge Technology', info: 'At Gulf Ulinkit, we leverage the latest tools and technologies to provide our clients with services that are not just current but also future-proof. Whether it’s web development, digital marketing, or design, we utilize state-of-the-art technology to deliver superior results.' },
    { id: 4, name: 'Proactive Communication', info: 'Our commitment to transparency and communication sets us apart. We keep our clients in the loop at every stage of the project, ensuring that their feedback is heard and incorporated. This collaborative approach ensures that the final product not only meets but exceeds expectations.' },
    { id: 5, name: 'Results-Driven Approach', info: 'Everything we do at Gulf Ulinkit is with an eye towards delivering tangible results. Whether it’s increasing your website traffic, boosting your search engine rankings, or enhancing your brand’s online visibility, our goal is to help you achieve your objectives and drive your business forward.' },
    { id: 6, name: 'Teamwork and Collaboration', info: 'Our passion for creativity is what drives us to explore unique ideas and innovative solutions. We believe in thinking outside the box and bringing a creative flair to every project, ensuring that your brand stands out from the competition. Choosing Gulf Ulinkit means partnering with a team that’s dedicated to your success. Let us show you why we’re the A-Team for all your digital marketing and web development needs.' },

  ]
  

  const containersRef = useRef([]);
  useEffect(() => {
    const options = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrolled');
        } else {
          entry.target.classList.remove('scrolled');
        }
      })
    }, options)
    containersRef.current.forEach((container) => {
      if (container) {
        observer.observe(container);
      }
    })
    return () => {
      containersRef.current.forEach((container) => {
        if (container) {
          observer.unobserve(container);
        }
      })
    }
  }, [])
  
  return (
    <Fragment>
      <Helmet>
        <title>Gulf Ulinkit | AboutUs Page</title>
        <meta name="description" content=""></meta>
        <link rel="canonical" href="https://ulinkgulf.com/about-us" />
      </Helmet>
      <div className='about'>
      <Suspense fallback={<p>Loading...</p>}>
          <ImageComponent heading={'About Ulinkit'} imglink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5d8NaACUXbK-9Csv61O4ovCS3TSHhzueog&s'} text={'At Ulinkit, creativity isn’t just a part of our process; it’s at the core of who we are.'} />
        </Suspense>
        <div className='about-containt'>
          <div className=' info-content'>
            <div className='info'>
              <h1 className='heading slogun'>WE ARE A CREATIVE AGENCY</h1>
              <h1 className='headingBig slogun'>If You Can Think It, We Can Make It</h1>
              <p className='textBig para1'>At Gulf Ulinkit, creativity isn’t just a part of our process; it’s at the core of who we are. We are a creative agency where imagination meets innovation. If you can think it, we can make it happen. With a team of visionary designers, developers, and strategists, we turn ideas into reality, crafting digital experiences that leave a lasting impression.</p>
              <p className='textBig para1'>Our approach is collaborative and forward-thinking. We believe that every challenge presents an opportunity for creativity, and every idea has the potential to be groundbreaking. We work closely with our clients, embracing their vision while pushing the boundaries of what’s possible to create something truly unique and impactful.</p>
              <p className='textBig para1'>From stunning web designs that captivate users to digital marketing campaigns that resonate and engage, Gulf Ulinkit is dedicated to excellence in all we do. Our mission is to help your business stand out in the digital landscape, combining aesthetic appeal with functional design to achieve your goals. lasting impression.</p>
              <p className=' textBig para1'>Let your imagination run wild, and trust Gulf Ulinkit to bring your vision to life. Together, we can create something extraordinary.</p>
              <button className='btna1'>ContactUs</button>
            </div>
            <div className='img-it' >
              <img className='it-con' src={Services} />
            </div>
          </div>
          <div className='technology heading slogun'>Our Work Experience </div>
          <div className='flex-technology'>
            {technology.map((item, id) => (
              <div key={id} className='img-container' ref={(el) => (containersRef.current[id] = el)}>
                <div className='name-container'>
                  <p className='text'> {item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='info-content choosen-flex  '>
            <div className='img-it'>
              <img className='it-con' src={NewBg} />
            </div>
            <div className='info'>
              <h1 className=' heading slogun hetop'>Why we choosen</h1>
              <p className='textBig para1'> Gulf Ulinkit Us offers global business development. They assist in the growth of a growing business. All types of events are organized by Gulf Ulinkit Us like IT / Data Security / AWS.</p>
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
          <div className='team hetop'>
            <h1 className='headingBig slogun team-center'>What Make Us The A- Team ?</h1>
            <p className='textBig para1'>At Gulf Ulinkit, what sets us apart and cements our status as the A-Team in the digital landscape is a unique blend of innovation, expertise, and a relentless commitment to customer satisfaction. Here’s what makes us the go-to choice for businesses looking to elevate their digital presence:</p>
            <div className='team-container'>
              {teamTalent.map((teamItem, id) => (
                <div key={id} className='team-content'>
                  <p className='team-center textHeading steps'>{teamItem.name}</p>
                  <p className='textBig para1 '> {teamItem.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
};

export default AboutUs;