import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateEvent = ({ onCreateEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!date) {
      setError("Date is required.");
      return;
    }
    if (!time) {
      setError("Time is required.");
      return;
    }

    setError("");

    const newEvent = {
      title: title.trim(),
      date,
      time,
      notes: notes.trim(),
    };

    onCreateEvent(newEvent);

    Swal.fire({
      title: "Success!",
      text: "Your event has been created successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setTitle("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <section
      id="createEvent"
      className="max-w-3xl mx-auto px-5 my-16 bg-[#f3f3f3] rounded-2xl shadow-inner"
    >
      <h2 className="text-3xl font-semibold py-8 text-center text-gray-800">
        Create New Event
      </h2>

      {error && (
        <p className="mb-4 text-red-600 font-semibold text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-gray-600 font-medium"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event title"
            className="w-full px-4 py-3 rounded-xl bg-[#f3f3f3] shadow-inner text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            style={{
              boxShadow:
                "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
            }}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-gray-600 font-medium"
            >
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#f3f3f3] shadow-inner text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
              style={{
                boxShadow:
                  "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
              }}
              min={new Date().toISOString().split("T")[0]}
              max="2099-12-31"
              required
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block mb-2 text-gray-600 font-medium"
            >
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#f3f3f3] shadow-inner text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
              style={{
                boxShadow:
                  "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
              }}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="block mb-2 text-gray-600 font-medium"
          >
            Notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Additional details about the event"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-[#f3f3f3] shadow-inner text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            style={{
              boxShadow:
                "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 mb-8 rounded-xl bg-[#f3f3f3] shadow-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          style={{
            boxShadow: "inset -4px 4px 8px #d1d1d1, inset 4px -4px 8px #ffffff",
          }}
        >
          Add Event
        </button>
      </form>
    </section>
  );
};

export default CreateEvent;
