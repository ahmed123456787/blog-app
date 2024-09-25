import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";

export const CreatePost = () => {
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const addCategory = () => {
    if (cat.trim() === "") return; // Prevent adding empty categories
    let updateCats = [...cats];
    updateCats.push(cat.trim()); // Trim white spaces
    setCat(""); // Clear input field
    setCats(updateCats);
  };

  const deleteCategory = index => {
    let updateCats = cats.filter((_, i) => i !== index); // Remove category by index
    setCats(updateCats);
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl mt-8 ">Create a post</h1>
        <form
          className="w-full flex flex-col space-y-4 md:space-y-8"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter post title"
            className="px-4 py-2 outline-none mt-4"
          />
          <input
            type="file"
            placeholder="Upload file"
            className="px-4 py-2 outline-none"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter post category"
                value={cat}
                onChange={e => setCat(e.target.value)}
              />
              <button
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
              >
                Add
              </button>
            </div>
            {/* Categories */}
            <div className="flex mx-4 mt-4">
              {cats.map((c, i) => (
                <div
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 py-1 px-2 rounded-md"
                  key={i}
                >
                  <p>{c}</p>
                  <p onClick={() => deleteCategory(i)}>
                    <ImCross className="bg-black text-white rounded-full cursor-pointer" />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none"
            placeholder="Enter post description"
          />
          <button className="px-4 outline-none bg-black w-full md:w-[20%] mx-auto font-semibold text-white py-2">
            Add Post
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
