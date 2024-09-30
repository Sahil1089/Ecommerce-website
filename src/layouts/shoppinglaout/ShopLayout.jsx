import React from 'react'
// import { Outlet } from 'react-router-dom'
import Header from '../../component/Header'
import { Outlet } from 'react-router-dom'
import Categories from '../../component/Categories'

function ShopLayout() {
  return (
   <>

    <Header/>
    <Categories/>
   <div className="wrapper">

   <Outlet/>

   </div>
   
   
   
   
   
   
   </>
  )
}

export default ShopLayout