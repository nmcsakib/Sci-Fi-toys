import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollTop from '../../Hooks/useScrollTop';
import useTitleChange from '../../Hooks/useTitleChange';
import { RotatingLines } from 'react-loader-spinner';

const ToyDetails = ({toyId}) => {
  console.log(toyId);
  const {pathname} = useLocation()
  const [toy, setToy ] = useState([])
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/toy/${toyId}`).then(res => res.json()).then(data => {
      setToy(data)
      setLoad(false)
    })
  },[toyId])
  useScrollTop(pathname)
  const {
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    pictureURL,
    detailDescription
    
  } = toy;
  useTitleChange(`${toyName}`)
    return (
       <div className="hero bg-base-200 ">
 { 
 load ? <div className="w-full h-screen flex justify-center items-center">
 <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
</div> 
 :
 <div className="hero-content flex-col lg:flex-row">
    <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{toyName}</h1>
      <p className="text-sm mt-2">Category: {subCategory}</p>
      <p className="py-6">{detailDescription?.length > 150 ?(detailDescription)?.slice(0, 150) + "..." : detailDescription}</p>
      <div className="stats shadow">
  
      <div className="stats md:stats-vertical shadow w-full">
  
  
  <div className="stat">
    <div className="stat-title">Seller</div>
    <div className="stat-value text-2xl">{sellerName}</div>
    <div className="stat-desc">{sellerEmail}</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Price</div>
    <div className="stat-value text-3xl">${price}</div>
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
  </div>}
</div>
    );
};

export default ToyDetails;