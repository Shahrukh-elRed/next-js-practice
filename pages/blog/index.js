import Header from "@/components/Header";
import styles from "../../styles/Blog.module.scss";
import Link from "next/link";
import Head from "next/head";

const BlogPage = ({ productId = 20, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.border}>
        <h1>Blog Page</h1>
        <h2>
          <Link className="link" href="/">
            Home Page
          </Link>
        </h2>
        <h2>
          <Link className="link" href="/product/1">
            Product 1
          </Link>
        </h2>
        <h2>
          <Link className="link" href={`/product/${productId}`}>
            Product {productId}
          </Link>
        </h2>
        <h2>
          <Link className="link" href="/product/3" replace>
            Product 3
          </Link>
        </h2>
        <h2>
          <Link className="link" href="/product/4">
            Product 4
          </Link>
        </h2>
      </div>
    </>
  );
};

export default BlogPage;

BlogPage.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      title: "Blogs",
      description: "description",
    },
  };
}
