import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia magnam corporis perferendis necessitatibus possimus dolorum nihil cum ullam consequatur repudiandae assumenda quos, cumque alias eveniet id dicta beatae nam?</p>
        </div>
    )
};

export default Rainbow(About);