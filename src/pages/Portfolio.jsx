import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
const Gallery = lazy(() => import('../components/Gallery'));
const ImageComponent = lazy(() => import('../components/ImageComponent'));


const Portfolio = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Gulf Ulinkit | Our Portfolio</title>
                <meta name="description" content="Explore the Gulf Ulinkit portfolio, showcasing our innovative projects, solutions, and success stories across various industries." />
                <link rel="canonical" href="https://ulinkgulf.com/portfolio" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <ImageComponent heading={'Portfolio'} imglink={'https://agripoint.ug/wp-content/uploads/2023/10/istockphoto-1434132794-612x612-1.jpg'} text={'We love turning raw ideas into robust and bespoke creations. We believe in doing things right while keeping it simple and minimalist to attract more eyeballs.'} />
            </Suspense>

            <div className='page flexcol'>
                <article className='flexcol center wh g10'>
                    <h1 className='headingBig wh flex center'>Our Case Studies</h1>
                    <h2 className='text wh flex center'>View some of our work and case studies for clients. We will work to deliver that strategy by building out your existing campaigns, or establishing accounts at new networks.</h2>
                </article>
                <Suspense fallback={<p>Loading...</p>}>
                    <Gallery />
                </Suspense>
            </div>
        </Fragment>
    )
};

export default Portfolio;