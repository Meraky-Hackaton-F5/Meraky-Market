import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Card.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../../api/db.json'

function Cards() {
  const data = db.products;

  return (
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
              {/* <Link to={`/advertisement/${advertisement.id}`}>
                        <img src={advertisement.img} alt="imagen" />
                        <h1>{advertisement.title}</h1>
                        <h4>{advertisement.location}</h4>
                        
                    </Link> */}

<Button variant="primary">Go somewhere</Button>
              
            </Card.Body>
          </div>
        )
      })}
    </Card>
  );
}

export default Cards;