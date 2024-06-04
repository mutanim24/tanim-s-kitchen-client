import React from 'react';
import PageBanner from './PageBanner/PageBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import ReactCounter from './ReactCounter/ReactCounter';
import AboutImg from './AboutImg/AboutImg';

const About = () => {
    return (
        <div>
            <PageBanner></PageBanner>
            <WhoWeAre></WhoWeAre>
            <ReactCounter></ReactCounter>
            <AboutImg></AboutImg>
        </div>
    );
};

export default About;