import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="my-7 px-20">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
        <div className="flex flex-col">
          <h1 className="text-5xl text-emerald-700 font-black mb-5 ">You are Lost Buddy!</h1>
          <p className="text-3xl font-bold py-8">
            The page you have searching for is not found. Please click below
            button to return home
          </p>
          <Link to={"/"}>
            {" "}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Return Home
            </button>
          </Link>
        </div>
        <div className="">
          <img
            className="w-[694px] h-[455px]"
            src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Notfound;
