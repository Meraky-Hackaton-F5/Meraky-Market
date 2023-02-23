import "./Post.css"
import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div className="container-ads d-flex text">
      <img className="img-fluid p-5" src={post.img} id="img-ad" alt="imagen" />
      <div className="ads p-5">
        <h1>{post.title}</h1>
        <div className="ad-title d-flex justify-content-between">
          <h3>{post.location}</h3>
          <h5>{post.time}</h5>
          </div>
          <div>
          <h5>{post.description}</h5>
          
          </div>
          <h5>{post.user}</h5>
        
        <p style={{lineHeight: 1}}>{post.body}</p>
        <div className="ads-user">
            <img className="rounded-circle" src={post.user} alt="" />
          <h6> {post.userName}</h6>
        </div>
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