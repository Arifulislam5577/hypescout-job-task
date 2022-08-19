import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
const Footer = ({ theme }) => {
  return (
    <footer className="dark:bg-primaryDark  bg-lightBgOne py-10 relative mt-auto z-0">
      <div className="container">
        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 w-full lg:items-start  justify-between">
          <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
            <img
              src={
                theme === "dark" ? "images/logo.png" : "images/logoLight.png"
              }
              alt="hypescout logo"
              className="h-6 w-28 object-contain"
            />
            <p className="text-primaryLight my-4 text-sm text-center md:text-left">
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
          <div className="lg:mt-10 flex flex-col lg:items-center items-start md:col-span-1">
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
          <div className="md:col-span-1 md:hidden block">
            <div className="lg:mt-10 flex flex-col md:col-span-1  lg:items-center items-start">
              <h2 className="font-bold lg:-ml-10 dark:text-white   text-tertiaryDark">
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
            <div className="lg:mt-10 flex flex-col md:col-span-1  lg:items-center items-start">
              <h2 className="font-bold lg:-ml-10 dark:text-white   text-tertiaryDark">
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
          <div className="lg:mt-10 flex flex-col md:col-span-1  items-center  md:block displayNone">
            <h2 className="font-bold  dark:text-white   text-tertiaryDark">
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
          <div className="lg:mt-10 flex flex-col md:col-span-1  items-center  md:block displayNone">
            <h2 className="font-bold  dark:text-white   text-tertiaryDark">
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
          <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4">
            <p className="text-sm text-primaryLight md:order-1 order-2">
              © Hypescout 2022. All rights reserved
            </p>
            <ul className="flex  items-center justify-between gap-5 md:order-2 order-1">
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
