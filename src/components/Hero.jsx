import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ALPHABET_LIST } from "../utils/helper";
import { DownArrow } from "../utils/Icons";
import Header from "./Header";

const Hero = () => {
  const { category = "all" } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [artistName, setArtistName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const letter = params.get("letter");
    if (letter) {
      setArtistName(letter.toUpperCase());
    } else {
      setArtistName("");
    }
  }, [location.search]);

  const handleAlphabetClick = (letter) => {
    const newName = `${letter.toUpperCase()}`;
    setArtistName(newName);
    navigate(`/${selectedCategory}?letter=${letter.toLowerCase()}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/${category.toLowerCase()}`);
  };

  const getHeading = () => ({
    pop: "Hit Me Hard and Soft Pop",
    rock: "Hit Me Hard and Soft Rock",
    all: "Hit Me Hard and Soft",
    more: "Hit Me Hard and Soft More",
  }[selectedCategory] || "Hit Me Hard and Soft");

  const getCategoryButtonClass = (category) => {
    return selectedCategory === category
      ? "px-3 py-[2px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-black text-white font-normal"
      : "px-3 py-[2px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent text-[#14191C] font-normal transition-all ease-linear duration-200 hover:bg-black hover:text-white";
  };

  return (
    <div className="max-xl:pb-10">
      <div className="container">
        <Header />
        <div className="flex items-center mt-[17px] overflow-x-auto pb-2">
          <div className="flex items-center gap-[5px] me-[15px]">
            <button
              className={getCategoryButtonClass("all")}
              onClick={() => handleCategoryClick("all")}
            >
              All
            </button>
            <button
              className={getCategoryButtonClass("pop")}
              onClick={() => handleCategoryClick("pop")}
            >
              Pop
            </button>
            <button
              className={getCategoryButtonClass("rock")}
              onClick={() => handleCategoryClick("rock")}
            >
              Rock
            </button>
            <button
              className="flex items-center gap-4 justify-center h-[29px] min-w-[64px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-200 font-normal text-[#14191C]"
              onClick={() => handleCategoryClick("more")}
            >
              More <DownArrow />
            </button>
          </div>
          {ALPHABET_LIST.map((obj, i) => (
            <p
              className="size-[29px] max-xl:overflow-x-scroll min-w-[29px] text-xs hover:text-[#FAFAFF] cursor-pointer font-medium leading-[18px] rounded-full flex items-center justify-center bg-transparent transition-all ease-linear duration-200 hover:bg-black text-[#14191C]"
              key={i}
              onClick={() => handleAlphabetClick(obj)}
            >
              {obj}
            </p>
          ))}
        </div>
        <div className="w-full max-w-[1141px] mx-auto rounded-[20px] bg-[#14191C] relative mt-[43px] max-lg:h-full">
          <div className="flex justify-between max-lg:flex-wrap">
            <div className="flex flex-col ps-[48px] pt-[48px] max-xl:ps-8 max-xl:pt-8 max-md:ps-5 max-md:pt-5">
              <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold leading-[58.51px] text-[#FAFAFF] uppercase">
                {getHeading()}
              </h1>
              <div className="flex items-center gap-6 absolute bottom-[-40px] max-lg:hidden">
                <img
                  src="/assets/images/profile.webp"
                  alt="user-img"
                  className="cursor-pointer size-40"
                />
                <div className="flex flex-col">
                  <h3 className="text-white text-[32px] font-semibold leading-[42px]">
                    Billie Eilish {artistName}
                  </h3>
                  <p className="text-base text-[#CECECE] font-medium leading-[19.5px]">
                    Released May 17, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:hidden mt-5">
                <img
                  src="/assets/images/profile.webp"
                  alt="user-img"
                  className="cursor-pointer max-xl:size-40 max-lg:size-20 max-md:size-16"
                />
                <div className="flex flex-col">
                  <h3 className="text-white text-[32px] font-semibold leading-[42px] max-lg:text-2xl">
                    Billie Eilish {artistName}
                  </h3>
                  <p className="text-base text-[#CECECE] font-medium leading-[19.5px]">
                    Released May 17, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="max-lg:p-10 p-[43px] pl-0 max-md:p-6 max-sm:p-4">
              <img
                src="/assets/images/hero-img.webp"
                alt="hero"
                className="pointer-events-none max-w-[261px] max-lg:max-w-[200px] max-sm:max-w-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
