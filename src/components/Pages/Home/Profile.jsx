import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiMapPinLine,
} from "react-icons/ri";
import { BsClock } from "react-icons/bs";
const Profile = () => {
  return (
    <figure className="lg:col-span-1 w-full dark:bg-primaryDark bg-lightBgTwo py-8 px-8 rounded-lg ">
      <img
        src="images/profile1.png"
        alt="username"
        className="w-32 h-32 mx-auto object-contain"
      />
      <div className="info text-center flex items-center gap-1 flex-col ">
        <h2 className="text-2xl font-bold mt-3 dark:text-white text-tertiaryDark capitalize">
          Maksudul Hasan
        </h2>
        <p className="flex items-center gap-1 text-secondaryDark dark:text-primaryLight text-base">
          <RiMapPinLine />
          Dhaka,Bangladesh
        </p>
        <p className="flex items-center gap-1 text-secondaryDark dark:text-primaryLight text-base">
          <BsClock />
          Join On July 26th,2022
        </p>
      </div>

      <ul className="flex items-center justify-center gap-3 my-4  ">
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

      <div className=" grid grid-cols-3 items-center justify-center   mt-5  gap-3">
        <div className="border-dashed border border-primaryLight p-2 text-center">
          <h5 className="text-primaryBlue text-sm font-bold capitalize">12k</h5>
          <h6 className="text-sm text-primaryLight">Followers</h6>
        </div>
        <div className="border-dashed border border-primaryLight p-2 text-center">
          <h5 className="text-primaryBlue text-sm font-bold capitalize ">
            fashion
          </h5>
          <h6 className="text-sm text-primaryLight">Categories</h6>
        </div>
        <div className="border-dashed border border-primaryLight p-2 text-center">
          <h5 className="text-primaryBlue text-sm font-bold capitalize">
            Male
          </h5>
          <h6 className="text-sm text-primaryLight">Gender</h6>
        </div>
      </div>
    </figure>
  );
};

export default Profile;
