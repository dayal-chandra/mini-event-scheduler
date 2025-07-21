const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

let events = [];

function categorizeEvent(title = "", notes = "") {
  const workKeywords = ["meeting", "client", "project"];
  const personalKeywords = ["birthday", "family", "party"];

  const content = `${title} ${notes}`.toLowerCase();

  if (workKeywords.some((word) => content.includes(word))) return "Work";
  if (personalKeywords.some((word) => content.includes(word)))
    return "Personal";
  return "Other";
}

// Routes
app.get("/events", (req, res) => {
  const sortedEvents = events.sort((a, b) => {
    const dateTimeA = new Date(`${a.date}T${a.time}`);
    const dateTimeB = new Date(`${b.date}T${b.time}`);
    return dateTimeA - dateTimeB;
  });
  res.json(sortedEvents);
});

app.post("/events", (req, res) => {
  const { title, date, time, notes } = req.body;

  if (!title || !date || !time) {
    return res
      .status(400)
      .json({ error: "Title, date, and time are required." });
  }

  const category = categorizeEvent(title, notes);
  const newEvent = {
    id: Date.now().toString(),
    title,
    date,
    time,
    notes: notes || "",
    category,
    archived: false,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.put("/events/:id", (req, res) => {
  const { id } = req.params;
  const event = events.find((ev) => ev.id === id);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  event.archived = true;
  res.json(event);
});

app.delete("/events/:id", (req, res) => {
  const { id } = req.params;
  const index = events.findIndex((ev) => ev.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Event not found" });
  }

  events.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
