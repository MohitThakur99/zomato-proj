import React from "react";
import { AiTwotoneStar } from "react-icons/ai"

export const RestaurantCard = (props) => {
    return (
        <>
        <div className="bg-white p-4 w-full mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">
            <div className="w-full h-56 lg:h-64 relative">
                <div className="absolute w-full flex bottom-4 items-end justify-between">
                <div className="flex flex-col gap-2 items-start">
                {props.isPro && (
                    <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                    Pro extra 20% off
                    </span>
                )}
                {props.isOff && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {`${props.isOff}`}% OFF
                    </span>
                )}
                </div>
                <span className="bg-white bg-opacity-75 p-1 rounded mr-3">47 min</span>
                </div>
                <img 
                src="https://b.zmtcdn.com/data/pictures/chains/2/1922/97a99fd8f1f9114d8213e05ee72da0cc_o2_featured_v2.jpg?output-format=webp" 
                alt="food" 
                className="w-full h-full rounded-2xl"
                />
            </div>
            <div className="my-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-medium">Culinaire</h4>
                     <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
                        4.1 <AiTwotoneStar /> 
                    </span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                    <p>Chinese, Thai</p>
                    <p>₹ 400</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default RestaurantCard;