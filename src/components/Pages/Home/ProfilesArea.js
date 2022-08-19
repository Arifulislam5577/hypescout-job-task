import React from "react";
import Profile from "./Profile";
import { profiles } from "../../../data/profiles";

const ProfilesArea = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 ">
      {profiles.map((pro) => (
        <Profile key={pro.id} profileData={pro} />
      ))}
    </div>
  );
};

export default ProfilesArea;
