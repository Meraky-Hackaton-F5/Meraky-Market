import { useLoaderData } from "react-router-dom"

function EditService() {
    const { service } = useLoaderData();

    return(
        <h1>estás editandoo el servicio: {service.title}</h1>
    )
}

export default EditService;
