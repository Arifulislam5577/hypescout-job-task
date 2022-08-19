import React from "react";
import { VscBell } from "react-icons/vsc";
import { RiMoonClearFill, RiMoonClearLine } from "react-icons/ri";
import { RiSunFill, RiMenuFill } from "react-icons/ri";
import { MdMonitor } from "react-icons/md";
const Navbar = ({ handleThemeSwitch, theme }) => {
  return (
    <header className="dark:bg-primaryDark bg-lightBgOne py-4">
      <div className="container">
        <nav className="flexbox">
          <div className="logo-area">
            <img
              src={
                theme === "dark" ? "images/logo.png" : "images/logoLight.png"
              }
              alt="hypescout logo"
              className="h-6 w-28 object-contain "
            />
          </div>
          <div className="menu-list-area lg:block hidden">
            <ul className="flexbox gap-5">
              <li>
                <a href="/" className="active  ">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/" className="navLink">
                  Campaign
                </a>
              </li>
              <li>
                <a href="/" className="navLink">
                  Hypesocial
                </a>
              </li>
              <li>
                <a href="/" className="navLink">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div className="avators-area">
            <ul className="flexbox lg:gap-5 gap-3">
              <li>
                <button className="text-primaryLight text-base">
                  <VscBell />
                </button>
              </li>
              <li>
                <div className="dropdown inline-block relative">
                  <button className="text-primaryLight text-base">
                    {theme === "dark" ? (
                      <RiMoonClearFill />
                    ) : (
                      <RiMoonClearLine />
                    )}
                  </button>
                  <ul className="dropdown-menu absolute hidden dark:text-primaryLight text-tertiaryDark dark:bg-primaryDark bg-lightBgOne p-3 w-36 ">
                    <li className="my-2 mt-3">
                      <button
                        className="flex items-center hover:bg-lightBgTwo dark:hover:bg-secondaryDark py-1 px-3 rounded w-full  gap-2 text-sm"
                        onClick={() => handleThemeSwitch("light")}
                      >
                        <RiSunFill /> <span>Light</span>
                      </button>
                    </li>
                    <li className="my-2">
                      <button
                        className="flex items-center hover:bg-lightBgTwo dark:hover:bg-secondaryDark py-1 px-3 rounded w-full  gap-2 text-sm"
                        onClick={() => handleThemeSwitch("dark")}
                      >
                        <RiMoonClearFill /> <span>Dark</span>
                      </button>
                    </li>
                    <li className="my-2">
                      <button
                        className="flex items-center hover:bg-lightBgTwo dark:hover:bg-secondaryDark py-1 px-3 rounded w-full  gap-2 text-sm"
                        onClick={() => handleThemeSwitch("dark")}
                      >
                        <MdMonitor /> <span>System</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="/" className="flexbox gap-3">
                  <span className="text-xs text-primaryLight">Hi,Rakib</span>
                  <img
                    src="images/avator.png"
                    alt="avator"
                    className="h-8 w-8"
                  />
                </a>
              </li>
              <li className="lg:hidden block">
                <button className="text-primaryLight text-base">
                  <RiMenuFill />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
