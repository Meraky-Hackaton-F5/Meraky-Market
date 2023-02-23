import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css";
import "./SearchBarCard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../../api/db.json';
import { Link } from "react-router-dom";


function Cards() {
  const [searchQuery, setSearchQuery] = useState('');
  const data = db.products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  }

  return (
    <>
    <div className='container-bar'>
      <input className='searchStyle'
        type="text"
        placeholder="Busqueda Meraky"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      </div>
      <div className="cards">

        {data.map(product => {
          return (
             <div key={product.id} className="card" >
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.location}
                </Card.Text>
<Link to={`/advertisement/${product.id}`}>
 <Button  className="btn-ad">Quiero saber más</Button>
</Link>
              </Card.Body>
            </div>
          )
        })}
        </div>
    </>
  );
}

export default Cards;
