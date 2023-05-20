import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyDataRow from './ToyDataRow';
import useTitleChange from '../../Hooks/useTitleChange';

const AllToys = () => {
    const allToys= useLoaderData()
    const [toys, setToys] = useState(allToys)
    const [searchText, setSearchText] = useState('')
    const handelSearch = () => {
     fetch(`http://localhost:5000/searchToy/${searchText}`).then(res => res.json()).then(data => setToys(data) )
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
        toys?.map((toys, index) => <ToyDataRow key={toys._id} toys={toys} rowNum={index}/>)
     }
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllToys;