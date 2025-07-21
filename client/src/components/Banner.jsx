import React from "react";

const Banner = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/banner.jpg')]">
      <div>
        <div className="max-w-7xl mx-auto px-5 lg:px-0 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Plan Your Events Effortlessly
            </h1>
            <p className="mb-6 text-lg">
              Organize your schedule with automatic categorization and fast
              tracking.
            </p>
            <a
              href="#createEvent"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition"
            >
              Create Event
            </a>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
