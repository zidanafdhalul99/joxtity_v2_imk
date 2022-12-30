import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import blackpink from "./img/blackpink.jpg";
import yoasobi from "./img/yoasobi.jpg";

export default function Artikel() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full  h-screen">
        <div className="font-display mt-3 ml-4 text-2xl text-white">
          Artikel
        </div>
        <div className="flex text-3xl mt-10 rounded-lg w-56 h-12 ml-2 pl-1  bg-gray-500">
          <Link
            to="/createartl"
            className="text-white no-underline flex justify-between items-center w-full"
          >
            <div className="text-2xl font-display">Create Artikel</div>
            <HiOutlinePlus />
          </Link>
        </div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={blackpink}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">Lagu K-pop Terbaik</div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : K-pop
            </div>
            <Link to="/kpop" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">
                Blackpink diakui sebagai The Biggest Girl group in the World.
                Sehingga tak heran jika....Selengkapnya.....
              </div>
            </Link>
          </div>
        </div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={yoasobi}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">
              夜に駆ける/Yoru ni Kakeru
            </div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : J-pop
            </div>
            <Link to="/yoasobi" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">
                Lagu 'Yoru ni Kakeru' (Berlari di Malam Hari) merupakan lagu
                milik YOASOBI...Selengkapnya.....
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
