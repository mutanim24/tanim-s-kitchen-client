import React, { useEffect, useState } from 'react';
import SingleCard from '../../../components/LoadingSpinner/SingleCard';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('https://tanim-s-kitchen-server.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        
        <div>
            <div className='mt-10 text-center '>
                <h1 className='border-l-8 border-primary inline pl-4 text-4xl font-bold'>Our Delicious Dishes</h1>
            </div>
            <div className='p-14 flex flex-wrap gap-8'>
           {
                recipes.map(item => <SingleCard key={item.id} item={item}></SingleCard>)
           } 
        </div>
        </div>
    );
};

export default Recipes;