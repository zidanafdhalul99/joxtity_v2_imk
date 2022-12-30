import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex flex-col w-full items-center h-screen">
        <div className="font-roboto fixed top-10 text-4xl text-white">
          Joxtify
        </div>
        <div className="flex flex-col bg-white w-80 h-96 rounded-2xl mt-40">
          <div className="flex justify-center font-display mt-4 text-black text-3xl">
            <div>Login</div>
          </div>
          <div className="flex flex-col justify-center mt-9 items-center gap-3 ">
            <label className="relative block">
              <div className="absolute inset-y-0 left-0 ml-2 mt-2 bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <div className="text-black text-2xl">
                  <HiOutlineUser />
                </div>
              </div>
              <input
                type="text"
                className="flex gap-2 placeholder:text-3xl pl-14 pt-2 placeholder:text-gray-50 placeholder:italic rounded-lg w-72 h-14 items-center bg-gray-400"
                placeholder="Username"
              />
            </label>
            <label className="relative block">
              <div className="absolute inset-y-0 left-0 ml-2 mt-2 bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <div className="text-black text-2xl">
                  <HiOutlineLockClosed />
                </div>
              </div>
              <input
                type="Password"
                className="flex gap-2 placeholder:text-3xl pl-14 pt-2 placeholder:text-gray-50 placeholder:italic rounded-lg w-72 h-14 items-center bg-gray-400"
                placeholder="Password"
              />
            </label>
            <Link to="/home" className="no-underline">
              <div className="flex gap-2 rounded-full w-72 h-12 items-center justify-center bg-gray-500">
                <div className="text-3xl text-white">LOGIN</div>
              </div>
            </Link>
            <div className="flex gap-1">
                <div className="text-lg">Have No An Account? </div>
                <Link to="/register" className="no-underline text-lg">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
