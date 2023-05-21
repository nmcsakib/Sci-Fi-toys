import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
    return (
        <div>
           <div>
           <Swiper
        
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full" src="https://media.istockphoto.com/id/1288847154/photo/dreams-of-flight-indian-child-playing-with-toy-airplane.jpg?s=612x612&w=0&k=20&c=f_zAa_3E37R-mLE7eWlKNjtoFQyZtZ7z_YpETLYOkMQ=" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src="https://myhappyhelpers.com.au/cdn/shop/articles/54aaed237d9016028bd3fd8a04f35615.jpg?v=1643858740" alt="" /></SwiperSlide>
        
        <SwiperSlide><img className="w-full" src="https://www.startearly.org/app/uploads/2021/03/HERO_Colorful-Learning-Game-1024x640.png" alt="" /></SwiperSlide>
        
        
        
      </Swiper>
           </div>
      <div className="md:w-3/4  backdrop-blur-sm mx-auto bg-black/50 py-5 z-10 md:absolute  top-1/4 rounded-md flex flex-col gap-5 items-center justify-center">
        <h2 className="animate-background text-7xl font-bold text-center bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500 text-transparent bg-clip-text py-5">Welcome to <br/> the biggest Toy Store </h2>
        <p className="text-center text-[#fbfbfb] font-thin  w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis error iusto ullam numquam minima et, quidem illum cum fugit reiciendis cumque aliquid eveniet necessitatibus! Neque unde nemo repellat veritatis rerum minima quasi amet deleniti impedit blanditiis, eaque ipsa facere molestiae fuga vero quas? Aliquam hic nam tempore cupiditate quisquam.</p>
        <button className="btn btn-warning">Know More</button>
      </div>
        </div>
    );
};

export default Banner;