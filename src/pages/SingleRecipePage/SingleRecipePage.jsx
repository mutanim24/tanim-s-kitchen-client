import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleRecipePage = () => {
    
    
    
    return (
        <div className='m-14 p-10 flex gap-14 border border-2 rounded'>
            <div className='w-5/12'>
                <img src="https://themewagon.github.io/delicious/img/bg-img/r5.jpg" alt="" />
            </div>
            <div className='w-7/12'>
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-bold text-primary'>Spaghetti Carbonara</h2>
                    <h3 className='text-2xm font-semibold'>$12.99</h3>
                </div>
                <h3 className='text-2xl font-bold'>4.9</h3>
                <p className='text-gray-600 mt-8'>A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
            </div>
        </div>
    );
};

export default SingleRecipePage;