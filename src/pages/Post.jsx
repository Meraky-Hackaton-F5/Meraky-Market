import { useLoaderData } from 'react-router-dom'

const Post = () => {
    const { post } = useLoaderData()

    return (
        <>
            <h1>
             {post.title}
            </h1>
            <p>{post.time}. {post.body} {post.location} {post.userName} {post.img} </p>
        </>
    );
};

export default Post;

