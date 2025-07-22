import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AllEvent = () => {
  useEffect(() => {
    document.title = "EventFlow | All Events";
  }, []);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editEvent, setEditEvent] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    date: "",
    time: "",
    notes: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

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

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This event will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/events/${id}`);
        Swal.fire("Deleted!", "The event has been deleted.", "success");
        fetchEvents();
      } catch (err) {
        console.error("Delete failed:", err);
        Swal.fire("Error", "Could not delete event.", "error");
      }
    }
  };

  const handleArchive = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/events/${id}/archive`);
      Swal.fire("Archive action!", "Archive status updated.", "info");
      fetchEvents();
    } catch (err) {
      console.error("Archive failed:", err);
      Swal.fire("Error", "Could not archive event.", "error");
    }
  };

  const openEditModal = (event) => {
    setEditEvent(event);
    setEditData({
      title: event.title,
      date: event.date,
      time: event.time,
      notes: event.notes || "",
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/events/${editEvent.id}`, editData);
      Swal.fire("Updated!", "Event updated successfully!", "success");
      setEditEvent(null);
      fetchEvents();
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Error", "Could not update event.", "error");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold my-8 text-center">All Events</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl p-6 bg-[#f3f3f3] text-gray-800 shadow-inner flex flex-col justify-between"
              style={{
                boxShadow:
                  "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
                minHeight: "260px",
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

                <p className="mt-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      event.category === "Work"
                        ? "bg-blue-100 text-blue-700"
                        : event.category === "Personal"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {event.category}
                  </span>
                </p>
              </div>

              <div className="mt-6 mr-5 flex gap-3">
                <button
                  onClick={() => openEditModal(event)}
                  className="px-4 py-1 text-sm rounded-xl bg-orange-400 hover:bg-orange-500 text-white shadow"
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-4 py-1 text-sm rounded-xl bg-red-400 hover:bg-red-500 text-white shadow"
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  Delete
                </button>
                {/* <button
                  onClick={() => handleArchive(event.id)}
                  className="px-4 py-1 text-sm rounded-xl bg-gray-400 hover:bg-gray-500 text-white shadow"
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  Archive
                </button> */}

                <button
                  onClick={() => handleArchive(event.id)}
                  className={`px-4 py-1 text-sm rounded-xl ${
                    event.archived
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-gray-400 hover:bg-gray-500"
                  } text-white shadow`}
                  style={{
                    boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
                  }}
                >
                  {event.archived ? "Unarchive" : "Archive"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl max-w-md w-full space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">
              Edit Event
            </h3>

            <input
              type="text"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
              className="w-full px-4 py-2 rounded-xl bg-[#f3f3f3] shadow-inner"
              placeholder="Event Title"
            />

            <input
              type="date"
              value={editData.date}
              onChange={(e) =>
                setEditData({ ...editData, date: e.target.value })
              }
              className="w-full px-4 py-2 rounded-xl bg-[#f3f3f3] shadow-inner"
            />

            <input
              type="time"
              value={editData.time}
              onChange={(e) =>
                setEditData({ ...editData, time: e.target.value })
              }
              className="w-full px-4 py-2 rounded-xl bg-[#f3f3f3] shadow-inner"
            />

            <textarea
              value={editData.notes}
              onChange={(e) =>
                setEditData({ ...editData, notes: e.target.value })
              }
              className="w-full px-4 py-2 rounded-xl bg-[#f3f3f3] shadow-inner"
              placeholder="Additional Notes"
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setEditEvent(null)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 rounded bg-orange-400 hover:bg-orange-500 text-white text-sm"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllEvent;
