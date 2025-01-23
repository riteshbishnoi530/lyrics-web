import React from "react";
import { FOOTER_ICON_LIST, FOOTER_LIST, FOOTER_LIST_TWO } from "../utils/helper";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="container w-full max-xl:px-4 lg:mb-[89px] mb-16">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="w-7/12 flex mt-[91px] max-lg:mt-14 max-md:mt-10 max-sm:mt-8 justify-between max-w-[598px] max-lg:w-full max-lg:mx-auto max-md:flex-wrap max-md:gap-8">
                        {FOOTER_LIST.map((obj, i) => (
                            <div key={i}>
                                <p className="text-sm font-semibold leading-custom-5xl max-md:text-xs">
                                    {obj.heading}
                                </p>
                                <ul className="pt-9 max-lg:pt-7 max-md:pt-5 max-sm:pt-3">
                                    {obj.item.map((val, idx) => (
                                        <li
                                            key={idx}
                                            className={`${idx === 0 ? "" : "pt-6 max-lg:pt-4 max-md:pt-2"
                                                }`}
                                        >
                                            <Link
                                                to="#"
                                                className="text-sm max-md:text-xs max-sm:text-[10px] leading-custom-5xl font-normal text-custom-black hover:text-off-white duration-300 ease-linear"
                                            >
                                                {val}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="lg:w-4/12 w-full flex justify-center lg:justify-start">
                        <div className="lg:ps-10 pt-[67px] max-lg:pt-12 max-md:pt-10 max-sm:pt-8 max-w-[312px] w-full">
                            <h4 className="font-semibold lg:text-sm text-xs text-darkBlack lg:mb-[26px] md:mb-5 mb-4">
                                Follow us
                            </h4>
                            {FOOTER_ICON_LIST.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex bg-white rounded-[10px] justify-between items-center mb-[14px] py-3 ps-6 pe-[14px] ${index === 3 ? "mb-0" : ""
                                        }`}
                                >
                                    <h3 className="!leading-[174%] lg:text-sm font-semibold text-xs">
                                        {item.title}
                                    </h3>
                                    <Link target="_blank" to={item.link}>
                                        <img
                                            className="max-w-[30px] h-auto"
                                            src={item.image}
                                            alt={item.alt}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-off-white w-full xl:py-[30px] lg:py-6 py-5 flex justify-center items-center">
                <div className="max-w-[1140px] mx-auto w-full">
                    <div className="flex flex-wrap w-full justify-between md:gap-5 gap-3">
                        <p className="text-darkBlack lg:text-sm text-xs text-center max-lg:mx-auto max-lg:px-6">
                            All rights reserved to Global Media Holdings Ltd.{" "}
                            {new Date().getFullYear()}
                        </p>
                        <div className="flex lg:gap-10 gap-7 max-lg:px-6 max-lg:mx-auto">
                            <Link className="text-darkBlack lg:text-sm text-xs" to="/">
                                Privacy Policy
                            </Link>
                            <Link className="text-darkBlack lg:text-sm text-xs" to="/">
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;