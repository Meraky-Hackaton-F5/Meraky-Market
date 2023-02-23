import "./Form.css"

import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState(null);
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };

    const handleTimeChange = (event) => {
        let timeInput = event.target.value;
        setTime(timeInput);
    };

    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
 
    const handleUserChange = (event) => {
        let userInput = event.target.value;
        setUser(userInput);
    };

    const handleLocationChange = (event) => {
        let locationInput = event.target.value;
        setLocation(locationInput);
    };

    const handleImgChange = (event) => {
        let imgInput = event.target.value;
        setImg(imgInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {title, description, time, user, location, img};
        productHandler.addProduct(newProduct);
        event.target.reset()
    };



    return (
        

        <form onSubmit={handleSubmit} itemID="form1">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Título</label>
    <input name="title" type="text" className="form-control" onChange={handleTitleChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="time" className="form-label">Tiempo</label>
    <input name="time" type="text" className="form-control" onChange={handleTimeChange}/>
  </div>

  <div className="mb-3">
    <label className="form-label" htmlFor="description">Description</label>
    <input name="description" type="text" className="form-control" onChange={handleDescriptionChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="user" className="form-label">Usuario</label>
    <input name="user" type="text" className="form-control" onChange={handleUserChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="location" className="form-label">Localización</label>
    <input name="location" type="text" className="form-control" onChange={handleLocationChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="img" className="form-label">Imagen</label>
    <input name="img" type="file" className="form-control" onChange={handleImgChange} />
  </div>

  <button type="submit" className="btn btn-primary">Upload</button>
</form>
    );
};

export default CreateProduct;