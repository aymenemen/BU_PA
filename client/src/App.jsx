import Login from "./components/Auth"
import Dashboard from "./scenes/Dashboard"
import Inventory from "./scenes/Products.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Store from "./scenes/Supplier.jsx"
import SalesDetails from "./scenes/Sale.jsx"
import OrdersDetails from "./scenes/orders.jsx"
import Modal from "./components/AddProduct.jsx"



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Inventory />} />
        <Route path="/Sales" element={<SalesDetails />} />
        <Route path="/supplier" element={<Store />} />
        <Route path="/order" element={<OrdersDetails />} />
        <Route path="/test" element={<Modal />} />
        
          
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
