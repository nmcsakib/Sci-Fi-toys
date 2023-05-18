import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useScrollTop from '../../useScrollTop';

const ToyDetails = () => {
  const {pathname} = useLocation()
  useScrollTop(pathname)
  const {
    _id,
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    pictureURL,
    detailDescription

  } = useLoaderData()
  console.log(toyName);
    return (
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{toyName}</h1>
      <p className="text-sm mt-2">Category: {subCategory}</p>
      <p className="py-6">{detailDescription}</p>
      <div className="stats shadow">
  
      <div className="stats stats-vertical shadow w-full">
  
  
  <div className="stat">
    <div className="stat-title">Seller</div>
    <div className="stat-value">{sellerName}</div>
    <div className="stat-desc">{sellerEmail}</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Price</div>
    <div className="stat-value">{price}</div>
    <div className="stat-desc">Available: {availableQuantity}</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Ratings</div>
    <div className="stat-value"> <Rating style={{ maxWidth: 120 }} readOnly value={rating} />
    </div>
    
  </div>
  
</div>
  
</div>
    </div>
  </div>
</div>
    );
};

export default ToyDetails;