import React, { useState, useEffect, useContext } from "react";

import SideBar from "../components/sideBar.jsx";
import AddSale from "../components/AddSale.jsx";


function SalesDetails() {
  const [showPurchaseModal, setPurchaseModal] = useState(false);
  const [purchase, setAllPurchaseData] = useState( [
    {
      SaleId: "SALE001",
      clientName: 'ch',
      ProductName: "Product 1",
      Date: "2022-01-01",
      price: 10.99,
      quantity: 5,
    },
    {
      SaleId: "SALE002",
      clientName: 'ay',
      ProductName: "Product 2",
      Date: "2022-02-15",
      price: 19.99,
      quantity: 2,
    },
    {
      SaleId: "SALE003",
      clientName: 'tt',
      ProductName: "Product 3",
      Date: "2022-03-10",
      price: 8.99,
      quantity: 10,
    },
    {
      SaleId: "SALE004",
      clientName: 'ee',
      ProductName: "Product 4",
      Date: "2022-04-20",
      price: 5.99,
      quantity: 3,
    },
  ]);
  const [products, setAllProducts] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);

  

  // useEffect(() => {
  //   fetchPurchaseData();
  //   fetchProductsData();
  // }, [updatePage]);

  // Fetching Data of All Purchase items
  const fetchPurchaseData = () => {
    fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllPurchaseData(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Modal for Sale Add
  const addSaleModalSetting = () => {
    setPurchaseModal(!showPurchaseModal);
  };

  
  // Handle Page Update
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  return (
    <>
    <SideBar/>
    <div className="col-span-12 lg:col-span-10  flex justify-end">
      <div className=" flex flex-col gap-5 w-10/12 mt-10 mr-3">
        {showPurchaseModal && (
          <AddPurchaseDetails
            addSaleModalSetting={addSaleModalSetting}
            products={products}
            handlePageUpdate={handlePageUpdate}
            authContext = {authContext}
          />
        )}
        {/* Table  */}
        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 dark:border-gray-800 dark:bg-gray-800 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold dark:text-gray-300">Sales details </span>
            </div>
            <div className="flex gap-4">
            <AddSale/>
            </div>
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300">
                  Product Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300">
                  Client Name 
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300">
                  Quantity 
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300">
                  Price 
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="">
              {purchase.map((element, index) => {
                return (
                  <tr key={element._id}>
                    <td className="whitespace-nowrap px-4 py-2  text-gray-900 dark:text-gray-300">
                      {element.ProductName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                      {element.clientName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                      {element.quantity}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                    {element.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                    {new Date(element.Date).toLocaleDateString() ==
                      new Date().toLocaleDateString()
                        ? "Today"
                        : element.Date} 
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {/* <span
                        className="text-green-700 cursor-pointer"
                        onClick={() => updateProductModalSetting(element)}
                      >
                        Edit{" "}
                      </span> */}
                      <span
                        className="text-red-600 px-2 cursor-pointer"
                        onClick={() => deleteItem(element._id)}
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
    </div>
    </>
  );
}

export default SalesDetails;
