import React, { Fragment } from 'react';

const MiddleComponent = () => {

    return (
        <Fragment>
            <section className="middle-component">
                <h1 className='headingBig'>Hire Certified Web Developers</h1>
                <section className='hire-grid'>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-96.png" alt="Custom Solutions" />
                        <h1 className='headingSmol'>Custom Solutions</h1>
                        <h2 className="text">Tailored to meet specific business requirements, ensuring a unique online presence that sets you apart from the competition</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-97.png" alt="Responsive Design" />
                        <h1 className='headingSmol'>Responsive Design</h1>
                        <h2 className="text">Every website we develop is optimized for all devices, providing a seamless experience for users, regardless of how they access your site.</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-99.png" alt="E-Commerce Excellence" />
                        <h1 className='headingSmol'>E-Commerce Excellence</h1>
                        <h2 className="text">From product management to payment integration, we build e-commerce sites that are secure, user-friendly, and conversion-optimized</h2>
                    </article>
                    <article>
                        <img src="https://alayratech.com/wp-content/uploads/2024/02/Screenshot-98.png" alt="CMS Development" />
                        <h1 className='headingSmol'>CMS Development</h1>
                        <h2 className="text">We offer custom CMS development and solutions like WordPress, allowing for easy site management and updates</h2>
                    </article>
                </section>
            </section>
        </Fragment>
    )
};

export default MiddleComponent;