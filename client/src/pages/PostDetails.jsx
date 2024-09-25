import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comments from "../components/Comments";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 px-8 md:px-[200px]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Inteligence in Day to Day life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p className="">@schetzerng</p>
          <div className="flex space-x-2">
            <p>16/03/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <img
          src="https://news.felo.me/wp-content/uploads/2024/05/blog.jpeg"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p className="mx-auto mt-8">
          Lorem Ipsun for details yours for this moment skill intel any one can
          do it now for help
        </p>

        <div className="flex items-center mt-8 space-x-4 font-semibold ">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1 ">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1 ">Ai</div>
          </div>
        </div>
        {/* Comments */}
        <Comments />
        {/* Write a comment */}
        <div className="flex flex-col mt-4 md:flex-row">
          <input
            className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"
            type="text"
            placeholder="write a comment"
          ></input>
          <button className="bg-black text-white px-2 py-2 md:w-[30%] rounded-xl mt-4 md:mt-0">
            Add Comments
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
