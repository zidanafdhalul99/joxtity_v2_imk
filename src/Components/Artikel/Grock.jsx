import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import queen from "../Home/img/rock/queen.jpg";
import thebeatles from "../Home/img/rock/thebeatles.jpg";

export default function Grock() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 ml-4 text-4xl text-white">Rock</div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={queen}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">Queen</div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : Rock, happy
            </div>
            <Link to="/grock" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">
                Queen adalah grup musik rock dari Britania Raya yang dibentuk
                tahun 1970 di London.
              </div>
            </Link>
          </div>
        </div>
        <div className="flex mt-10 ">
          <div>
            <img
              alt=""
              className=""
              src={thebeatles}
              style={{ width: "155px", height: "135px" }}
            />
          </div>
          <div className="flex flex-col font-display">
            <div className="text-white text-xl ml-3">The Beatles</div>
            <div className="text-white text-xs ml-3 underline mt-1">
              Genre : Rock, happy
            </div>
            <Link to="/grock" className="no-underline">
              <div className="w-56 text-white mt-2 text-sm ml-3">
                The Beatles adalah kelompok pemusik Inggris beraliran rock,
                dibentuk di Liverpool pada tahun 1960.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
