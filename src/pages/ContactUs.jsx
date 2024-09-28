import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
const ImageComponent = lazy(() => import('../components/ImageComponent'));


const ContactUs = () => {

  return (
    <Fragment>
      <Helmet>
        <title>Gulf Ulinkit | Get in Touch with Us</title>
        <meta name="description" content="Reach out to Gulf Ulinkit for any queries or support. We're here to assist you with your questions about our services and platform." />
        <link rel="canonical" href="https://www.ulinkit.com/contact-us" />
      </Helmet>

      <Suspense fallback={<p>Loading...</p>}>
        <ImageComponent heading={'Contact us'} imglink={'https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_1280.jpg'} text={'We love turning raw ideas into robust and bespoke creations. We believe in doing things right while keeping it simple and minimalist to attract more eyeballs.'} />
      </Suspense>

      <div className='page'>
        ContactUs page
      </div>
    </Fragment>
  )
};

export default ContactUs;