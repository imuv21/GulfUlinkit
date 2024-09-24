import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageSlider from '../components/ImageSlider';


const Home = () => {

  return (
    <Fragment>
      <Helmet>
        <title>Gulf Ulinkit | Home Page</title>
        <meta name="description" content=""></meta>
        <link rel="canonical" href="" />
      </Helmet>

      <ImageSlider />

      <div className='page' style={{ height: '200vh' }}>
        {/* <img src="https://img.lovepik.com/photo/48013/0576.jpg_wh860.jpg" alt="" style={{ clipPath: `polygon(100% 0, 100% 80%, 61% 100%, 0 71%, 0 0)`, width: '100%', height: 'auto'}} /> */}
      </div>
    </Fragment>
  )
};

export default Home;