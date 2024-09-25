import React from "react";

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* Image of blog */}
      <div className="w-[35%] h-[200px] flex justify-center items-center ">
        <img
          src="https://news.felo.me/wp-content/uploads/2024/05/blog.jpeg"
          alt=""
          className="w-full h-full "
        />
      </div>
      {/* Image of the blog  */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">def</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 space-x-4  md:mb-4">
          <p className="">@schetzerng</p>
          <div className="flex space-x-2">
            <p>16/03/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          text with extra details for asking for whlp to you hefhjsdkaf dkjfasdf
          sdkjfsdfk skjdafhalskjdffsdkjf ashdfjkasfjlsadhf adshfkjsdf
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
