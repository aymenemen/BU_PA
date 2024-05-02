import React, { useState } from "react";

const AddOrder = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
                className="bg-emerald-800 flex hover:bg-emerald-900 text-white font-bold p-2 text-xs  rounded"
                onClick={() => setShowModal(true)}
              >
                
                Add Order 
                <svg class="w-4 h-4 ml-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                </svg>

              </button>
      {showModal ? (
        <>

        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
        
          <div className="w-full max-w-sm p-4 ml-32  bg-stone-100 border justify-center border-emerald-400 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="max-w-md mx-auto my-3" onSubmit={'handleSubmitR'}>
              
              <h5 className="text-xl text-center text-emerald-900 font-bold dark:text-white">Add order</h5>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="text" name="floating_Pname" onChange={'handleFirstNameChange'} id="floating_Pname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_Pname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="number" name="floating_Quantity" onChange={'handleLastNameChange'} id="floating_Quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_Quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="Date" name="floating_date" id="floating_date" onChange={'handleEmail'} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expected date</label>
              </div>
              <div className="relative z-0 w-full mt-6 group">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-emerald-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={1}>Delivered</option>
                  <option value={0}>Not Delivered</option>
                </select>
              </div>
             
                <div className="flex ">
              <button type="submit" className="text-white mt-10 mb-auto bg-emerald-800   hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-800">Create</button>
              <button onClick={()=>{setShowModal(false)}} className="text-white mt-10 mb-auto bg-red-800 ml-8 hover:bg-red-600 focus:ring-red-2 focus:outline-none  font-medium rounded-lg text-sm w-1/3  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-800">Close
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

export default AddOrder;