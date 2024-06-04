// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import BannerBottom from "../BannerBottom/BannerBottom";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    // const shoes = useLoaderData();
    // console.log(shoes);
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <Recipes></Recipes>
            <Product></Product>

        </div>
    );
};

export default Home;