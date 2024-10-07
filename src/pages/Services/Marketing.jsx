import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import marketing from '../../assets/json/Animation - 1728293126339.json';

const TopComponent = lazy(() => import('../../components/TopComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));


const Marketing = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Digital Marketing | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://www.ulinkit.com/digital-marketing" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'Digital Marketing'} headingTwo={'Hire Digital Marketing Experts'} textTwo={'Create your own Digital Marketing Experts team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={marketing} text={'Gulf Ulinkit excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <article className='web-tech'>
                <div className="flexcol center g10 wh">
                    <h2 className='heading'>WHAT WE DO</h2>
                    <h1 className='headingBig'>Digital Marketing Development Services</h1>
                </div>
                <div className="web-tech-grid">
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728285710/GulfUlinkit/icons8-campaigns-timing-100_q1az2c.png" alt="Campaigns" />
                        <h1 className='heading'>Integrated Marketing Campaigns</h1>
                        <h2 className='text'>Coordinating across channels for a unified marketing effort that maximizes reach and impact.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728285710/GulfUlinkit/icons8-content-marketing-100_kiewge.png" alt="Marketing" />
                        <h1 className='heading'>Content Marketing</h1>
                        <h2 className="text">Creating and distributing valuable, relevant content to attract and engage a clearly defined audience.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728285723/GulfUlinkit/icons8-strategy-100_cqozvu.png" alt="Strategy" />
                        <h1 className='heading'>Social Media Strategy</h1>
                        <h2 className="text">Engaging with your audience on social platforms to build community and brand loyalty.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728284642/GulfUlinkit/icons8-analytics-100_bvvpuz.png" alt="Analysis" />
                        <h1 className='heading'>Performance Analysis</h1>
                        <h2 className="text">Using analytics to measure campaign performance and optimize for better results over time.</h2>
                    </article>
                </div>
            </article>

            <Suspense fallback={<p>Loading...</p>}>
                <BottomComponent />
            </Suspense>
        </Fragment>
    )
};

export default Marketing;