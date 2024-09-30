import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';
import ForumIcon from '@mui/icons-material/Forum';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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

      <div className='page flexcol'>
        <article className='flex center wh'>
          <h1 className="headingBig">We’re just a Conversation away!</h1>
        </article>

        <section className='contact'>
          <div className='subcontact'>
            <article>
              <WhatsAppIcon />
              <div>
                <h1 className="headingSmol">Connect on WhatsApp</h1>
                <p className='textBig'>+91 8077727525</p>
              </div>
            </article>
            <article>
              <EmailIcon />
              <div>
                <h1 className="headingSmol">Share a detailed specification</h1>
                <p className='textBig'>support@ulinkit.com</p>
              </div>
            </article>
          </div>
          <div className='subcontact'>
            <article>
              <CreateIcon />
              <div>
                <h1 className="headingSmol">Ready to share a Project?</h1>
                <p className='textBig'>Submit a Form</p>
              </div>
            </article>
            <article>
              <ForumIcon />
              <div>
                <h1 className="headingSmol">Begin a quick discussion</h1>
                <p className='textBig'>Live Chat with Us</p>
              </div>
            </article>
          </div>
        </section>

        <section className='git'>
          <article>
            <div className="flexcol start-center wh">
              <h2 className="heading wh">Get in touch</h2>
              <h1 className="headingBig wh">Contact us</h1>
            </div>
            <p className="textBig wh" style={{ textTransform: 'none' }}>
              I have worls-class, flexible support via live chat,
              email and Phone.<br /> I guarantee that you’ll be able to
              have any issue resolved within 24 hours.
            </p>
            <div className="flexcol start-center wh">
              <div className='flex center-start g10 wh'><LocalPhoneIcon /><p className="textBig">Phone : +971 56 765 8464</p></div>
              <div className='flex center-start g10 wh'><EmailIcon /><p className="textBig">Email : sales@alayratech.com</p></div>
            </div>
          </article>
          <form className='stylisharticle'>
            <h3 className="heading">Ready to start a Project?</h3>
            <input type="text" placeholder='Full Name' />
            <input type="number" placeholder='Phone Number' />
            <input type="email" placeholder='Email' />
            <textarea name="Message" id="Message" rows={3}></textarea>
            <button type='submit'>Submit</button>
          </form>
        </section>
      </div>
    </Fragment>
  )
};

export default ContactUs;