import React from "react";
import { Link } from "react-router";

const LogoIcon = () => {
  return (
    <Link to="/" className="text-3xl font-bold ">
      Event<span className="text-orange-400">F</span>low
    </Link>
  );
};

export default LogoIcon;
