import React from 'react';

const Blog = ({ blogHeading, blogImg, blogText, blogDate }) => {
    return (
        <div className='blogridiv'>
            <img src={blogImg} alt={blogHeading} />
            <article>
                <h1 className='heading'>{blogHeading}</h1>
                <p className="text" style={{textAlign: 'justify', textTransform: 'none'}}>{blogText.length > 170 ? `${blogText.substring(0, 170)}...` : blogText}</p>
                <a className="textSmol hover">Read more</a>
                <div className="flex wh center-start g10">
                    <p className='textSmol'>{blogDate}</p>
                </div>
            </article>
        </div>
    )
};

export default Blog;