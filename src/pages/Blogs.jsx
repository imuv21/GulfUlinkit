import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogsData from '../assets/json/BlogSchema';
const Blog = lazy(() => import('../components/Blog'));
const ImageComponent = lazy(() => import('../components/ImageComponent'));



const Blogs = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Gulf Ulinkit | Blog</title>
                <meta name="description" content="Stay updated with the latest insights, trends, and news from Gulf Ulinkit. Explore our blog for expert articles and valuable resources." />
                <link rel="canonical" href="https://www.ulinkit.com/blogs" />
            </Helmet>

            <Suspense fallback={<p>Loading...</p>}>
                <ImageComponent heading={'Blogs'} imglink={'https://kindful.com/wp-content/uploads/How-To-Write-An-Effective-Peer-To-Peer-Fundraising-Email.jpg'} text={'We love turning raw ideas into robust and bespoke creations. We believe in doing things right while keeping it simple and minimalist to attract more eyeballs.'} />
            </Suspense>

            <div className='page flexcol'>
                <div className="blogrid">
                    <Suspense fallback={<p>Loading...</p>}>
                        {BlogsData && BlogsData.length > 0 ? (
                            BlogsData.map((blog, index) => (
                                <Blog key={index} blogHeading={blog.blogHeading} blogImg={blog.blogImg} blogText={blog.blogText} blogDate={blog.blogDate} />
                            ))
                        ) : (
                            <p className="text">No blogs available</p>
                        )}
                    </Suspense>
                </div>
            </div>
        </Fragment>
    )
};

export default Blogs;