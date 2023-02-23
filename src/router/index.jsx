import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';
import Form from '../pages/Form';
import Advertisement from '../pages/Advertisement';
import Post from '../pages/Post';
import NotFound from "../pages/NotFound";
import EditService from "../pages/EditService";
import Navbar from "../components/Navbar";
import Cards from "../components/Card";


export const router = createBrowserRouter([
    { 
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />, 
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element:<Home />, 
                    },
                    {
                        path: '/form',
                        element: <Form />,
                    },
                    {
                        path: '/advertisement',
                        element: <Advertisement />,
                        loader: loaderAdvertisement,
                    },    
                    {
                        path: '/advertisement/:id',
                        element: <Post />,
                        loader: loaderPost
                    }, 
                    {
                        path: '/editadvertisement/:id',
                        element: <EditService />,
                        loader: loaderPost
                    }, 
                   
                ]
            },
         
        ]
    },   
]);

async function loaderPost  ({ params })  {
    const post = await productHandler.loadProduct(params.id)  
    return { post };
};

async function loaderAdvertisement () {
 const posts = await productHandler.loadProducts()
    console.log (posts)
    return { posts };
 };

