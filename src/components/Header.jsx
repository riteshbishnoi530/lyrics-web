import React from 'react'
import { SearchIcon } from '../utils/Icons';

const Header = () => {
  return (
    <nav className="w-full max-w-[1128px] header-shadow rounded-[20px] flex items-center justify-between py-[10px] max-md:flex-wrap max-lg:gap-6 max-sm:gap-2 mt-[10px]">
      <a href="/">
        <img
          src="/assets/images/logo.webp"
          alt="logo"
          className="ps-[38px] max-w-[135px] max-md:ps-6"
        />
      </a>
      <div className=" max-md:hidden flex items-center rounded-full w-full max-w-[650px] justify-between border border-solid border-[#DBDBF3] ps-[30px] pe-2 max-lg:ps-2">
        <input
          type="text"
          placeholder="What do you feel like listening to right now ?"
          className=" placeholder:text-sm text-sm font-normal placeholder:font-normal leading-6 placeholder:left-6 placeholder:text-[#333333] outline-none w-full"
        />
        <p className="flex items-center justify-center size-[39px] rounded-full hover:scale-105 transition-all ease-in-out duration-300 bg-black cursor-pointer my-[6px]">
          <SearchIcon />
        </p>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-[#14191C] hover:bg-[#14191C] hover:text-white px-3 py-2 rounded-[9px] transition-all ease-linear duration-200 text-sm leading-6 font-normal">
          Login
        </button>
        <button className="me-3 bg-[#14191C] text-white font-medium text-sm leading-6 rounded-[9px] border border-[#14191C] hover:bg-white hover:text-[#14191C] transition-all ease-linear duration-200 w-full min-w-[105px] max-sm:min-w-[85px] py-[9px] h-[43px]">
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex items-center rounded-full w-full max-w-[650px] justify-between border border-solid border-[#DBDBF3] ps-[30px] pe-2 max-md:ps-2">
        <input
          type="text"
          placeholder="What do you feel like listening to right now ?"
          className=" placeholder:text-sm text-sm font-normal placeholder:font-normal leading-6 placeholder:left-6 placeholder:text-[#333333] outline-none w-full max-md:text-xs"
        />
        <p className="flex items-center justify-center h-[39px] min-w-[39px] rounded-full bg-black hover:scale-105 transition-all ease-in-out duration-300 my-[6px]">
          <SearchIcon />
        </p>
      </div>
    </nav>
  );
}

export default Header