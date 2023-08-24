import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2)
    return (
      <h1 className={styles.main}>
        Viewing Docs for {params[0]} and concept {params[1]}
      </h1>
    );
  else if (params.length === 1)
    return (
      <h1 className={styles.main}>Viewing Docs for feature {params[0]}</h1>
    );
  return <h1 className={styles.main}>Docs Page</h1>;
};

export default ProductList;
