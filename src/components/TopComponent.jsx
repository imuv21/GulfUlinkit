import React, { Fragment } from 'react';
import { useLottie } from "lottie-react";

const TopComponent = ({ heading, headingTwo, text, textTwo, textThree, imglink }) => {

     //json lottie animation
     const options = {
        animationData: imglink,
        loop: true,
    };
    const { View } = useLottie(options);

    return (
        <Fragment>
            <div className="top-component">
                <article className="top-overlay">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                    <button>Contact us</button>
                </article>
                <div className='animation'> {View} </div>
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