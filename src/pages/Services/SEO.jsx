import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import seo from '../../assets/json/Animation - 1728292246397.json';

const TopComponent = lazy(() => import('../../components/TopComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));


const SEO = () => {

    return (
        <Fragment>
            <Helmet>
                <title>SEO | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://ulinkgulf.com/seo" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'SEO'} headingTwo={'Hire SEO Experts'} textTwo={'Create your own SEO Experts team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={seo} text={'Gulf Ulinkit excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <article className='web-tech'>
                <div className="flexcol center g10 wh">
                    <h2 className='heading'>WHAT WE DO</h2>
                    <h1 className='headingBig'>SEO Development Services</h1>
                </div>
                <div className="web-tech-grid">
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728284634/GulfUlinkit/icons8-keyword-100_faa4sz.png" alt="Keyword" />
                        <h1 className='heading'>Comprehensive Keyword Research</h1>
                        <h2 className='text'>Identifying and targeting the right keywords to attract your ideal audience.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728284634/GulfUlinkit/icons8-optimization-100_qgdxzq.png" alt="Optimization" />
                        <h1 className='heading'>On-Page and Off-Page Optimization</h1>
                        <h2 className="text">From optimizing web content and structure to building high-quality backlinks.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728284642/GulfUlinkit/icons8-analytics-100_bvvpuz.png" alt="Analytics" />
                        <h1 className='heading'>Analytics and Reporting</h1>
                        <h2 className="text">Regular monitoring and reporting on your SEO performance, adjusting strategies as needed.</h2>
                    </article>
                </div>
            </article>

            <Suspense fallback={<p>Loading...</p>}>
                <BottomComponent />
            </Suspense>
        </Fragment>
    )
};

export default SEO;