import React from 'react'
import Cards from "../components/Card"

const FeaturedAd = () => {
  return (
    <>
<h1 className="title">Anuncios destacados</h1>
            <div className="anuncios">
                <Cards/> <Cards/> <Cards/>
            </div>
            <div className="anuncios">
                <Cards/> <Cards/> <Cards/>
            </div>

           
           <main className="container">
           
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}  
                <Outlet />
            </main> 
            </>
             )
}

export default FeaturedAd