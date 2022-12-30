import React from "react";
import blackpink from "./img/blackpink.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Gkpop() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">K-POP</div>
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
      </div>
    </>
  );
}
