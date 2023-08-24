import styles from "@/styles/Home.module.css";
import Link from "next/link";

const BlogPage = ({ productId = 20 }) => {
  return (
    <div className={styles.main}>
      <h1>Blog Page</h1>
      <h2>
        <Link href="/">Home Page</Link>
      </h2>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>
      <h2>
        <Link href="/product/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href="/product/4">Product 4</Link>
      </h2>
    </div>
  );
};

export default BlogPage;
