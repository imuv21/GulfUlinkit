import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import branding from '../../assets/json/Animation - 1728292482653.json';

const TopComponent = lazy(() => import('../../components/TopComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));


const Branding = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Branding | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://ulinkgulf.com/branding" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'Branding'} headingTwo={'Hire Branding Experts'} textTwo={'Create your own Branding Experts team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={branding} text={'Gulf Ulinkit excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <article className='web-tech'>
                <div className="flexcol center g10 wh">
                    <h2 className='heading'>WHAT WE DO</h2>
                    <h1 className='headingBig'>Branding Development Services</h1>
                </div>
                <div className="web-tech-grid">
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728287016/GulfUlinkit/icons8-strategy-100_1_vwpjm1.png" alt="Strategy" />
                        <h1 className='heading'>Brand Strategy</h1>
                        <h2 className='text'>Developing a clear strategy that defines your brand’s positioning, voice, and personality.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728287035/GulfUlinkit/icons8-identity-100_qo3p23.png" alt="Identity" />
                        <h1 className='heading'>Visual Identity</h1>
                        <h2 className="text">Crafting a distinctive visual identity that reflects your brand’s values and appeals to your target audience</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728287027/GulfUlinkit/icons8-policies-100_vb2zjl.png" alt="Guidelines" />
                        <h1 className='heading'>Brand Guidelines</h1>
                        <h2 className="text">Establishing comprehensive brand guidelines to ensure consistency across all communications.</h2>
                    </article>
                    <article>
                        <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1728287016/GulfUlinkit/icons8-storytelling-100_yydja0.png" alt="Storytelling" />
                        <h1 className='heading'>Storytelling</h1>
                        <h2 className="text">We help articulate your brand story, creating emotional connections with your audience.</h2>
                    </article>
                </div>
            </article>

            <Suspense fallback={<p>Loading...</p>}>
                <BottomComponent />
            </Suspense>
        </Fragment>
    )
};

export default Branding;