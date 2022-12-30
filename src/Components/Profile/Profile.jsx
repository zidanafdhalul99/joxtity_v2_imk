import React from "react";
import Footer from "../Footer";
import { HiOutlineLogout, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <Footer />
      <div className="font-display text-white text-2xl h-screen">
        <div className="flex mt-2 justify-between items-center w-screen bg-gray-500 rounded-3xl shadow-xl">
          <div className="text-2xl flex ml-4">Kelompok 2</div>
          <Link to="/" className="no-underline text-white">
            <div className="flex text-4xl items-center justify-center w-12 h-12 shadow-xl rounded-full">
              <HiOutlineLogout />
            </div>
          </Link>
        </div>
        <div className="flex text-3xl mt-12 rounded-lg w-56 h-12 ml-2 pl-1  bg-gray-500 ">
          <Link
            to="/artikel"
            className="text-white no-underline flex justify-between items-center w-full"
          >
            <div className="text-2xl pl-3 font-display">Artikel</div>
            <HiOutlineChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
}
