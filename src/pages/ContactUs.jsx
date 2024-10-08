import React, { Fragment, lazy, Suspense, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../components/FireBase';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';
import ForumIcon from '@mui/icons-material/Forum';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const ImageComponent = lazy(() => import('../components/ImageComponent'));


const ContactUs = () => {

  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '', email: '', message: '' });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);

    try {
      const docRef = await addDoc(collection(db, "contactFormSubmissions"), {
        fullName: DOMPurify.sanitize(formData.fullName),
        phoneNumber: DOMPurify.sanitize(formData.phoneNumber),
        email: DOMPurify.sanitize(formData.email),
        message: DOMPurify.sanitize(formData.message),
        timestamp: new Date() 
      });
      alert('Form submitted successfully!');
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setSaving(false);
    }
  };

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
              <h2 className="heading">Get in touch</h2>
              <h1 className="headingBig">Contact us</h1>
            </div>
            <p className="textBig wh" style={{ textTransform: 'none' }}>
              I have worls-class, flexible support via live chat,
              email and Phone.<br /> I guarantee that you’ll be able to
              have any issue resolved within 24 hours.
            </p>
            <div className="flexcol start-center wh">
              <div className='flex center-start g10 wh'><LocalPhoneIcon /><p className="textBig">Phone : +971 56 765 8464</p></div>
              <div className='flex center-start g10 wh'><EmailIcon /><p className="textBig">Email : support@ulinkit.com</p></div>
            </div>
          </article>
          <form className='stylisharticle' onSubmit={handleSubmit}>
            <h3 className="heading">Ready to start a Project?</h3>
            <input type="text" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleChange} />
            <input type="number" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange} />
            <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
            <textarea name="message" id="Message" rows={3} placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
            <button type='submit' disabled={saving}>{saving ? 'Submitting...' : 'Submit'}</button>
          </form>
        </section>
      </div>
    </Fragment>
  )
};

export default ContactUs;