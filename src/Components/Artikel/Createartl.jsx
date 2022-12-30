import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Createartl() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 text-2xl text-white ml-4">
          Create Article
        </div>
        <div className="mt-6">
          <div className="font-display text-2xl text-white ml-4">Judul</div>
          <label className="relative block mx-3">
            <div className="absolute inset-y-0 right-0 mr-3 mt-1 bg-white rounded-full w-10 h-10 flex items-center justify-center"></div>
            <input
              type="text"
              className="flex gap-2 pl-4  rounded-xl w-full h-12 items-center bg-white "
              placeholder="Masukan Judul Artikel"
            />
          </label>
        </div>
        <div className=" flex justify-between px-3 mt-3">
          <div className="flex flex-col ">
            <div className="font-display text-2xl text-white ">Genre</div>
            <select className="w-40 h-10">
              <option value="Jazz">Jazz</option>
              <option value="Rock">Rock</option>
              <option value="K-POP">K-POP</option>
              <option value="J-POP">J-POP</option>
              <option value="POP">POP</option>
            </select>
          </div>
          <div className="flex flex-col">
            <div className="font-display text-2xl text-white ">Mood/Momen</div>
            <select className="w-40 h-10">
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Relax Study">Relax Study</option>
              <option value="On The Way">On The Way</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col px-3 mt-3">
          <label
            class="block mb-2 text-2xl font-display text-white"
            for="multiple_files"
          >
            Upload files
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          ></input>
        </div>
        <div class="flex justify-center mt-3">
          <div class="mb-3 px-3 w-full ">
            <label className="font-display text-white text-2xl mt-2">
              Content
            </label>
            <textarea
              className="w-full rounded-xl pl-2 pt-2"
              rows="8"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="flex font-display text-white text-xl justify-end mr-3 gap-2">
          <div>
            <button>Cencel</button>
          </div>
          <Link to="/artikel" className="no-underline text-white">
            <div className="flex justify-center items-center rounded-xl w-20 bg-gray-400">
              <button>Submit</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
