import "./Post.css"
import { useLoaderData } from 'react-router-dom'

const Post = () => {
    const { post } = useLoaderData()

    return (
        <>
            <h1>
             {post.title}
            </h1>
            <p>{post.time}. {post.body} {post.location} {post.userName}  </p>
            <img src={post.img} alt="imagen"  />
        </>
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