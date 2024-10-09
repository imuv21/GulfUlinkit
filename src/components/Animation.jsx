import React from 'react';
import { useLottie } from "lottie-react";

const Animation = ({ animationData }) => {
    const options = {
        animationData,
        loop: true,
    };
    const { View } = useLottie(options);

    return <div className="perfectgridarticleanimation">{View}</div>;
};

export default Animation;
