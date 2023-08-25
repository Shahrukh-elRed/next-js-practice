import styles from "@/styles/Home.module.css";

const Post = ({ post, articleId }) => {
  return (
    <div className={styles.main}>
      <h1>
        Showing news for postId <i>{articleId}</i>
      </h1>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
      <hr />
    </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log("query", query);
  console.log("req", req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Shahrukh"]);
  const { articleId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
      articleId,
    },
  };
}
