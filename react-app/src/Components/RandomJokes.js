import React, { useEffect, useState } from "react";
import DisplayJoke from "./DisplayJoke";
import {
  displayRandomNextJoke,
  fetchCategoriesData,
  fetchRandomJoke,
} from "./Api";
import Loading from "./Loading";

const RandomJokes = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [changeJoke, setChangeJoke] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await fetchCategoriesData();
    setCategories(data);
    setIsLoading(false);
  };
  const displayJoke = async (jokeCategory, index) => {
    setChangeJoke(true);
    const data = await fetchRandomJoke(jokeCategory);
    if (data) {
      setJoke(data.value);
      setCurrentCategory(categories[index]);
      setIsModalOpen(true);
    }
    setChangeJoke(false);
  };

  const displayNextJoke = async () => {
    setChangeJoke(true);
    const data = await displayRandomNextJoke(currentCategory);
    if (data) {
      setJoke(data.value);
    }
    setChangeJoke(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setJoke("");
  };

  return (
    <>
      <section className="text-black mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-600">
        <h1 className=" headingBounce flexCenter ">Chuck Norries</h1>
        {isLoading ? (
          <div className="h-screen flexCenter">
            <Loading />
          </div>
        ) : (
          <div className="container px-5 py-8 mx-auto">
            <div className="gridLayout">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="card flexCenter bg-white"
                  onClick={() => displayJoke(item, index)}
                >
                  {/* Content of your card */}
                  <div className="p-4">
                    <div className="flexCenter font-bold text-lg md:text-xl lg:text-2xl text-blue-700 capitalize">
                      {item}
                    </div>
                    <div className="flexCenter text-purple-500 lg:text-md capitalize">
                      Unlimited jokes on {item}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {isModalOpen && (
          <DisplayJoke
            closeModal={closeModal}
            joke={joke}
            categories={currentCategory}
            displayNextJoke={displayNextJoke}
            changeJoke={changeJoke}
          />
        )}
      </section>
    </>
  );
};

export default RandomJokes;
