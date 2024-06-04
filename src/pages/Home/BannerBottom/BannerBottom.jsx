import React from 'react';
import bg2 from "../../../assets/bg2.jpg"
import bg3 from "../../../assets/bg3.jpg"

const BannerBottom = () => {
    return (
        <div className='flex gap-5 p-14'>
            <div className='relative w-6/12 h-52'>
                <img className="absolute inset-0 w-full h-full object-cover" src={bg2} alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-r from-black  opacity-70"></div>
                <div className="relative z-10 flex flex-col space-y-4 p-9 text-white">
                    <div>
                        <h2 className='text-3xl font-bold mb-2'>Strawberry Cake</h2>
                        <p>Simple & Delicious</p>
                    </div>
                    <button className="btn w-5/12 bg-primary">See Full Recipe</button>
                </div>
            </div>
            <div className='relative w-6/12 h-52'>
                <img className="absolute inset-0 w-full h-full object-cover" src={bg3} alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-r from-black opacity-70"></div>
                <div className="relative z-10 flex flex-col space-y-4 p-9 text-white">
                    <div>
                        <h2 className='text-3xl font-bold mb-2'>Strawberry Cake</h2>
                        <p>Simple & Delicious</p>
                    </div>
                    <button className="btn w-5/12 bg-primary">See Full Recipe</button>
                </div>
            </div>
           
        </div>
    );
};

export default BannerBottom;