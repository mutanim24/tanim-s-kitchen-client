import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from 'react-router-dom';

const SingleRecipePage = () => {

    const recipe = useLoaderData();
    const { _id, title, image, price, rating, description, ingredients } = recipe;

    return (
        <div className='m-14 p-10 flex gap-14 border border-2 rounded'>
            <div className='w-5/12'>
                <img src={image} alt="" />
            </div>
            <div className='w-7/12'>
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-bold text-primary'>{title}</h2>
                    <h3 className='text-2xl font-semibold'>${price}</h3>
                </div>
                <div className='text-2xl font-bold flex gap-3 mt-3 '>
                    <ReactStars
                        count={5}
                        value={rating}
                        // onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                    />
                    {rating}</div>
                <p className='text-gray-600 mt-8'>{description}</p>
                <div className='space-y-3 mt-5'>
                    <h4 className='text-2xl font-semibold'>Ingredient</h4>
                    {/* <p>{ingredient}</p> */}
                    <div className='flex flex-wrap gap-3'>
                        {
                            ingredients.map(item => <p className='font-semibold text-gray-600 border p-2 rounded'>{item}</p>)
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SingleRecipePage;