import User from "@/components/user";
import styles from "@/styles/Home.module.css";

const Users = ({ users }) => {
  return (
    <div className={styles.main}>
      <h1>List of Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
