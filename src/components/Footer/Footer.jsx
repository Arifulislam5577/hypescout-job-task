import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
const Footer = ({ theme }) => {
  return (
    <footer className="dark:bg-primaryDark bg-lightBgOne py-10 relative mt-auto ">
      <div className="container">
        <div className=" grid grid-cols-4 gap-5 w-full items-start justify-between">
          <div className="">
            <img
              src={
                theme === "dark" ? "images/logo.png" : "images/logoLight.png"
              }
              alt="hypescout logo"
              className="h-6 w-28 object-contain"
            />
            <p className="text-primaryLight my-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              sed ultricies volutpat rhoncus faucibus sit.
            </p>
            <ul className="flex items-center gap-3 ">
              <li>
                <a href="/" className="text-xl text-primaryLight">
                  <RiFacebookBoxFill />
                </a>
              </li>
              <li>
                <a href="/" className="text-xl text-primaryLight">
                  <RiInstagramLine />
                </a>
              </li>
              <li>
                <a href="/" className="text-xl text-primaryLight">
                  <RiLinkedinBoxFill />
                </a>
              </li>
              <li>
                <a href="/" className="text-xl text-primaryLight">
                  <RiTwitterFill />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <h2 className="font-bold dark:text-white  text-tertiaryDark">
              Company
            </h2>
            <ul className="ml-0 mt-1 flex flex-col gap-1">
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Case Study
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex flex-col  items-center">
            <h2 className="font-bold -ml-10 dark:text-white   text-tertiaryDark">
              Influencer
            </h2>
            <ul className="ml-0 mt-1 flex flex-col gap-1">
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Join as Influencer
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  HypeSocial
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex flex-col  items-center">
            <h2 className="font-bold -ml-10 dark:text-white   text-tertiaryDark">
              Advertiser
            </h2>
            <ul className="ml-0 mt-1 flex flex-col gap-1">
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Join as Advertiser
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  HypeLink
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-primaryLight">
              © Hypescout 2022. All rights reserved
            </p>
            <ul className="flex items-center justify-between gap-5">
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-primaryLight">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
