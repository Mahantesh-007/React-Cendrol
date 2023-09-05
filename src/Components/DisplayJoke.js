import React from "react";
import Loading from "./Loading";

const DisplayJoke = ({
  closeModal,
  joke,
  categories,
  displayNextJoke,
  changeJoke,
}) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-800 opacity-75" />
        <div className="z-10 md:w-1/2 w-full bg-white p-4 rounded-lg shadow-md">
          {changeJoke ? (
            <Loading />
          ) : (
            <div className="text-center">
              <p className="font-bold text-lg md:text-xl lg:text-2xl text-blue-700 capitalize">
                {categories}
              </p>
              <p className="text-purple-500">{joke}</p>
              <button
                onClick={closeModal}
                className="mt-4 px-7 py-2 mx-4 bg-red-500 hover:bg-red-700 text-white rounded-lg focus:outline-none"
              >
                Close
              </button>
              <button
                onClick={displayNextJoke}
                className="mt-4 px-7 py-2 mx-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayJoke;
