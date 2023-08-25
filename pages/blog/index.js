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
        <h2>Public Key : {process.env.NEXT_PUBLIC_SOME_KEY}</h2>
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
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to DB with username ${user} and password ${password}`
  );

  return {
    props: {
      title: "Blogs",
      description: "description",
    },
  };
}
