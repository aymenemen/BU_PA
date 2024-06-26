import React, { useState, useEffect, } from "react";

import SideBar from "../components/sideBar.jsx";
import AddSupplier from "../components/AddSupplier.jsx";


function Supplier() {
  const [showModal, setShowModal] = useState(false);
  const [suppliers, setSuppliers] = useState([
    {
      SupplierName: "Supplier 1",
      SupplierId: "SUP001",
      Product: "Product 1",
      Phone: "+123456789",
      email: "supplier1@example.com",
    },
    {
      SupplierName: "Supplier 2",
      SupplierId: "SUP002",
      Product: "Product 2",
      Phone: "+987654321",
      email: "supplier2@example.com",
    },
    {
      SupplierName: "Supplier 3",
      SupplierId: "SUP003",
      Product: "Product 3",
      Phone: "+111222333",
      email: "supplier3@example.com",
    },
    {
      SupplierName: "Supplier 4",
      SupplierId: "SUP004",
      Product: "Product 4",
      Phone: "+444555666",
      email: "supplier4@example.com",
    },
  ]);

  

  // useEffect(() => {
  //   console.log('done')  }, []);

  // Fetching all stores data
  const fetchData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  

  return (
    <>
      <SideBar/>
      <div className="grid-cols-12">

     <div className="overflow-x-auto rounded-lg border w-10/12 ml-60 mt-10 bg-white dark:border-transparent border-gray-200 dark:bg-gray-800 dark:text-gray-300 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold">Suppliers</span>
              <div className="flex justify-center items-center px-2 border-2 rounded-lg ">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>

                <input
                  className="border-none outline-none dark:text-gray-300 dark:bg-transparent  focus:border-transparent text-xs"
                  type="text"
                  placeholder="Search here"
                  value={''}
                  onChange={'handleSearchTerm'}
                />
              </div>
            </div>
            <div className="flex gap-4">
            <AddSupplier  />
            </div>
          </div>
          <table className="min-w-full divide-y-2  divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-8 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                Supplier Name

                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Product
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Phone
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  email
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {suppliers.map((element, index) => {
                return (
                  <tr key={element._id}>
                    <td className="whitespace-nowrap px-4 py-2  text-gray-900 font-bold dark:text-gray-400">
                      {element.SupplierName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.Product}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.Phone}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.email}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {/* <span
                        className="text-green-700 cursor-pointer"
                        onClick={''}
                      >
                        Edit{" "}
                      </span> */}
                      <span
                        className="text-red-600 px-2 cursor-pointer"
                        onClick={''}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    
    </>
  );
}

export default Supplier;
