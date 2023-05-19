import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ToyDataRow from "./AllToys/ToyDataRow";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {
    
    const location = useLocation()

    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`).then(res => res.json()).then(data => setToys(data))
    },[])

    const handelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/allToys/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            }).then(res => res.json()).then(data => {
                console.log(data);
                if(data.deletedCount >0){
                    Swal.fire(
                        'Deleted!',
                        'Your Toy has been deleted.',
                        'success'
                      )
                      const remaining = toys.filter(toy => toy._id !== id)
                      setToys(remaining)
                }
            })

            
            }
          })
       
      
    }
    return (
        <div>
             <h2 className=" tracking-wide font-bold text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text text-5xl py-5">Your Available toys</h2>
            <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr className="text-center">
        <th></th>
        <th>Seller</th>
        <th className='px-0'>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        toys?.map((toys, index) => <ToyDataRow 
        key={toys._id}
         toys={toys}
         rowNum={index}
         from={location}
         handelDelete={handelDelete}
         />)
     }
     
    </tbody>
  </table>
  {/* The button to open modal */}
  
        </div>
    );
};

export default MyToys;