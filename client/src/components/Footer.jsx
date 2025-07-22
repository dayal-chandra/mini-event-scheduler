import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-orange-400 text-white mt-16">
        <div className="max-w-7xl mx-auto px-5  py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} EventFlow. All rights reserved.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/all-events" className="hover:underline">
              All Events
            </Link>
            <Link to="/archived" className="hover:underline">
              Archived
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
