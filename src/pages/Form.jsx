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
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Título</label>
            <input name="title" type="text" onChange={handleTitleChange} />
            <label htmlFor="time">Tiempo</label>
            <input name="time" type="text" onChange={handleTimeChange}/>
            <label htmlFor="description">Description</label>
            <input name="description" type="text" onChange={handleDescriptionChange} />
            <label htmlFor="user">Usuario</label>
            <input name="user" type="text" onChange={handleUserChange} />
            <label htmlFor="location">Localización</label>
            <input name="location" type="text" onChange={handleLocationChange} />
            <label htmlFor="img">Imagen</label>
            <input name="img" type="image" onChange={handleImgChange} />
            
            <button type="submit">
                Upload
            </button>
        </form>
    );
};

export default CreateProduct;