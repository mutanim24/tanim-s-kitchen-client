import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    return (
       <div>
        <h1 className='text-4xl font-bold text-center'>Our product</h1>
         <div className='flex gap-3'>
           <SingleProduct></SingleProduct> 
           <SingleProduct></SingleProduct> 
           <SingleProduct></SingleProduct> 
        </div>
       </div>
    );
};

export default Product;