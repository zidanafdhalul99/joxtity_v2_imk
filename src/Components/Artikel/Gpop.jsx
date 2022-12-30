import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import tulus from "../Home/img/tulus.jfif";

export default function Gjazz() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">POP</div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={tulus}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">
              Hati hati di jalan menceritakan
            </div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : pop, On the Way
            </div>
            <Link to="/gpop" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">
                Dari awal liriknya, "Hati-hati di Jalan" menyatakan pertemuan
                sejoli dan merasa satu sama lain sesuai dengan kriteria idaman.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
