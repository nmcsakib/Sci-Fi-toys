import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import { toast } from "react-toastify";
import '@smastrom/react-rating/style.css'

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import ToyDetails from '../../../Pages/AllToys/ToyDetails/ToyDetails';

const ToyCard = ({toy}) => {
  const {user} = useContext(AuthContext)
  const location = useLocation()
    return (
        <div className="card bg-yellow-100 shadow-xl">
  <figure><img src={toy.pictureURL} className='md:h-52 w-full'  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{toy.toyName}</h2>
    <div className='flex md:flex-row flex-col space-y-4 justify-between w-full'>
        <p>${toy.price}</p>
       <div> <Rating style={{ maxWidth: 120 }} readOnly value={parseFloat(toy.rating)} /></div>
    </div>
    <div className="card-actions justify-center md:justify-end">
      {user ?
                    <button onClick={() => handelToyId(_id)} >
                        <label htmlFor="my-modal" className='flex btn btn-primary gap-3'>Details<FaArrowAltCircleRight />
                        </label></button>
                        :
                        <Link to="/login" state={{from: location}} onClick={() => toast('Login first to see details')} className="btn btn-primary flex">
                       Details<FaArrowAltCircleRight />
                      </Link>}
    </div>
  </div>
  <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal backdrop-blur-sm ">
  <div className="modal-box max-w-none w-5/6 ">
    <ToyDetails toyId={toy._id}/>
    <div className="modal-action absolute -top-6 right-0">
      <label htmlFor="my-modal" className="btn btn-circle btn-outline">X</label>
    </div>
  </div>
</div>
</div>
    );
};

export default ToyCard;