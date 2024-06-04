// import React from 'react';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { AiOutlineClockCircle } from 'react-icons/ai';
// import { GiHamburger } from 'react-icons/cg';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { MdFoodBank } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuDessert } from "react-icons/lu";





const ReactCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 m-14 bg-transparent">
                <div className="bg-orange-100 text-primary p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <MdFoodBank className="text-primary text-5xl mx-auto"></MdFoodBank>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={10} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Amazing Recipes</h4>
                </div>
                <div className="bg-orange-100 text-primary p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <GiHamburger className="text-primary text-5xl mx-auto"></GiHamburger>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={210} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Burger Recipes</h4>
                </div>
                <div className="bg-orange-100 text-primary p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <TbMeat className="text-primary text-5xl mx-auto"></TbMeat>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={45} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h4 className="text-xl text-center">Meat Recipes</h4>
                </div>
                <div className="bg-orange-100 text-primary p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <LuDessert className="text-primary text-5xl mx-auto"></LuDessert>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={11} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Desert Recipes</h4>
                </div>


            </div>
        </ScrollTrigger>
    );
};

export default ReactCounter;