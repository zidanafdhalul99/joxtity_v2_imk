import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import queen from "./img/rock/queen.jpg";
import thebeatles from "./img/rock/thebeatles.jpg";
import yoasobi from "./img/jpop/yoasobi.jpg";
import blackpink from "./img/kpop/blackpink.jpg";
import jazz from "./img/jazz/jazz.jpg";
import tulus from "./img/tulus.jfif";
import sisitipsi from "./img/sisitipsi.jfif";
import yoasobi1 from "./img/yoasobi1.jfif";

export default function Home() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full items-center ">
        <div className="font-display mt-3 text-4xl text-white">Joxtify</div>

        <div className="flex flex-col w-full mt-8 pl-5 ">
          <div className="gap-3 flex flex-col mt-9">
            <div className="font-display text-2xl text-white">Best For You</div>
            <div className="flex overflow-x-scroll lg:overflow-x-auto lg:flex ">
              <div className="flex-none flex flex-row gap-3 lg:flex-none">
                <Link to="/Gjazz" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={jazz}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      Jazz
                    </div>
                  </div>
                </Link>
                <Link to="/gkpop" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={blackpink}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      K-POP
                    </div>
                  </div>
                </Link>
                <Link to="/gjpop" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={yoasobi}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      J-POP
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-3 flex flex-col mt-9">
            <div className="font-display text-2xl text-white">
              Best of Artist
            </div>
            <div className="flex overflow-x-scroll lg:overflow-x-auto lg:flex">
              <div className="flex-none flex flex-row gap-3 lg:flex-none">
                <Link to="/grock" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={queen}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      Queen
                    </div>
                  </div>
                </Link>
                <Link to="/grock" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={thebeatles}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      The Beatles
                    </div>
                  </div>
                </Link>
                <Link to="/gjpop" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={yoasobi}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      Yoasobi
                    </div>
                  </div>
                </Link>
                <Link to="/gkpop" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={blackpink}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-xl ">
                      Black Pink
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-3 flex flex-col mt-9 mb-40">
            <div className="font-display text-2xl text-white">
              Best Of This Year
            </div>
            <div className="flex overflow-x-scroll lg:overflow-x-auto lg:flex">
              <div className="flex-none flex flex-row gap-3 lg:flex-none">
                <Link to="/gpop" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={tulus}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-lg ">
                      Tulus
                    </div>
                    <div className="font-display text-white text-xl ">
                      Hati-Hati di Jalan
                    </div>
                  </div>
                </Link>
                <Link to="/gjpop" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={yoasobi1}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-lg ">
                      Yoasobi
                    </div>
                    <div className="font-display text-white text-xl ">
                      Yoru Ni Kakeru
                    </div>
                  </div>
                </Link>
                <Link to="/gjazz" className="no-underline">
                  <div className="flex flex-col">
                    <img
                      alt=""
                      src={sisitipsi}
                      style={{ width: "125px", height: "150px" }}
                    />
                    <div className="font-display text-white text-lg ">
                      Sisitipsi
                    </div>
                    <div className="font-display text-white text-xl ">
                      Masih Kurang
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
