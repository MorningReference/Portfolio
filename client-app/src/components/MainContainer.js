import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';

export default (props) => {
    return (
        <div className="mainContainer">
            <AboutMe/>
            <Projects/>
            <Resume/>
        </div>
    );
}