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
        <Link className="link" href="/blog">
          Blog page
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/about">
          About
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/users">
          Next JS Pre-rendering
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/posts">
          Go to Posts (Static Generation)
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/news">
          Go to Posts (Server Side Rendering)
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/dashboard">
          Go to Dashboard (Client-side Data Fetching)
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/dashboard-swr">
          Go to Dashboard (Client-side Data Fetching with SWR library)
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/events">
          Events (Pre rendering + Client side Data Fetching)
        </Link>
      </h2>
      <h2>
        <Link className="link" href="/comments">
          Comments (Fetched from locally built comments API)
        </Link>
      </h2>
      <button className="btn btn-primary" onClick={handleClick}>
        Click to Place Order
      </button>
    </div>
  );
}
