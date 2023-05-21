import React, { useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import useTitleChange from '../Hooks/useTitleChange';
const UpdateToy = ({ updateId, handelUpdateInfo }) => {
  console.log(updateId);
  const [toy, setToy] = useState([])
  useTitleChange(`Update toy`)
  console.log(updateId);
  useEffect(() => {
    fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/toy/${updateId}?some=somedata`,).then(res => res.json()).then(data => {
      setToy(data)
    })
  }, [updateId])
  console.log(toy);
  const { price, availableQuantity, detailDescription } = toy;
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price)
    setValue('price', '')
    setValue('availableQuantity', '')
    setValue('detailDescription', '')
    handelUpdateInfo(data)
      
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
                  Price(USD)
                </label>
                <input defaultValue={price} {...register("price", { required: true, maxLength: 3 })}
                  type="number"
                  step="0.01"
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
                    <input  {...register("availableQuantity", { required: true })}
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
              <textarea rows={8} cols={30} {...register("detailDescription", { required: true })}
                type="text"
                placeholder="Place your details about this toy..."
                defaultValue={detailDescription}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>



            <div>
              <button type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit

              </button>
              <button>
                <label htmlFor="my-modal-update" className="hover:shadow-form rounded-md ml-3 bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Close</label>

              </button>

            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default UpdateToy;