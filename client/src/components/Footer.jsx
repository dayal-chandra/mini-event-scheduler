import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-orange-400 text-white mt-16">
        <div className="max-w-7xl mx-auto px-5  py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} EventFlow. All rights reserved.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0 text-sm">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#create" className="hover:underline">
              Create Event
            </a>
            <a href="#events" className="hover:underline">
              All Events
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
