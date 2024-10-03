import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
const Layout = lazy(() => import('./components/Layout'));

//public pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Services = lazy(() => import('./pages/Services'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            {/* public pages */}
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path = '/services' element= {<Services/>}/>

            {/* not found */}
            <Route path='*' element={<div className='page flex center'>Path does not exist!</div>} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;