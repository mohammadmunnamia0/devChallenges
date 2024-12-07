import { NavLink } from "react-router-dom";

const EmptyState = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
        <div className=" flex flex-col justify-center items-center">
          <div className="text-5xl text-center p-7">No Bookmark Available</div>
          <div>
            <NavLink
              to="/"
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border  rounded-lg shadow-inner group border-red-500 ml-3"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease "></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease "></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease "></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100 "></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-bold ">
                Back To Home
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
