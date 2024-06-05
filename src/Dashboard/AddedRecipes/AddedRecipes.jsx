import React, { useEffect, useState } from 'react';

const AddedRecipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='grid grid-cols-2 gap-8'>
            {
                recipes.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure className=''><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body relative with-overlay">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AddedRecipes;