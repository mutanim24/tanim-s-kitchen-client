import React from 'react';

const SingleCard = ({ item }) => {
    const { image, title, price, description, ingredient, rating } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;