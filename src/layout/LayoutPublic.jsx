import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import Cards from "../components/Card"




import "./LayoutPublic.css"


const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
        <Slide/>
        <h1 className="title">Anuncios destacados</h1>
            <div className="anuncios">
                <Cards/> <Cards/> <Cards/>
            </div>
            <div className="anuncios">
                <Cards/> <Cards/> <Cards/>
            </div>
            <Navbar />

           
           <main className="container">
           
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}  
                <Outlet />
            </main> 
           
             <Footer/>
                 
        </>
    );
};

export default LayoutPublic;
