import React from "react";
import Navbar from "../components/Navbar";
import ProfilePosts from "../components/ProfilePosts";
import Footer from "../components/Footer";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[100px] mt-8 flex md:flex-row flex-col-reverse md:items-start">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold mb-4">Your Posts</h1>
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
        </div>
        <div className="flex flex-col space-y-4 md:w-[30%] w-full md:items-end">
          <h1>Profiles</h1>
          <input
            placeholder="Your username"
            className="outline-none px-4 py-2 text-gray-500"
            type="text"
          ></input>
          <input
            placeholder="Your email"
            className="outline-none px-4 py-2 text-gray-500"
            type="email"
          ></input>
          <input
            placeholder="Your password"
            className="outline-none px-4 py-2 text-gray-500"
            type="password"
          ></input>
          <div className="flex items-center space-x-4 mt-8">
            <button className="text-white font-semibold bg-black py-3 hover:text-black hover:bg-gray-400 px-4">
              Update
            </button>
            <button className="text-white font-semibold bg-black py-3 hover:text-black hover:bg-gray-400 px-4">
              Delete
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
