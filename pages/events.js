import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const filterById = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=1`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?id=1", undefined, { shallow: true });
  };

  return (
    <div className={styles.main}>
      <button className="btn btn-primary" onClick={filterById}>
        Filter by ID
      </button>
      <div>
        <h1>List of Events</h1>
        {events.map((events) => (
          <h2 key={events.id}>
            {events.id} | {events.title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { id } = query;
  const queryString = id ? "id=1" : "";
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${queryString}`
  );
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
