import "./Home.css"
import Slide from '../components/Slide';
import Card from '../components/Card';
const Home = () => {
    return (

<>
                <Slide/>
                <h1 className="title">Anuncios destacados</h1>
            <div className="anuncios">
                <Card/> 
            </div>
            <div className="anuncios">
              
            </div>


                </>


    )
};
export default Home;
