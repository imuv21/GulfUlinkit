import React, { Fragment } from 'react';

const ImageComponent = ({ heading, text, imglink }) => {

    return (
        <Fragment>
            <div className="image-container">
                <img src={imglink} className="responsive-image" alt={heading} />
                <article className="text-overlay">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </article>
            </div>
        </Fragment>
    )
};

export default ImageComponent;