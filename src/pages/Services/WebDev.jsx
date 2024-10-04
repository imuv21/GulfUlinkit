import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import webdev from '../../assets/services/web-remo.png';

const TopComponent = lazy(() => import('../../components/TopComponent'));
const MiddleComponent = lazy(() => import('../../components/MiddleComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));


const WebDev = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Web Development | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://www.ulinkit.com/web-development" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'Web Development'} headingTwo={'Hire Web Developers'} textTwo={'Create your own development team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={webdev} text={'Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <article className='web-dev'>
                <div className="flexcol center g10 wh">
                    <h1 className='headingBig'>Web Technologies We Work With</h1>
                    <h2 className='text'>In-house specialists of contemporary web technologies that encapsulate server-side and front-end stacks.</h2>
                </div>
                <div className="web-grid">
                    <article><h1 className='heading'>php</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728040573/GulfUlinkit/icons8-php-100_c8p4gt.png" alt="php" /></article>
                    <article><h1 className='heading'>.net</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728041102/GulfUlinkit/icons8-dot-net-100_twafrn.png" alt="dot-net" /></article>
                    <article><h1 className='heading'>wordpress</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728041243/GulfUlinkit/icons8-wordpress-100_dwcdow.png" alt="wordpress" /></article>
                    <article><h1 className='heading'>magento</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728041442/GulfUlinkit/icons8-magento-100_hrtx3a.png" alt="magento" /></article>
                    <article><h1 className='heading'>python</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728043201/GulfUlinkit/icons8-python-100_1_zbwcec.png" alt="python" /></article>
                    <article><h1 className='heading'>shopify</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728043313/GulfUlinkit/icons8-shopify-100_2_jdeqzz.png" alt="shopify" /></article>
                    <article><h1 className='heading'>drupal</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728042100/GulfUlinkit/icons8-drupal-100_wb3w4h.png" alt="drupal" /></article>
                    <article><h1 className='heading'>react js</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728042228/GulfUlinkit/icons8-react-js-100_tnwbv5.png" alt="react-js" /></article>
                    <article><h1 className='heading'>node js</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728042369/GulfUlinkit/icons8-node-js-100_y5idm5.png" alt="node-js" /></article>
                    <article><h1 className='heading'>html5</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728042513/GulfUlinkit/icons8-html-5-100_xbugdu.png" alt="html5" /></article>
                    <article><h1 className='heading'>angular js</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728042716/GulfUlinkit/icons8-angularjs-100_ejtlur.png" alt="angular-js" /></article>
                    <article><h1 className='heading'>my sql</h1><img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728042914/GulfUlinkit/icons8-my-sql-100_hkgb5q.png" alt="my-sql" /></article>
                </div>
            </article>

            <Suspense fallback={<p>Loading...</p>}>
                <MiddleComponent />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <BottomComponent />
            </Suspense>
        </Fragment>
    )
};

export default WebDev;