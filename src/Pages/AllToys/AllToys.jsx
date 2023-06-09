import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyDataRow from './ToyDataRow';
import useTitleChange from '../../Hooks/useTitleChange';
import ToyDetails from './ToyDetails/ToyDetails';

const AllToys = () => {
    const allToys= useLoaderData()
    const [toys, setToys] = useState(allToys)
    const [toyId, setToyId] = useState('')
    const [searchText, setSearchText] = useState('')
    const handelToyId = id => {
      setToyId(id)
    }
    const handelSearch = () => {
     fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/searchToy/${searchText}`).then(res => res.json()).then(data => setToys(data) )
    }
    useTitleChange('All Toys')
    return (
        <div>
         
            <h2 className=" tracking-wide font-bold text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text text-5xl py-5">All toys</h2>
            <div>
            <div className="overflow-x-auto">

              {/* Search Box */}
              <div className="bg-red-200 py-5 flex justify-center items-center w-full">
  <div>
  <div className="input-group bg-red-200">
    <input onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search…" className="input input-bordered" />
    <button onClick={handelSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  </div>
</div>
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        toys?.map((toys, index) => <ToyDataRow handelToyId={handelToyId} key={toys._id} toys={toys} rowNum={index}/>)
     }
     
    </tbody>
  </table>
</div>
            </div>
            
            <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal backdrop-blur-sm ">
  <div className="modal-box max-w-none w-5/6 ">
    <ToyDetails toyId={toyId}/>
    <div className="modal-action absolute -top-6 right-0">
      <label htmlFor="my-modal" className="btn btn-circle btn-outline">X</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllToys;