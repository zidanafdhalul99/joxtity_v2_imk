import React from "react";
import Footer from "../Footer";
import yoasobi1 from "./img/yoasobi1.jfif";

export default function Yoasobi() {
  return (
    <>
      <Footer />
      <div className="flex flex-col w-full h-screen">
        <div className="font-display mt-3 text-3xl text-white flex justify-center">
          夜に駆ける/Yoru ni Kakeru
        </div>
        <div className="font-display mt-4 text-white w-full text-justify px-7 ">
          Lagu "Yoru ni Kakeru" dirilis pada Desember 2019 silam dan berhasil
          merajai di berbagai platform musik, lo. Dalam bahasa Jepang, "Yoruni
          Kakeru" berarti berlari di malam hari. Lirik lagu "Yoru ni Kakeru"
          diangkat dari cerpen yang berjudul "Thanatos no Yuuwaku" karya Maya
          Hoshino. Lagu "Yoru ni Kakeru" menceritakan tentang seorang laki-laki,
          perempuan, dan 'shinigami' atau malaikat maut. lagu ini menceritakan
          tentang keputuasaan dalam menjalani kehidupan dan mengandung
          kesedihan. YOASOBI merupakan grup musik asal Jepang dan beraliran
          Jepang Pop atau J-Pop.
        </div>
        <div className="font-display mt-4 text-white w-full text-justify px-7 flex flex-col gap-1">
          <div>夜に駆ける/Yoru ni Kakeru : </div>
          <a
            className="text-white no-underline"
            href="https://www.youtube.com/watch?v=ol0BA7uw18Q"
          >
            Click Here To Listen... <img alt="" src={yoasobi1} />
          </a>
        </div>
      </div>
    </>
  );
}
