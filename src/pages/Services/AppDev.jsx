import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import webdev from '../../assets/services/web-remo.png';

const TopComponent = lazy(() => import('../../components/TopComponent'));
const MiddleComponent = lazy(() => import('../../components/MiddleComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));


const AppDev = () => {

    return (
        <Fragment>
            <Helmet>
                <title>App Development | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://www.ulinkit.com/app-development" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'App Development'} headingTwo={'Hire App Developers'} textTwo={'Create your own development team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={webdev} text={'Alayra Tech excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <MiddleComponent />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <BottomComponent />
            </Suspense>
        </Fragment>
    )
};

export default AppDev;