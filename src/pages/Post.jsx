import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div className="container-ads d-flex">
      <img className="img-fluid p-5" src={post.img} alt="imagen" />
      <div className="ads p-5">
        <h1>{post.title}</h1>
        <div className="ad-title d-flex justify-content-between">
          <h3>{post.location}</h3>
          <h5>{post.time}</h5>
        </div>
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
