
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddToy = () => {
    
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   
    fetch('http://localhost:5000/allToys/', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
      console.log(data);
      if(data.insertedId){
        toast('Toy added Successfully')
      }
    })
    console.log(data);
  };
    return (
        <>
<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
             Toy's Picture
            </label>
            <input {...register("pictureURL", {required: true})}
              type="url"
              placeholder="Toy's Picture"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="Toys Name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Toy's Name
            </label>
            <input {...register("toyName", {required: true})}
              type="text"
              placeholder="Toy's Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
        
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Seller name
        </label>
        <input {...register("sellerName", {required: true})}
          type="text"
          placeholder="name"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      
        </div>
        <div className="w-full px-3 sm:w-1/2">
       
        <label
          for="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Seller's email
        </label>
        <input {...register("sellerEmail", {required: true})}
          type="email"
          placeholder="ex@email.com"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      
        </div>
      </div>
      
     
      <div className="mb-5">
      <label
          for="category"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Sub Category
        </label>
        <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" id="subCategory" {...register("subCategory", {required: true})}>
        <option value="physics-toys">Physics</option>
        <option value="chemistry-toys">Chemistry</option>
        <option value="biology-toys">Biology</option>
      </select>
      
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
        <label
          for="price"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Price
        </label>
        <input {...register("price", {required: true})}
          type="text"
          defaultValue="$"
          placeholder="5"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />

        </div>
        <div className="w-full px-3 sm:w-1/2">
        <label
          for="rating"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Ratings
        </label>
        <input {...register("rating", {required: true})}
          type="text"
          
          placeholder="ratings"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        </div>
      </div>
      
      <div className="-mx-3 flex flex-wrap">
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
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
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
         
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      

      
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
      </form>
        </div>
        <ToastContainer />
      </div>
      </>
    );
};

export default AddToy;
