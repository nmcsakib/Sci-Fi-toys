import React from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

import { FaHeart } from 'react-icons/fa';

const ToyCard = ({toy}) => {
    console.log(toy);
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{toy.toyName}</h2>
    <div className='flex justify-between w-full'>
        <p>{toy.price}</p>
       <div> <Rating style={{ maxWidth: 120 }} readOnly value={toy.rating} /></div>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details<FaHeart/></button>
    </div>
  </div>
</div>
    );
};

export default ToyCard;