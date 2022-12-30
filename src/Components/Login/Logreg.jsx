import React from "react";
import { Link } from "react-router-dom";

function Logreg() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center h-screen">
        <div className="font-display fixed top-10 text-4xl text-white">
          Joxtify
        </div>
        <div className="flex">
          <div className="flex flex-col gap-3">
            <div className="flex text-3xl rounded-lg w-80 h-12 justify-center items-center bg-white">
              <Link to="/register" className="text-black no-underline">
                <div>Register</div>
              </Link>
            </div>
            <div className="flex text-3xl  rounded-lg w-80 h-12 justify-center items-center bg-white">
              <Link to="/login" className="text-black no-underline">
                <div>Login</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logreg;
