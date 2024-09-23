import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';


const Home = () => {

  return (
    <Fragment>
      <Helmet>
        <title>Gulf Ulinkit | Home Page</title>
        <meta name="description" content=""></meta>
        <link rel="canonical" href="" />
      </Helmet>

      <div className='page'>
        home page
      </div>
    </Fragment>
  )
};

export default Home;