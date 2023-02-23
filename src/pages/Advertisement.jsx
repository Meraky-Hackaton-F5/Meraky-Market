import { Link, useLoaderData } from 'react-router-dom'
import Searchbar from '../components/SearchBar/Searchbar';
import Cards from '../components/Card'
import './Advertisement.css'
const Advertisement = () => { 
    const {posts} = useLoaderData();
    

    return (
        <>
        <div className='container-cards'>
        <Searchbar />
        
        
        <Cards />

        </div>
        {/* <ul className="Products">
            {posts.length > 0 ? (
                posts.map((advertisement) => (
                  <li key={advertisement.id}>
                    <Link to={`/advertisement/${advertisement.id}`}>
                        <img src={advertisement.img} alt="imagen" />
                        <h1>{advertisement.title}</h1>
                        <h4>{advertisement.location}</h4>
                        
                    </Link>
                  </li>  
                ))
            ) : (
                <li>No service found</li>
            )}
        </ul> */}
        </>
    );
 };
 export default Advertisement;


