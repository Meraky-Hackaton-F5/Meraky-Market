import "./Home.css"
import Slide from '../components/Slide';
// import Card from '../components/Card';
import Trending from "../components/Trending";
const Home = () => {
    return (

<>

                <Slide/>
                <h1 className="title">Últimos anuncios</h1>

            <div className="anuncios">
                <Trending />
            </div>
         


                </>


    )
};
export default Home;
