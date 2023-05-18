import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className="container mx-auto bg-orange-200">
            <h2 className=" tracking-wide font-bold text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text text-5xl py-5">Collect your Favorite!</h2>
            <hr className='bg-black' />
    <div className="grid-cols-3 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full rounded">
            <img className='h-full' src="https://i.ibb.co/jRXKC1x/photo-1501532358732-8b50b34df1c4.jpg"
                alt="image"/> 
        </div>
        <div className="w-full col-span-2 row-span-2 rounded">
            <img className='h-96 xl:h-full w-full' src="https://i.ibb.co/NSySV2h/photo-1530026454774-50cce722a1fb.jpg"
                alt="image"/>
        </div>
        <div className="w-full rounded">
            <img className='h-full' src="https://i.ibb.co/f4qqyfG/photo-1590595978583-3967cf17d2ea.jpg"
                alt="image"/> 
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/Nm9rbSH/photo-1603354350266-a8de3496163b.jpg"
                alt="image"/> 
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/rMJNS9J/photo-1609395464110-7116592351c6.jpg"
                alt="image"/>
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/4mX1rxY/photo-1640796433065-f423a9d9a5fd-2.jpg"
                alt="image"/>
        </div>
    </div>
    <div className='flex p-5'>
        <Link to="all-toys" className="btn bg-pink-300 text-amber-800 hover:bg-yellow-300 flex-grow">All Toys</Link>
    </div>
</div>
    );
};

export default Gallery;