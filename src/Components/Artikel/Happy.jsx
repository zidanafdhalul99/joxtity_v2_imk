import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import happy from "../Search/img/happy.jfif";

export default function Happy() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">Happy</div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={happy}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">Moment- Happy</div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : pop, jazz, happy
            </div>
            <Link to="/happy" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">......</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
