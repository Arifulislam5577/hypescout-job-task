import React from "react";
import Profile from "./Profile";

const ProfilesArea = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 ">
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
};

export default ProfilesArea;
