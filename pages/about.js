import styles from "../styles/About.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.border}>
      <h1>About Page</h1>
      <Link className="link" href="/">
        Home
      </Link>
    </div>
  );
};

export default About;
