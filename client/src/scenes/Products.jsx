import React, { useState, useEffect, useContext } from "react";
import AddProduct from "../components/AddProduct.jsx";
import SideBar from "../components/sideBar.jsx";
import pfp from '../assets/p3.jpeg'
// import UpdateProduct from "../components/UpdateProduct";


function Inventory() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState([]);
  const [products, setAllProducts] = useState([
    {
      "ProductName": "Apple",
      "ProductId": 1,
      "ProductCategory": "Fruits",
      "ExpiryDate": "2024-05-15",
      "price": 1.25,
      "quantity": 100
    },
    {
      "ProductName": "Milk",
      "ProductId": 2,
      "ProductCategory": "Dairy",
      "ExpiryDate": "2024-05-10",
      "price": 2.5,
      "quantity": 50
    },
    {
      "ProductName": "Bread",
      "ProductId": 3,
      "ProductCategory": "Bakery",
      "ExpiryDate": "2024-05-05",
      "price": 1.0,
      "quantity": 75
    },
    {
      "ProductName": "Chicken",
      "ProductId": 4,
      "ProductCategory": "Meat",
      "ExpiryDate": "2024-05-08",
      "price": 5.0,
      "quantity": 30
    },
    {
      "ProductName": "Water",
      "ProductId": 5,
      "ProductCategory": "Beverages",
      "ExpiryDate": "2025-01-01",
      "price": 0.75,
      "quantity": 200
    }
    ,
    {
      "ProductName": "Water",
      "ProductId": 5,
      "ProductCategory": "Beverages",
      "ExpiryDate": "2025-01-01",
      "price": 0.75,
      "quantity": 200
    }
  ]
  );
  const [searchTerm, setSearchTerm] = useState();
  const [updatePage, setUpdatePage] = useState(true);
  const [stores, setAllStores] = useState([]);

  
  

  // useEffect(() => {
  //   fetchProductsData();
  //   fetchSalesData();
  // }, [updatePage]);

  
  const fetchProductsData = () => {
    fetch(`http://localhost:3005/product/`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  
  


 
  
  // const addProductModalSetting = () => {
  //   setShowProductModal(!showProductModal);
  // };

  
  // const updateProductModalSetting = (selectedProductData) => {
  //   console.log("Clicked: edit");
  //   setUpdateProduct(selectedProductData);
  //   setShowUpdateModal(!showUpdateModal);
  // };


  
  // const deleteItem = (id) => {
  //   console.log("Product ID: ", id);
  //   console.log(`http://localhost:4000/api/product/delete/${id}`);
  //   fetch(`http://localhost:4000/api/product/delete/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUpdatePage(!updatePage);
  //     });
  // };

  
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  
 
  return (
    <>
    <SideBar />
    <div className="col-span-12 lg:col-span-10  flex justify-end">
      <div className=" flex flex-col gap-5 w-10/12 mr-3 ">
        <div className="bg-white rounded p-3 shadow dark:bg-gray-800 dark:text-white mt-10 ">
          <span className="font-semibold px-4">Overall Inventory</span>
          <div className=" flex flex-col md:flex-row justify-center items-center  ">
            <div className="flex flex-col p-10  w-full  md:w-3/12  ">
              <span className="font-semibold text-blue-600 text-base">
                Total Products
              </span>
              <span className="font-semibold text-gray-600 dark:text-gray-300 text-base">
                {products.length}
              </span>
              <span className="font-thin text-gray-400 text-xs">
                Last 7 days
              </span>
            </div>
            <div className="flex flex-col gap-3 p-10   w-full  md:w-3/12 sm:border-y-2 dark:border-gray-600 md:border-x-2 md:border-y-0">
              <span className="font-semibold text-yellow-600 text-base">
                Stores
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600 text-base dark:text-gray-300">
                    {stores.length}
                  </span>
                  <span className="font-thin text-gray-400 text-xs">
                    Last 7 days
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600 text-base dark:text-gray-300">
                    $2000
                  </span>
                  <span className="font-thin text-gray-400 text-xs">
                    Revenue
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-10  w-full  md:w-3/12  sm:border-y-2 dark:border-gray-600md:border-x-2 md:border-y-0">
              <span className="font-semibold text-purple-600 text-base">
                Top Selling
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600 text-base dark:text-gray-300">
                    5
                  </span>
                  <span className="font-thin text-gray-400 text-xs">
                    Last 7 days
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600 text-base dark:text-gray-300">
                    $1500
                  </span>
                  <span className="font-thin text-gray-400 text-xs">Cost</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-10  w-full  md:w-3/12  border-l-2 dark:border-gray-600 mddark:border-gray-600:border-x-2 md:border-y-0">
              <span className="font-semibold text-red-600 text-base">
                Low Stocks
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600 text-base dark:text-gray-300">
                    12
                  </span>
                  <span className="font-thin text-gray-400 text-xs">
                    Ordered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600 text-base dark:text-gray-300">
                    2
                  </span>
                  <span className="font-thin text-gray-400 text-xs">
                    Not in Stock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* Table  */}
        <div className="overflow-auto h-custom rounded-lg border bg-white dark:border-transparent border-gray-200 dark:bg-gray-800 dark:text-gray-300 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold">Products</span>
              <div className="flex justify-center items-center px-2 border-2 rounded-md ">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>

                <input
                  className="border-none outline-none dark:text-gray-300 dark:bg-transparent  focus:border-transparent text-xs"
                  type="text"
                  placeholder="Search here"
                  
                  
                />
              </div>
            </div>
            <div className="flex gap-4">
             <AddProduct/>
            </div>
          </div>
          <table className="min-w-full divide-y-2  divide-gray-200 dark:divide-gray-800 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"/>
                </svg>

                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Products
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Category
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Date of expiry
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-300 ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
              {products.map((element, index) => {
                return (
                  <tr key={element._id}>
                    <td className="whitespace-nowrap px-4 py-2  text-gray-900">
                    <img className="w-10 h-10 rounded mt-2 mr-2" src={pfp} alt="Rounded avatar"/>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400 ">
                      {element.ProductName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.ProductCategory}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.quantity}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
                      {element.ExpiryDate}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-bold dark:text-gray-400">
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

export default Inventory;
