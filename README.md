# EventFlow - (Mini Event Scheduler)

A simple full-stack event scheduling application built with React (React + Tailwind CSS) for the frontend and Node.js (JavaScript + Express) for the backend.  
Users can create, view, update, archive, and delete events with automatic AI-like categorization into **Work**, **Personal**, or **Other** based on keywords in the event's title and notes.

---

## Features

- Create, update, delete, and archive events
- Events have a **title**, **date**, **time**, **notes**, and a **category**
- **AI Categorization**: Automatically classifies events into categories based on keywords in the title and notes
- Responsive UI styled with Tailwind CSS
- Simple in-memory data storage (no database required)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm (comes with Node.js) or yarn

---

### Setup Backend (Server)

1. Navigate to the backend directory:
   ```bash
   cd server
   ```
