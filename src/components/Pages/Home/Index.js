import React from "react";
import Pagination from "../../Pagination/Pagination";
import ProfilesArea from "./ProfilesArea";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="py-10 dark:bg-secondaryDark bg-white">
      <div className="container">
        <SearchBar />
        <ProfilesArea />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
