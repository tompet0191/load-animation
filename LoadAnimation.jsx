import React from 'react';
import './LoadAnimation.css';

const LoadAnimation = ({element}) => 
{
    const animatedElement = React.cloneElement(element, {className: "loadAnimation"} );
    return (
        <>{animatedElement}</>
    )
};

export default LoadAnimation;