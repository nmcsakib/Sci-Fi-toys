import React, { useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from '../Provider/AuthProvider';
const UpdateToy = ({closeModal, updateId}) => {
  const [toy, setToy] = useState([])
  const {price, availableQuantity, detailDescription} = toy;
    console.log(updateId);
    useEffect(() => {
      fetch(`http://localhost:5000/toy/${updateId}?some=somedata`).then(res => res.json()).then(data => {
        setToy(data)
      })
    },[])
  const {user} = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
    return (
        <div className='bg-pink-200 z-50'>
            <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <label
          for="price"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Price
        </label>
        <input defaultValue={price} {...register("price", {required: true})}
          type="text"
          placeholder="5"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />

        </div>
        <div className="w-full px-3 sm:w-1/2">
        <div className="w-full px-3 ">
          <div className="mb-5">
            <label
              for="quantity"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
             Available Quantity
            </label>
            <input  {...register("availableQuantity", {required: true})}
              type="number"
              defaultValue={availableQuantity}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        </div>
      </div>
      
      <div className="mb-5">
        <label
          for="details"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Details
        </label>
        <textarea rows={8} cols={30} {...register("detailDescription", {required: true})}
          type="text"
          placeholder="Place your details about this toy..."
         defaultValue={detailDescription}
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      

      
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
        <button onClick={closeModal}
          className="hover:shadow-form rounded-md mx-2 bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Close
        </button>
      </div>
      </form>
        </div>
      </div>
      
        </div>
    );
};

export default UpdateToy;