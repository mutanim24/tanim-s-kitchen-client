import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddedRecipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/recipe/${id}`, {
            method: "DELETE"
        })
        .then(res => console.log(res.json()))
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    return (
        <div className='grid grid-cols-2 gap-8'>
            {
                recipes.map(item => <div key={item._id} className="relative card w-96 bg-base-100 shadow-xl image-full">
                    <figure className=''><img src={item.image} alt="Shoes" /></figure>
                    <div className="absolute bg-black h-full w-full z-0 opacity-45"></div>
                    <div className="card-body relative with-overlay z-10 text-white">
                        <h2 className="card-title text-white">{item.title}</h2>
                        <p className='text-white'>{item.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/update/${item._id}`} className="btn btn-primary">Update</Link >
                            <button onClick={() => handleDelete(item._id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AddedRecipes;