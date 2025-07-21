import React from "react";
import Banner from "../components/Banner";
import CreateEvent from "../components/CreateEvent";
import axios from "axios";

const Home = () => {
  const onCreateEvent = async (newEvent) => {
    try {
      const res = await axios.post("http://localhost:5000/events", newEvent);
      console.log("Event created:", res.data);
    } catch (err) {
      console.error("Error creating event:", err);
    }
  };

  return (
    <div>
      <Banner></Banner>
      <CreateEvent onCreateEvent={onCreateEvent}></CreateEvent>
    </div>
  );
};

export default Home;
