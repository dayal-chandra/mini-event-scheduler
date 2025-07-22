import React from "react";
import Banner from "../components/Banner";
import CreateEvent from "../components/CreateEvent";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "EventFlow | Home";
  }, []);

  const onCreateEvent = async (newEvent) => {
    try {
      const res = await axios.post(
        "https://server-phi-six-59.vercel.app/events",
        newEvent
      );
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
