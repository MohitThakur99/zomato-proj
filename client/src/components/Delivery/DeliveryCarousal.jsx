import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {

    const categories = [
    {
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        title:"Pizza",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
        title:"Chicken",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
        title:"Burger",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
        title:"Paneer",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
        title:"Rolls",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
        title:"Chaat",
    }
];
    
    const settings = {
     arrows: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
    };

    return (
        <>
        <h1 className="text-xl mb-4 font-semibold">Ispiration for your first order</h1>
        <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
            {categories.map((food) => (
                <DeliveryCategory {...food} />
            ))}
        </div>

        <div className="hidden lg:block">
            <Slider {...settings}>
            {categories.map((food) => (
                <DeliveryCategory {...food} />
            ))}
            </Slider>
        </div>

        </>
    );
};

export default DeliveryCarousal;
