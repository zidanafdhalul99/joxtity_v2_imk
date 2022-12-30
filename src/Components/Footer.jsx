import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

function Footer() {
  return (
    <div className="flex  fixed bottom-0 bg-gray-800 w-full h-12 ">
      <div className="flex w-full justify-around text-3xl  items-center">
        <Link to="/home" className="text-white no-underline active:bg-[#DEF2F1] focus:ring focus:ring-white focus:rounded-lg">
          <HiOutlineHome />
        </Link>
        <Link to="/search" className="text-white no-underline active:bg-[#DEF2F1] focus:ring focus:ring-white focus:rounded-lg">
          <HiOutlineSearch />
        </Link>
        <Link to="/profile" className="text-white no-underline active:bg-[#DEF2F1] focus:ring focus:ring-white focus:rounded-lg">
          <HiOutlineUser />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
