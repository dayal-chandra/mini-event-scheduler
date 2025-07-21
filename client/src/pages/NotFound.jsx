import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-5 text-center">
      <h1 className="text-7xl font-bold text-orange-400 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-700">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link
        to="/"
        className="bg-orange-400 text-white px-5 py-2 rounded hover:bg-orange-500 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
