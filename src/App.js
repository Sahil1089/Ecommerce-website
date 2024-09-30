import logo from './logo.svg';
import './App.css';
import { Outlet, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Pagenotfound from './pages/Pagenotfound';
import Shophome from './pages/shoppingview/Shophome';
import Listing from './pages/shoppingview/Listing';
import Checkout from './pages/shoppingview/Checkout';
import Account from './pages/shoppingview/Account';
import ShopLayout from './layouts/shoppinglaout/ShopLayout';
import AdminLayout from './layouts/adminlay/AdminLayout';
import AdminDashboard from './pages/Adminview/Dashboard';
import Products from './pages/Adminview/Products';
import Features from './pages/Adminview/Features';
import Order from './pages/Adminview/Order';
// import Verifyauth from './component/common/Verifyauth';





function App() {
  const isAuthenticated = true
  const user={
    name:"sahil",
    role:'user'
  }
  return (
    <>
    <Routes>
      
      {/* <Route path='/' element={<Shophome/>}></Route> */}
      <Route path='login' element={
      
          <Login/>
        }>
        </Route>




      <Route path='/' element={
          <ShopLayout/>
        }>
        <Route path='home' element={<Shophome/>}/>
        <Route path='listing' element={<Listing/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Route>

    <Route path='/admin' element={<AdminLayout/>}>
      <Route path='dashboard' element={<AdminDashboard/>}/>
      <Route path='product' element={<Products/>}/>
      <Route path='feature' element={<Features/>}/>
      <Route path='order' element={<Order/>}/>


    </Route>

     

      
      
    
      

    </Routes>

    
    

    
    </>
  );
}

export default App;
