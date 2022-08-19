import React from "react";

const Navbar = () => {
  return (
    <header className="bg-primaryDark py-4">
      <div className="container">
        <nav className="flexbox">
          <div className="logo-area">
            <img src="images/logo.png" alt="hypescout logo" />
          </div>
          <div className="menu-list-area">
            <ul className="flexbox gap-5">
              <li>
                <a href="/" className="active navLink ">
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
            <ul className="flexbox gap-5">
              <li>
                <button className="text-primaryLight text-sm">Noti</button>
              </li>
              <li>
                <button className="text-primaryLight text-sm">Mode</button>
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
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
