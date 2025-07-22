import React, { useEffect, useState } from "react";
import axios from "axios";

const Archived = () => {
  useEffect(() => {
    document.title = "EventFlow | Archived";
  }, []);

  const [archivedEvents, setArchivedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArchivedEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/events");
      const archived = res.data.filter((ev) => ev.archived);
      setArchivedEvents(archived);
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArchivedEvents();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold my-8 text-center ">Archived Events</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : archivedEvents.length === 0 ? (
        <p className="text-center text-gray-500">No archived events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {archivedEvents.map((event) => (
            <div
              key={event._id || event.id}
              className="rounded-xl p-6 bg-[#f3f3f3] text-gray-800 shadow-inner"
              style={{
                boxShadow:
                  "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                {event.title}
              </h3>
              <p>
                <strong className="text-gray-600">Date:</strong> {event.date}
              </p>
              <p>
                <strong className="text-gray-600">Time:</strong> {event.time}
              </p>
              {event.notes && (
                <p className="mt-2 text-gray-700 italic">{event.notes}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Archived;
