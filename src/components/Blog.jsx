import React from 'react';

const Blog = () => {
    return (
        <div className='blogridiv'>
            <img src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development_480x360.jpg" alt="blogimg" />
            <article>
                <h1 className='heading'>Welcome to the World of Web Development!</h1>
                <p className="text" style={{textAlign: 'justify', textTransform: 'none'}}>In the world of web development, “Hello World” is much more than just a phrase. It's the starting point for every developer when learning a new language or framework. Whether you're building with HTML, CSS, JavaScript, or using frameworks like React, this simple text signifies your entry into the world of coding and creativity.</p>
                <a className="textSmol hover">Read more</a>
                <div className="flex wh center-start g10">
                    <p className='textSmol'>February 14, 2024</p>
                </div>
            </article>
        </div>
    )
};

export default Blog;