import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Card.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import perros from "../assets/perros.png"

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={perros} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Leer más</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;

