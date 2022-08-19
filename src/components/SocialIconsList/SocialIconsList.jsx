import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
const SocialIconsList = () => {
  return (
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
  );
};

export default SocialIconsList;
