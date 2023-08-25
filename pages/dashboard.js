import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (isLoading) return <h2 className={styles.main}>Loading...</h2>;

  return (
    <div className={styles.main}>
      <h2>Dashboard</h2>
      <h3>Posts</h3>
      <div>
        {dashboardData.map((post) => (
          <p key={post.id}>
            {post.id} {post.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
