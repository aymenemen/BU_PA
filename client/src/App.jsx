
import Login from "./components/Auth"
import Suppliers from "./scenes/Supplier"
import SideBar from "./components/sideBar"  
import StockTable from "./components/widgets/stockTable"
import Dashboard from "./scenes/Dashboard"
import Inventory from "./scenes/Products.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PurchaseDetails from "./scenes/Purchase.jsx"
import Store from "./scenes/Store.jsx"



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Inventory />} />
        <Route path="/purchase" element={<PurchaseDetails />} />
        <Route path="/supplier" element={<Store />} />
        <Route path="/test" element={<StockTable />} />
        
          
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
