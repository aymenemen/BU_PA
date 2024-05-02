import React, { useState } from "react";

const AddSupplier = () => {
  const [showModal, setShowModal] = useState(false);
  const [data,setData]=useState({supplier:"",product:"",email:'',tel:""});

  

  const handleSupplier=(e)=>{
        setData({supplier:e.target.value})
  }
  const handleProduct=(e)=>{
        setData({product:e.target.value})
  }
  const handleEmail=(e)=>{
        setData({email:e.target.value})
  }
  const handleTel=(e)=>{
        setData({tel:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
    setShowModal(false)
  }
  return (
    <>
      <button
                className="bg-emerald-800 flex hover:bg-emerald-900 text-white font-bold p-2 text-xs  rounded"
                onClick={() => setShowModal(true)}
              >
                
                Add Supplier
                <svg class="w-4 h-4 ml-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                </svg>

              </button>
      {showModal ? (
        <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

          <div className="w-full max-w-sm p-4 ml-32  bg-stone-200 border justify-center border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="max-w-md mx-auto my-3" onSubmit={(e)=>{handleSubmit(e)}}>
              
              <h5 className="text-xl text-center text-emerald-900 font-bold dark:text-white">Add a Supplier</h5>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="text" name="floating_Sname" onChange={(e)=>{handleSupplier(e)}} id="floating_Sname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_Sname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="text" name="floating_Pname" onChange={(e)=>{handleProduct(e)}} id="floating_Pname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_Pname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="email" name="floating_email" id="floating_email" onChange={(e)=>{handleEmail(e)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full mt-6 group">
                  <input type="tel" name="floating_Tel" onChange={(e)=>{handleTel(e)}} id="floating_Tel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />     
                  <label htmlFor="floating_Tel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
              </div>
             
              <div className="flex ">
              <button type="submit" className="text-white mt-10 mb-auto bg-emerald-800   hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-800">Create</button>
              <button onClick={()=>{setShowModal(false)}} className="text-white mt-10 mb-auto bg-red-800 ml-8 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-1/3  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-800">Close
              
              </button>
              </div>
          </form>
        </div>
        </div>
        </>
      ) : null}
    </>
  );
};

export default AddSupplier;