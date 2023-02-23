import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Card.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../../api/db.json'
import { Link } from 'react-router-dom';


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
              {

                    <Link to={`/advertisement/${product.id}`}>
 <Button variant="primary">Quiero saber más</Button>
</Link>}


              
            </Card.Body>
          </div>
        )
      })}
    </Card>
  );
}

export default Cards;