import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import design from "../../assets/json/Animation - 1728289160574.json";

const TopComponent = lazy(() => import('../../components/TopComponent'));
const BottomComponent = lazy(() => import('../../components/BottomComponent'));

const Designing = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Designing | Get in Touch with Us</title>
                <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
                <link rel="canonical" href="https://www.ulinkit.com/designing" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <TopComponent heading={'Designing'} headingTwo={'Hire Designers'} textTwo={'Create your own Designers team now'} textThree={'Everything begins with a ‘Welcome’!! With ZERO forthright venture, we are resolved to give a strong establishment to your business thought. You’ll be astounded by working with our specialists. If not, the initial 7 days are on us.'} imglink={design} text={'Gulf Ulinkit excels in delivering top-tier web development services that combine innovation, technical precision, and strategic planning to bring your digital vision to life. Our team specializes in creating custom websites that are not only visually appealing but also robust, secure, and scalable. Whether it’s an informative site, an e-commerce platform, or a complex web application, we ensure your online presence is powerful and purposeful.'} />
            </Suspense>

            <section className="middle-component">
                <h1 className='headingBig'>Hire Certified Designers</h1>
                <section className='hire-grid'>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-96.png" alt="Tailored Design Solutions" />
                        <h1 className='headingSmol'>Tailored Design Solutions</h1>
                        <h2 className="text">We understand that each project has its unique challenges and objectives. That’s why we offer tailored design solutions that align with your business goals, target audience, and brand identity. From web design and mobile app interfaces to branding and graphic design, our bespoke approach ensures that your project stands out in the digital landscape.</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-97.png" alt="User-Centric Approach" />
                        <h1 className='headingSmol'>User-Centric Approach</h1>
                        <h2 className="text">At the core of our design philosophy is a user-centric approach. We prioritize the needs and behaviors of your target audience, creating intuitive, accessible, and engaging designs that resonate with users and enhance their experience. Our goal is to make every interaction with your brand memorable and satisfying.</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-99.png" alt="Cutting-Edge Creativity" />
                        <h1 className='headingSmol'>Cutting-Edge Creativity</h1>
                        <h2 className="text">Innovation drives us. We stay ahead of the curve, exploring new design trends and technologies to ensure that our solutions are not just relevant but also future-proof. Our designers are skilled in various styles and genres, allowing us to bring a fresh perspective to every project.</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-98.png" alt="Collaborative Process" />
                        <h1 className='headingSmol'>Collaborative Process</h1>
                        <h2 className="text">Collaboration is key to our design process. We work closely with our clients, encouraging feedback and ideas at every stage. This collaborative approach ensures that the final product truly reflects your vision while meeting our high standards of creativity and functionality.</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-100.png" alt="Impactful Branding" />
                        <h1 className='headingSmol'>Impactful Branding</h1>
                        <h2 className="text">Your brand is your story, and we’re here to help you tell it. Our design services extend to creating impactful branding strategies that convey your brand’s essence, values, and message. We design logos, brand guidelines, and marketing materials that create a strong, coherent identity for your business.</h2>
                    </article>
                </section>
            </section>

            <Suspense fallback={<p>Loading...</p>}>
                <BottomComponent />
            </Suspense>
        </Fragment>
    )
};

export default Designing;