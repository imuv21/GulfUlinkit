import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import appdev from '../../assets/json/Animation - 1728287947892.json';

const TopComponent = lazy(() => import('../../components/TopComponent'));
const MiddleComponent = lazy(() => import('../../components/MiddleComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));


const AppDev = () => {

    return (
        <Fragment>
            <Helmet>
                <title>App Development | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://ulinkgulf.com/app-development" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'App Development'} headingTwo={'Hire App Developers'} textTwo={'Create your own development team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={appdev} text={'Gulf Ulinkit excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <article className='web-tech'>
                <div className="flexcol center g10 wh">
                    <h2 className='heading'>Gulf Ulinkit</h2>
                    <h1 className='headingBig'>Mobile Technologies We Use</h1>
                </div>
                <div className="web-tech-grid">
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728283090/GulfUlinkit/icons8-apple-100_p4qv1p.png" alt="ios" />
                        <h1 className='heading'>iOS Apps Development</h1>
                        <h2 className='text'>Crafting apps for iPhone, iPad, Apple Watch, Apple TV, etc. with AI & ML integration and more, keeping users at the core.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728283091/GulfUlinkit/icons8-source-code-100_lpppzx.png" alt="ionic" />
                        <h1 className='heading'>Ionic Apps Development</h1>
                        <h2 className="text">Crafting fast and interactive hybrid applications that work perfectly on web, mobile and desktop devices using Ionic.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728283090/GulfUlinkit/icons8-wechat-100_gpbn7g.png" alt="xamarin" />
                        <h1 className='heading'>Xamarin Apps Development</h1>
                        <h2 className="text">With the power of .NET and C#, our experts build Android, iOS, and cross-platform apps for enterprises and startups.</h2>
                    </article>
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

export default AppDev;