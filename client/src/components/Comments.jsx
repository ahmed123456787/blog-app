import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comments = () => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
      {/* Comments */}
      <div className="px-2 py-2 bg-gray-200 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-600 ">ahmed var</h3>
          <div className="flex justify-center items-center space-x-4">
            <p className="text-gray-500 text-sm">12/12/2023</p>
            <p className="text-gray-500 text-sm">12:34</p>
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <p className="px-4 mt-2">Nice Inforramtions</p>
      </div>
    </div>
  );
};

export default Comments;
