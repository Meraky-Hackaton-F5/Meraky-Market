import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../../../api/db.json'

function Trending() {
    const data = db.products;
  
    const randomIndex = Math.floor(Math.random() * (data.length - 3)); 
    const resultTrending = data.slice(randomIndex, randomIndex + 3); 
  
    return (
      <Card style={{ width: '18rem' }}>
        {resultTrending.map(product => {
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
    );
  }
  
  export default Trending;
  