import React from "react";
import Footer from "../Footer";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import sad from "./img/sad.jpg";
import happy from "./img/happy.jfif";
import relax from "./img/relax.jpg";
import perjalanan from "./img/perjalanan.jpg";
import jazz from "./img/jazz.jpg";
import rock from "./img/rock.jpg";
import pop from "./img/pop.jpg";
import kpop from "./img/kpop.jpg";
import jpop from "./img/jpop.jpg";
import violin from "./img/violin.jfif";
import piano from "./img/piano.jfif";
import gitar from "./img/gitar.jfif";

export default function Search() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full  h-full">
        <div className="font-display mt-3 ml-4 text-3xl text-white">Search</div>
        <div>
          <label className="relative block mt-6 mx-3">
            <div className="absolute inset-y-0 right-0 mr-3 mt-1 bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <div className="text-black text-4xl ">
                <HiOutlineSearch />
              </div>
            </div>
            <input
              type="text"
              className="flex gap-2 pl-4  rounded-full w-full h-12 items-center bg-white "
              placeholder="What do you want to listen to?"
            />
          </label>
          <div className="gap-3 flex flex-col mt-9 ml-3 w-88 lg:w-full ">
            <div className="font-display text-2xl text-white">Genre</div>
            <div className="flex overflow-x-auto lg:flex lg:overflow-x-auto">
              <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                <Link to="/gjazz" className="no-underline">
                  <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                    <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                      <div className="text-2xl ml-3 text-white">JAZZ</div>
                      <img
                        alt=""
                        className="ml-9 mt-1 rounded-xl"
                        src={jazz}
                        style={{
                          width: "150px",
                          height: "120px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/grock" className="no-underline">
                  <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                    <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                      <div className="text-2xl ml-3 text-white">ROCK</div>
                      <img
                        alt=""
                        className="ml-9 mt-1 rounded-xl"
                        src={rock}
                        style={{
                          width: "150px",
                          height: "120px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/gpop" className="no-underline">
                  <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                    <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                      <div className="text-2xl ml-3 text-white">POP</div>
                      <img
                        alt=""
                        className="ml-9 mt-1 rounded-xl"
                        src={pop}
                        style={{
                          width: "150px",
                          height: "120px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/gkpop" className="no-underline">
                  <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                    <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                      <div className="text-2xl ml-3 text-white">K-POP</div>
                      <img
                        alt=""
                        className="ml-9 mt-1 rounded-xl"
                        src={kpop}
                        style={{
                          width: "150px",
                          height: "120px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/gjpop" className="no-underline">
                  <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                    <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                      <div className="text-2xl ml-3 text-white">J-POP</div>
                      <img
                        alt=""
                        className="ml-9 mt-1 rounded-xl"
                        src={jpop}
                        style={{
                          width: "150px",
                          height: "120px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-3 flex flex-col mt-9 ml-3 w-88 lg:w-full ">
            <div className="font-display text-2xl text-white">Momen</div>
            <div className="flex overflow-x-auto gap-3 lg:flex lg:overflow-x-auto py-2">
              <Link to="/happy" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white">Happy Moment</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={happy}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
              <Link to="/sad" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white">Sad Moment</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={sad}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
              <Link to="/study" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white ">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white"> Relax Study</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={relax}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
              <Link to="/otw" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white">On The Way</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={perjalanan}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="gap-3 flex flex-col mb-16 mt-9 ml-3 w-88 lg:w-full ">
            <div className="font-display text-2xl text-white">Instrumen</div>
            <div className="flex overflow-x-auto gap-3 lg:flex lg:overflow-x-auto py-2">
              <Link to="/gitar" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white">Gitar</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={gitar}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
              <Link to="/violin" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white">Violin</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={violin}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
              <Link to="/piano" className="no-underline">
                <div className="flex-none flex flex-row gap-3 lg:flex-none text-white">
                  <div className="flex flex-col  w-48 h-40  font-display bg-gray-800 rounded-2xl">
                    <div className="text-2xl ml-3 text-white">Piano</div>
                    <img
                      alt=""
                      className="ml-9 mt-1 rounded-xl"
                      src={piano}
                      style={{
                        width: "150px",
                        height: "120px",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
