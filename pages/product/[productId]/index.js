import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();
  const id = router.query.productId;
  return <h1 className={styles.main}>Product {id}</h1>;
};

export default ProductList;
