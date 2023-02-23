import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../../api/db.json';

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
      <input
        type="text"
        placeholder="Busqueda Meraky"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Card style={{ width: '18rem' }}>
        {data.map(product => {
          return (
            <div key={product.id}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.location}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>
          )
        })}
      </Card>
    </>
  );
}

export default Cards;
