import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product/22");
  };

  return (
    <div className={styles.main}>
      <h1>First Page</h1>
      <h2>
        <Link href="/blog">About</Link>
      </h2>
      <button onClick={handleClick}>Click to Place Order</button>
    </div>
  );
}
