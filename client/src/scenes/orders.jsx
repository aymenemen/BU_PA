import React, { useState } from 'react'
import DarkMode from '../components/darkMode'
import SideBar from '../components/sideBar'
import AddOrder from '../components/AddOrder'

const OrdersDetails = () => {
  const[orders,setOrders]=useState([
    {
      Product: "Item 1",
      Quantity: 5,
      OrderId: "ORD001",
      ExpectedDate: "2022-01-15",
      Status: 1,
    },
    {
      Product: "Item 2",
      Quantity: 3,
      OrderId: "ORD002",
      ExpectedDate: "2022-02-20",
      Status: 0,
    },
    {
      Product: "Item 3",
      Quantity: 2,
      OrderId: "ORD003",
      ExpectedDate: "2022-03-10",
      Status: 1,
    },
    {
      Product: "Item 4",
      Quantity: 1,
      OrderId: "ORD004",
      ExpectedDate: "2022-04-05",
      Status: 0,
    },
  ]);


  
  return (
    
    <>
      <SideBar/>
      <div className="grid-cols-12">

     <div className="overflow-x-auto rounded-lg border w-10/12 ml-60 mt-10 bg-white dark:border-transparent border-gray-200 dark:bg-gray-800 dark:text-gray-300 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold">Orders</span>
              <div className="flex justify-center items-center px-2 border-2 rounded-md ">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
              <AddOrder/>
            </div>
          </div>
          <table className="min-w-full divide-y-2  divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-8 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Product
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Expected Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {orders.map((element, index) => {
                return (
                  <tr key={element._id}>
                    <td className="whitespace-nowrap px-4 py-2  text-gray-900 font-semibold dark:text-gray-300">
                      {element.Product}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">
                      {element.Quantity}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-400">
                    {element.ExpectedDate}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700  dark:text-gray-400">
                    {element.Status==1?<span className='text-green-500'>Delivered</span>:<span className='text-red-500'>Not Deliviered </span>}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700  dark:text-gray-400">
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
      
    
    </>)
}

export default OrdersDetails;