import styles from "@/styles/Home.module.css";
import Link from "next/link";

const PostsList = ({ posts }) => {
  return (
    <div className={styles.main}>
      <h1>Posts List</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Link className="link" href={`/posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
              <hr />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
    revalidate: 10,
  };
}
