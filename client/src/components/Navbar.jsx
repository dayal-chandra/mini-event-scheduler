import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import LogoIcon from "./LogoIcon";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-events">All Events</NavLink>
      </li>
      <li>
        <NavLink to="/archived">Archived</NavLink>
      </li>
    </>
  );

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    const appliedTheme = newTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", appliedTheme);
    localStorage.setItem("theme", appliedTheme);
  };

  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-40">
      <div className="navbar max-w-7xl mx-auto px-5">
        <div className="navbar-start">
          <div className="z-50">
            <div tabIndex={0} role="button" className=" md:hidden">
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className=" drawer-button">
                    {" "}
                    <TiThMenu size={25} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <ul className="menu bg-base-200 min-h-full w-1/2  pt-12">
                    <label
                      htmlFor="my-drawer"
                      className="absolute top-5 left-5 cursor-pointer"
                    >
                      <IoClose size={25} />
                    </label>
                    <div className="border-b-1"></div>
                    {navItems}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            <LogoIcon></LogoIcon>
          </div>
        </div>
        <div className="navbar-center md:hidden">
          <LogoIcon></LogoIcon>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-2 hidden md:flex">
            {navItems}
          </ul>
          <div className="mt-2">
            <button type="button" onClick={toggleTheme}>
              {theme ? <MdOutlineWbSunny size={25} /> : <FaMoon size={25} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
