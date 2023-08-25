import styles from "@/styles/Home.module.css";
import Link from "next/link";

const NewsArticleList = ({ articles }) => {
  return (
    <div className={styles.main}>
      <h1>List of News Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <Link className="link" href={`/news/${article.id}`}>
            <h2>
              {article.id} {article.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      articles: data.slice(0, 3),
    },
  };
}
