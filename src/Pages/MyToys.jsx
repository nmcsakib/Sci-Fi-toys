import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ToyDataRow from "./AllToys/ToyDataRow";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`).then(res => res.json()).then(data => setToys(data))
    },[])
    return (
        <div>
            <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Seller</th>
        <th className='px-0'>Toy Name</th>
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
    );
};

export default MyToys;