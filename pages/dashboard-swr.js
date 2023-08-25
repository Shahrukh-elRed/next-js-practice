import styles from "@/styles/Home.module.css";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher); // "dashboard" is unique key id required by useSwr

  if (error) return "An error has occured!";

  if (!data) return "Loading...";

  return (
    <div className={styles.main}>
      <h2>Dashboard</h2>
      <h3>Posts</h3>
      <div>
        {data.map((post) => (
          <p key={post.id}>
            {post.id} {post.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DashboardSWR;
