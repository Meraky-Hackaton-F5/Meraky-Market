import "./Post.css"
import { useLoaderData } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Location from '../assets/location.png';
import Time from '../assets/time.png';

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div className="container-ads d-flex">
      <img className="img-fluid p-5" src={post.img} id="img-ad" alt="imagen" />
      <div className="ads p-5">
        <h1>{post.title}</h1>
        <div className="ad-title d-flex justify-content-between">
          <h3><img src={Location} id="logo-location"/>{post.location}</h3>
          <h5><img src={Time} id="logo-location"/>{post.time}</h5>
          </div>
          <div>
          <h5 className="description">{post.description}</h5>
          
          </div>
          <h5 className="user">{post.user}</h5>
        
        <p style={{lineHeight: 1}}>{post.body}</p>
        <div className="ads-user">
            <img className="rounded-circle" src={post.user} alt="" />
          <h6> {post.userName}</h6>
        </div>
      <ContactForm />
      </div>
    </div>
  );
};

export default Post;
// import "./Product.css";
// import { useLoaderData } from "react-router-dom";


// function ProductInfo() {

//     const { product } = useLoaderData();
//     let {title, body, time} = product;

//     return (
//         <div className="productCard">
//             <div className="productCard--info">
//                 <h1>{title}</h1>
//                 <p>{body}</p>
//                 <p>time: {time}</p>
//             </div>
//         </div>
//     )
// }

// export default ProductInfo