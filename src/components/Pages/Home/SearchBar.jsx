import React from "react";
import { RiFilter2Line } from "react-icons/ri";
const SearchBar = () => {
  return (
    <div className="dark:bg-primaryDark bg-lightBgTwo p-3 dark:text-white rounded-lg grid lg:grid-cols-6 grid-cols-1 items-center justify-between gap-3">
      <div className="lg:col-span-1 w-full ">
        <h3 className="text-xl font-bold lg:text-center">Profile(100)</h3>
      </div>

      <form className="lg:col-span-4 w-full ">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block py-2.5 pl-10 w-full text-base text-gray-900 bg-white rounded  border border-gray-300 focus:ring-primaryBlue focus:border-primaryBlue dark:bg-primaryDark dark:border-gray-600 dark:placeholder-primaryLight placeholder:text-sm dark:text-primaryLight dark:focus:ring-primaryBlue dark:focus:border-primaryBlue"
            placeholder="Search Profile"
            required
          />
        </div>
      </form>

      <div className="lg:col-span-1 w-44 mx-auto ">
        <button className="flex items-center gap-1 text-sm py-3 px-3 bg-primaryBlue text-white rounded">
          <RiFilter2Line />
          Advance Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
