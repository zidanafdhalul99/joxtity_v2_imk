import React from "react";
import Footer from "../Footer";
import yeah from "./img/yeah.jpg"
import whistle from "./img/whistle.jpg"
import typa from "./img/typa.jpg"

export default function Kpop() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-full">
        <div className="font-display mt-3 text-4xl text-white flex justify-center">
          Lagu K-pop Terbaik
        </div>
        <div className="font-display mt-4 text-white w-full text-justify px-7 ">
          Blackpink diakui sebagai The Biggest Girl group in the World. Sehingga
          tak heran jika lagu-lagu mereka sangat sangat pantas untuk disebut
          sebagai salah satu lagu k-pop terbaik. berikut lagu - lagu blackpink
          yang menurut saya terbaik :{" "}
        </div>
        <div className="font-display mt-4 text-white w-full text-justify px-7 flex flex-col gap-1">
          <div>Blackpink - Typa Girl : </div>
          <a
            className="text-white no-underline"
            href="https://www.youtube.com/watch?v=UhxW9Njqqu0"
          >
            Click Here To Listen... <img alt="" src={typa}/>
          </a>
        </div>
        <div className="font-display mt-4 text-white w-full text-justify px-7 flex flex-col gap-1">
          <div>Blackpink - Whistle</div>
          <a
            className="text-white no-underline"
            href="https://www.youtube.com/watch?v=dISNgvVpWlo"
          >
            Click Here To Listen.....<img alt="" src={whistle}/>
          </a>
        </div>
        <div className="font-display mt-4 mb-16 text-white w-full text-justify px-7  flex flex-col gap-1 ">
          <div>Blackpink - Yeah Yeah Yeah</div>
          <a
            className="text-white no-underline"
            href="https://www.youtube.com/watch?v=wQTjv-Xo1gY"
          >
            Click Here To Listen...<img alt="" src={yeah}/>
          </a>
        </div>
      </div>
    </>
  );
}
