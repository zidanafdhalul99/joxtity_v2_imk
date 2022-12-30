import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import sisitipsi from "../Home/img/sisitipsi.jfif";

export default function Gjazz() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">Jazz</div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={sisitipsi}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">
              Sisitipsi - Masih Kurang
            </div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : Jazz
            </div>
            <Link to="/gjazz" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">
                Sisitipsi merupakan grup musik asal Indonesia yang dibentuk pada
                tahun 2014.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
