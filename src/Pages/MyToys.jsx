
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ToyDataRow from "./AllToys/ToyDataRow";
import { useLocation } from "react-router-dom";

import Modal from 'react-modal';
import Swal from "sweetalert2";
import UpdateToy from './UpdateToy';


const MyToys = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const { user } = useContext(AuthContext)
  const [toys, setToys] = useState([])
  const [updateId, setUpdateID] = useState('')
  const handelSorting = (e) => {
    const num = e.target.value;
    fetch(`http://localhost:5000/my-toys/${num}?email=${user?.email}`).then(res => res.json()).then(data => {
      console.log(data);
      setToys(data)
    })
  }
  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user?.email}`).then(res => res.json()).then(data => setToys(data))
  }, [])

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
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handelUpdate = id => {
    console.log(id);
    setUpdateID(id)
  }
  console.log(updateId);
  return (
    <div>
      <div className={`${modalIsOpen ? "hidden" : ""}`}>
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
                openModal={openModal}

              />)
            }

          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <UpdateToy updateId={updateId} closeModal={closeModal} />
      </Modal>
    </div>


  );
};

export default MyToys;