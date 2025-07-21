import React, { useEffect, useState } from "react";
import axios from "axios";

const AllEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold my-8 text-center">All Events</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            // <div
            //   key={event._id || event.id}
            //   className="rounded-xl p-6 bg-[#f3f3f3] text-gray-800 shadow-inner"
            //   style={{
            //     boxShadow:
            //       "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
            //   }}
            // >
            //   <h3 className="text-xl font-semibold mb-2 text-orange-500">
            //     {event.title}
            //   </h3>
            //   <p className="mb-1">
            //     <strong className="text-gray-600">Date:</strong> {event.date}
            //   </p>
            //   <p className="mb-1">
            //     <strong className="text-gray-600">Time:</strong> {event.time}
            //   </p>
            //   {event.notes && (
            //     <p className="mt-2 text-gray-700 italic">{event.notes}</p>
            //   )}

            //   <div className="mt-4 flex gap-3">
            //     <button
            //       className="px-4 py-1 text-sm rounded-xl bg-orange-400 hover:bg-orange-500 text-white shadow"
            //       style={{
            //         boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
            //       }}
            //     >
            //       Edit
            //     </button>
            //     <button
            //       className="px-4 py-1 text-sm rounded-xl bg-red-400 hover:bg-red-500 text-white shadow"
            //       style={{
            //         boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
            //       }}
            //     >
            //       Delete
            //     </button>
            //   </div>
            // </div>

            <div
              key={event._id || event.id}
              className="rounded-xl p-6 bg-[#f3f3f3] text-gray-800 shadow-inner flex flex-col justify-between"
              style={{
                boxShadow:
                  "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
                minHeight: "260px", // or any height you prefer
              }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-orange-500">
                  {event.title}
                </h3>
                <p className="mb-1">
                  <strong className="text-gray-600">Date:</strong> {event.date}
                </p>
                <p className="mb-1">
                  <strong className="text-gray-600">Time:</strong> {event.time}
                </p>
                {event.notes && (
                  <p className="mt-2 text-gray-700 italic">{event.notes}</p>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  className="px-4 py-1 text-sm rounded-xl bg-orange-400 hover:bg-orange-500 text-white shadow"
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-1 text-sm rounded-xl bg-red-400 hover:bg-red-500 text-white shadow"
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-1 text-sm rounded-xl bg-gray-400 hover:bg-gray-500 text-white shadow"
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  Archive
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllEvent;
