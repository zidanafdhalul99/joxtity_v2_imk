import React from "react";
import yoasobi from "./img/yoasobi.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Gkpop() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">J-POP</div>
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
