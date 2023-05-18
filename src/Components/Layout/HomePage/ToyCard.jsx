import React from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyCard = ({toy}) => {
    console.log(toy);
    return (
        <div className="card bg-yellow-100 shadow-xl">
  <figure><img src={toy.pictureURL} className='h-52 w-full'  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{toy.toyName}</h2>
    <div className='flex justify-between w-full'>
        <p>{toy.price}</p>
       <div> <Rating style={{ maxWidth: 120 }} readOnly value={parseFloat(toy.rating)} /></div>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/toy/${toy._id}`} className="btn btn-primary">Details <FaArrowAltCircleRight/></Link>
    </div>
  </div>
</div>
    );
};

export default ToyCard;