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
                    <ImageComponent heading={'Services'} imglink={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5d8NaACUXbK-9Csv61O4ovCS3TSHhzueog&s'} text={'Alayra Tech was established in the year 2018, we are a data-driven and revenue-focused agency focused on converting the website and applications visitors into customers. We love turning raw ideas into something visually appealing and a creation that you can be proud of.'} />
                </Suspense>
                <div className=''>
                    <div className='info-content services-padding services'>
                        <div className='info'>
                            <h1 className='headingBig slogun hd-2 '>Mobile App Development</h1>
                            <p className='textBig para1 para-3 '>In the era of mobile-first, Alayra Tech stands as your premier partner for mobile app development. Our expertise spans across iOS, Android, and cross-platform solutions, ensuring your application not only looks great but also performs flawlessly across all devices. We focus on creating engaging user experiences, integrating innovative features, and ensuring your app meets the highest standards of quality and functionality.</p>
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
                        <p className='textBig para1'> Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.</p>
                        <button className='btna1'>Know More</button>
                    </div>
                </div>
                <div className='info-content services-padding services'>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>Designing</h1>
                        <p className='textBig para1 para-3'> Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.</p>
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
                        <p className='textBig para1'> Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.</p>
                        <button className='btna1'>Know More</button>
                    </div>
                </div>
                <div className='info-content services-padding services'>
                    <div className='info'>
                        <h1 className='headingBig slogun hd-2 '>AWS Services</h1>
                        <p className='textBig para1 para-3'> Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.</p>
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
                        <p className='textBig para1'> Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.</p>
                        <button className='btna1'>Know More</button>
                    </div>
                </div>
            </Fragment>
        </div>
    )
};

export default Services;