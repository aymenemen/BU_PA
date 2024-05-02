import React, { useState, useEffect } from 'react';
import Chartc from '../components/widgets/chart';
import Lchart from '../components/widgets/Lchart';
import ProductList from '../components/widgets/ProductList';
import SideBar from '../components/sideBar';
import ClientList from '../components/widgets/ClientList';

const Dashboard = () => {
  const [saleAmount, setSaleAmount] = useState(80);
  const [purchaseAmount, setPurchaseAmount] = useState(75);
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState(88);

  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Sales Amount",
        data: [10, 20, 40, 50, 60, 20, 10, 35, 45, 70, 25, 70],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#C13C37",
          "#6A2135",
          "#FF9800",
          "#9C27B0",
          "#4CAF50",
          "#FF5722",
          "#00BCD4",
          "#795548",
          "#607D8B",
        ],
      },
    ],
  });

  

  // useEffect(() => {
  //   fetchTotalSaleAmount();
  //   fetchTotalPurchaseAmount();
  //   fetchStoresData();
  //   fetchProductsData();
  //   fetchMonthlySalesData();
  // }, []);

  // Fetching total sales amount
  // const fetchTotalSaleAmount = () => {
  //   fetch(
  //     `http://localhost:4000/api/sales/get/${user}/totalsaleamount`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setSaleAmount(data.totalSaleAmount));
  // };

  // // Fetching total purchase amount
  // const fetchTotalPurchaseAmount = () => {
  //   fetch(
  //     `http://localhost:4000/api/purchase/get/${user}/totalpurchaseamount`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPurchaseAmount(data.totalPurchaseAmount));
  // };

  // // Fetching all stores data
  // const fetchStoresData = () => {
  //   fetch(`http://localhost:4000/api/store/get/${user}`)
  //     .then((response) => response.json())
  //     .then((data) => setStores(data));
  // };

  // // Fetching Data of All Products
  // const fetchProductsData = () => {
  //   fetch(`http://localhost:4000/api/product/get/${user}`)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err));
  // };

  // // Fetching Monthly Sales
  // const fetchMonthlySalesData = () => {
  //   fetch(`http://localhost:4000/api/sales/getmonthly`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const updatedData = [...chartData.datasets];
  //       updatedData[0].data = data.salesAmount;
  //       setChartData({
  //         ...chartData,
  //         datasets: updatedData,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  

  return (<>
    <SideBar/>  
    <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4 p-4 lg:ml-56 md:ml-12 sm:ml-10">
    
  <article className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
    <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>

      <span className="text-xs font-medium">67.81%</span>
    </div>

    <div>
      <strong className="block text-sm font-medium text-gray-500">
        Sales
      </strong>

      <p>
        <span className="text-2xl font-medium text-gray-900 dark:text-gray-300">
          ${saleAmount}
        </span>

        <span className="text-xs text-gray-500"> from $240.94</span>
      </p>
    </div>
  </article>

  <article className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
    <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>

      <span className="text-xs font-medium">67.81%</span>
    </div>

    <div>
      <strong className="block text-sm font-medium text-gray-500">
        Purchase
      </strong>

      <p>
        <span className="text-2xl font-medium text-gray-900 dark:text-gray-300">
          ${purchaseAmount}
        </span>

        <span className="text-xs text-gray-500"> from $404.32</span>
      </p>
    </div>
  </article>

  <article className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
    <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>

      <span className="text-xs font-medium">67.81%</span>
    </div>

    <div>
      <strong className="block text-sm font-medium text-gray-500">Products</strong>
      <ul className="divide-y divide-gray-200 dark:text-gray-300">
        {products}
      </ul>
    </div>
  </article>

  <article className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
    <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>

      <span className="text-xs font-medium">67.81%</span>
   </div>

    <div>
      <strong className="block text-sm font-medium text-gray-500">
        Suppliers
      </strong>
      <ul className="divide-y divide-gray-200">
        {stores.map((store, index) => (
          <li key={index} className="py-2">
            {store}
          </li>
        ))}
      </ul>
    </div>
  </article>
  <div className='w-screen flex -mt-10'>
    <div className="flex bg-transparent rounded-lg py-8 col-span-full lg:w-2/4">
      <div className="w-1/2">
        <Chartc  />
      </div>
      <div className="w-1/2">
        <Lchart />
      </div>
    </div>
    <div className="ml-2 w-4/12 flex-col">
      <ProductList className="h-1/2 mt-8  rounded-lg overflow-auto" />

      
      <ClientList className="h-auto mt-2 overflow-auto rounded-lg"/>
    </div>
  </div>
</div>
    </>
  );
};

export default Dashboard;