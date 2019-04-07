import React from 'react';
import './LoadAnimation.css';

const LoadAnimation = (props) => 
{
    const animatedElement = React.cloneElement(props.children, {className: "loadAnimation"} );
    
    return (
         <>{animatedElement}</>
    )
};

export default LoadAnimation;