import styles from "@/styles/Home.module.css";
import { getSession } from "next-auth/react";

const Articles = ({ data }) => {
  return <h1 className={styles.main}>Articles - {data}</h1>;
};

export default Articles;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      data: session
        ? "List of 100 personalised Articles"
        : "List of Free Articles",
    },
  };
}
