
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ToyDataRow from "./AllToys/ToyDataRow";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateToy from './UpdateToy';
import { toast } from "react-toastify";


const MyToys = () => {
  const location = useLocation()
  const { user } = useContext(AuthContext)
  const [toys, setToys] = useState([])
  const [updateId, setUpdateID] = useState('')
  const handelSorting = (e) => {
    const num = e.target.value;
    fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/my-toys/${num}?email=${user?.email}`).then(res => res.json()).then(data => {
      console.log(data);
      setToys(data)
    })
  }
  useEffect(() => {
    fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/my-toys?email=${user?.email}`).then(res => res.json()).then(data => setToys(data))
  }, [])

  const handelUpdateInfo = (toyData) => {
    fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/toy/${updateId}`,{
      method: "PUT",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(toyData)
    }).then(res => res.json()).then(data => {
      console.log(data);
      if(data.modifiedCount>0){
        toast('Toy data updated')
        const updated = toys.find(t => t._id === updateId)
        updated.price = toyData.price;
        updated.availableQuantity = toyData.availableQuantity;
        updated.detailDescription = toyData.detailDescription;
        console.log(updated);
        console.log('from 46',toyData);
        const remaining = toys.filter(t => t._id !== updateId)
        console.log(remaining);
        const total = [...remaining, updated]
        setToys(total)
      }
    })
  
  }
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

        fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/allToys/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          }
        }).then(res => res.json()).then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
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
  
  
  const handelUpdate = id => {
    console.log(id);
    setUpdateID(id)
  }
  console.log(updateId);
  return (
    <div>
      <div>
        <h2 className=" tracking-wide font-bold text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text text-5xl py-5">Your Available toys</h2>
        <div className="bg-pink-200 flex">
          <select className="w-64 ml-auto  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" id="subCategory" onChange={handelSorting}>
            <option value="" disabled selected hidden>Sort by Price</option>
            <option value="-1">High</option>
            <option value="1">Low</option>
          </select>
        </div>
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
                handelUpdate={handelUpdate}
                

              />)
            }

          </tbody>
        </table>
        <input type="checkbox" id="my-modal-update" className="modal-toggle" />
<div className="modal backdrop-blur-sm ">
  <div className="modal-box max-w-none w-5/6 ">
    <UpdateToy updateId={updateId} handelUpdateInfo={handelUpdateInfo} />
    <div className="modal-action absolute -top-6 right-0">
      
    </div>
  </div>
</div>
      </div>
    </div>


  );
};

export default MyToys;