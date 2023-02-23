import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import Cards from "../components/Card"
import Trending from "../components/TrendingCard/Trending";
import SearchbarCard from "../components/SearchbarCard"




import "./LayoutPublic.css"


const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>

        <SearchbarCard />
        <Slide/>
        <h1 className="title">Anuncios destacados</h1>
            <div className="anuncios">
                {/* <Trending /> */}
            </div>
            <div className="anuncios">
                
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
