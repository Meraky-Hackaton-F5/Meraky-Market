import { Link, useLoaderData } from 'react-router-dom'

const Advertisement = () => { 
    const {posts} = useLoaderData();
    console.log (posts)

    return (
        
        <ul className="Products">
            {posts.length > 0 ? (
                posts.map((advertisement) => (
                  <li key={advertisement.id}>
                    <Link to={`/advertisement/${advertisement.id}`}>
                        {advertisement.id} - {advertisement.title} - {advertisement.time} - {advertisement.body} - {advertisement.userName} - {advertisement.location} - {advertisement.img} 
                    </Link>
                  </li>  
                ))
            ) : (
                <li>No product found</li>
            )}
        </ul>
    );
 };
 export default Advertisement;


