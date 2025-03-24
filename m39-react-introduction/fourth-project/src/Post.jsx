export default function Post({ post }) {
    // console.log(post);
    return (
        <div className="post-style">
            <h5>Title : {post.title}</h5>
            <p>Body : {post.body}</p>
        </div>
    )
}