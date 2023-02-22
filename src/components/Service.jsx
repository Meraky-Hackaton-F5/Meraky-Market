import "./Service.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function Service({ service }) {

    const { title, price } = service;

    return (
        <div className="productCard">
            <div className="productCard--info">
                <h1>{title}</h1>
                <p>time: {time}$</p>
            </div>
            <div className="productCard--buttons">
                <DeleteIcon fontSize="large" />
                <Link className="edit--link" to={`/editadvertisement/${service.id}`}>
                    <EditIcon fontSize="large" color="inherit" />
                </Link>
            </div>
        </div>
    )
}

export default Service
