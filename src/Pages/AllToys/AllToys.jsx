import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyDataRow from './ToyDataRow';

const AllToys = () => {
    const allToys= useLoaderData()
    return (
        <div>
            <h2 className=" tracking-wide font-bold text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text text-5xl py-5"> All toys</h2>
            <div>
            <div className="overflow-x-auto">
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
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        allToys.map((toys, index) => <ToyDataRow key={toys._id} toys={toys} rowNum={index}/>)
     }
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllToys;