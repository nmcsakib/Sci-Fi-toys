import React from 'react';
import Marquee from "react-fast-marquee";
const Partners = () => {
    const partners = [
         "https://i.ibb.co/frq3xhh/daraz.webp",
         "https://i.ibb.co/mJY0sKM/Unimart-Logo.webp",
         "https://i.ibb.co/CwYcZCC/togu-mogu.webp",
         "https://i.ibb.co/pdsq93w/shwapno.webp",
         "https://i.ibb.co/XDJpYD0/rokomari.webp",
         "https://i.ibb.co/BGzmB3P/panda-mart.webp",
         "https://i.ibb.co/z28WMQp/kids-mom.webp",
         "https://i.ibb.co/1vG4NQZ/lavander.webp"
    ]
    return (
        <div>
            <h2 className="section-title">Our Partners</h2>
            <hr className='bg-black' />
            <Marquee className='my-10'>
                <img src={partners[0]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[1]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[2]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[3]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[4]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[5]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[6]} className='w-36 h-20 mx-3' alt="" />
                <img src={partners[7]} className='w-36 h-20 mx-3' alt="" />
       
            </Marquee>
        </div>
    );
};

export default Partners;