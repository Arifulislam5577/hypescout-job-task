import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="previous flex items-center gap-2 text-primaryLight capitalize text-sm">
        <MdArrowBack />
        previous
      </button>
      <ul className="flex items-center gap-5">
        <li>
          <a href="/" className="pageNum activePage ">
            1
          </a>
        </li>
        <li>
          <a href="/" className="pageNum">
            2
          </a>
        </li>
        <li>
          <a href="/" className="pageNum">
            3
          </a>
        </li>
        <li>
          <a href="/" className="pageNum">
            ...
          </a>
        </li>
        <li>
          <a href="/" className="pageNum">
            8
          </a>
        </li>
        <li>
          <a href="/" className="pageNum">
            9
          </a>
        </li>
        <li>
          <a href="/" className="pageNum">
            10
          </a>
        </li>
      </ul>
      <button className="previous flex items-center gap-2 text-primaryLight capitalize text-sm">
        next
        <MdArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
