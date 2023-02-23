import { Link, useLoaderData } from 'react-router-dom'
import Searchbar from '../components/SearchBar/Searchbar';

const Advertisement = () => { 
    const {posts} = useLoaderData();
    console.log (posts)

    return (
        <>
        <Searchbar />
        <ul className="Products">
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
                <li>No product found</li>
            )}
        </ul>
        </>
    );
 };
 export default Advertisement;


