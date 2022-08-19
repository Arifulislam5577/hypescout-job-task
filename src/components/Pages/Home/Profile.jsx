import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiMapPinLine,
} from "react-icons/ri";
import { BsClock } from "react-icons/bs";
const Profile = (props) => {
  const { name, imgUrl, address, joinAt, personal_info } = props.profileData;
  return (
    <figure className="lg:col-span-1 w-full dark:bg-primaryDark bg-lightBgTwo sm:p-8 p-6 rounded-lg ">
      <img
        src={imgUrl}
        alt={name}
        className="w-32 h-32 mx-auto object-contain"
      />
      <div className="info text-center flex items-center gap-1 flex-col ">
        <h2 className="text-2xl font-bold mt-3 dark:text-white text-tertiaryDark capitalize">
          {name}
        </h2>
        <p className="flex items-center gap-1 text-secondaryDark dark:text-primaryLight text-base">
          <RiMapPinLine />
          {`${address.city},${address.country}`}
        </p>
        <p className="flex items-center gap-1 text-secondaryDark dark:text-primaryLight text-base">
          <BsClock />
          {joinAt}
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
        {Object.entries(personal_info).map((el, index) => {
          const [title, value] = el;
          return (
            <div
              className="border-dashed border border-primaryLight p-2 text-center"
              key={index}
            >
              <h5 className="text-primaryBlue text-sm font-bold capitalize ">
                {value}
              </h5>
              <h6 className="text-sm text-primaryLight">{title}</h6>
            </div>
          );
        })}
      </div>
    </figure>
  );
};

export default Profile;
