import React, { Fragment, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import ImageComponent from '../components/ImageComponent'
import Mobile from '../assets/services/mobileApp.png';
import Web from '../assets/services/web-remo.png'
import Design from '../assets/services/desiging.png'
import Digital from '../assets/services/digital-marketing.png';
import Seo from '../assets/services/seo-img.png';
import Aws from '../assets/services/aws.png';


const Services = () => {
    return (
        <div>
            <Fragment>
                <Helmet>
                    <title>Gulf Ulinkit | AboutUs Page</title>
                    <meta name="description" content=""></meta>
                    <link rel="canonical" href="" />
                </Helmet>


                <Suspense fallback={<p>Loading...</p>}>
                    <ImageComponent heading={'Services'} imglink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5d8NaACUXbK-9Csv61O4ovCS3TSHhzueog&s'} text={'Gulf Ulinkit was established in the year 2010, we are a data-driven and revenue-focused agency focused on converting the website and applications visitors into customers. We love turning raw ideas into something visually appealing and a creation that you can be proud of.'} />
                </Suspense>
                <div className=''>
                    <div className='info-content services-padding services'>
                        <div className='info'>
                            <h1 className='headingBig slogun hd-2 '>Mobile App Development</h1>
                            <p className='textBig para1 para-3 '>In the era of mobile-first, Gulf Ulinkit stands as your premier partner for mobile app development. Our expertise spans across iOS, Android, and cross-platform solutions, ensuring your application not only looks great but also performs flawlessly across all devices. We focus on creating engaging user experiences, integrating innovative features, and ensuring your app meets the highest standards of quality and functionality.</p>
                            <button className='btna1 btna2'>Know More</button>
                        </div>
                        <div className='img-it' >
                            <img className='it-con' src={Mobile} />
                        </div>
                    </div>
                </div>
                <div className='info-content services-padding '>
                    <div className='img-it' >
                        <img className='it-con' src={Web} />
                    </div>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>Website App Development</h1>
                        <p className='textBig para1'> Gulf Ulinkit excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.</p>
                        <button className='btna1'>Know More</button>
                    </div>
                </div>
                <div className='info-content services-padding services'>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>Designing</h1>
                        <p className='textBig para1 para-3'>
                            At Gulf Ulinkit, design is more than just aesthetics – it’s about creating meaningful digital experiences. We specialize in delivering visually captivating and user-friendly designs that not only engage but also inspire action. Our design philosophy revolves around understanding your brand and audience, allowing us to craft bespoke digital interfaces that leave a lasting impression.<br />
                            From concept to execution, we ensure that every design element serves a purpose – whether it’s an intuitive user journey, a stunning visual layout, or a responsive interface. Gulf Ulinkit excels in blending creativity with functionality, producing designs that are not only beautiful but also practical and accessible across all devices.
                        </p>
                        <button className='btna1 btna2'>Know More</button>
                    </div>
                    <div className='img-it' >
                        <img className='it-con design' src={Design} />
                    </div>
                </div>
                <div className='info-content services-padding '>
                    <div className='img-it' >
                        <img className='it-con' src={Digital} />
                    </div>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>Degital Marketing</h1>
                        <p className='textBig para1'>At Gulf Ulinkit, digital marketing is all about connecting brands with the right audience in meaningful ways. We leverage data-driven strategies and innovative campaigns to elevate your brand’s visibility and engagement across the digital landscape. Our approach combines creativity with precision, ensuring your message resonates and drives action.
                        </p>
                        <p className='textBig para1'>At Gulf Ulinkit, we believe in a holistic approach to digital marketing. Whether it’s boosting brand awareness, increasing conversions, or building a loyal customer base, we are committed to delivering campaigns that make an impact.
                        </p>
                        <button className='btna1'>Know More</button>
                    </div>
                </div>
                <div className='info-content services-padding services'>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>AWS Services</h1>
                        <p className='textBig para1 para-3'>Gulf Ulinkit harnesses the power of AWS to deliver cloud solutions that are scalable, secure, and highly reliable. As an AWS partner, we help businesses migrate, build, and manage their cloud infrastructure efficiently, allowing them to focus on innovation while we handle the technical complexities.</p>
                        <p className='textBig para1 para-3'>Our team specializes in architecting custom AWS solutions, from cloud storage and computing to advanced data analytics, AI, and machine learning applications. Whether you're looking to optimize existing infrastructure or embark on a full-scale cloud migration, we ensure that your operations are seamless and cost-effective.</p>
                        <button className='btna1 btna2'>Know More</button>
                    </div>
                    <div className='img-it' >
                        <img className='it-con' src={Aws} />
                    </div>
                </div>
                <div className='info-content services-padding '>
                    <div className='img-it' >
                        <img className='it-con' src={Seo} />
                    </div>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>Search Engine Optimization</h1>
                        <p className='textBig para1'>

                            At Gulf Ulinkit, we specialize in SEO strategies that boost your visibility, drive organic traffic, and improve search engine rankings. Our approach combines in-depth keyword research, technical optimization, and high-quality content creation to ensure your website ranks at the top of search engine results.</p>
                        <p className='textBig para1'>
                            We focus on both on-page and off-page SEO, optimizing everything from meta tags and content to backlinks and website structure. Our team stays ahead of the latest SEO trends and algorithm updates, so your website is always optimized for success. Whether you’re looking to increase local visibility, attract new customers, or grow your online presence globally, we tailor our strategies to meet your unique business goals.</p>
                        <button className='btna1'>Know More</button>
                    </div>
                </div>
            </Fragment>
        </div>
    )
};

export default Services;