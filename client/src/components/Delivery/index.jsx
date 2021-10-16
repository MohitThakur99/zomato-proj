import React from "react";

//Components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";

const Delivery = () => {
    return (
        <>
        <DeliveryCarousal />
        <Brand />
        <div className="flex justify-between flex-wrap">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        </div>
        </>
    );
};

export default Delivery;
