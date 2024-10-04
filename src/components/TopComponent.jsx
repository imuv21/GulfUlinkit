import React, { Fragment } from 'react';

const TopComponent = ({ heading, headingTwo, text, textTwo, textThree, imglink }) => {

    return (
        <Fragment>
            <div className="top-component">
                <article className="top-overlay">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                    <button>Contact us</button>
                </article>
                <img src={imglink} className="image-overlay" alt={heading} />
            </div>
            <div className="hirecont">
                <div className='hireone'>
                    <div className="heading">{headingTwo}</div>
                    <div className="textBig">{textTwo}</div>
                </div>
                <div className="hiretwo text">{textThree}</div>
            </div>
        </Fragment>
    )
};

export default TopComponent;