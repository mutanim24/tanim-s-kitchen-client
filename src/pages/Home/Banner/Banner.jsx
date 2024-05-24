import React from 'react';
import bannerBG from '../../../assets/banner-bg.jpg';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBG})`
            }}
            className="hero min-h-screen bg-base-200 bg-cover bg-center"
        >
            <div className='w-full h-full bg-black bg-opacity-65'></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
