import React, { useState } from 'react';
import { ALPHABET_LIST, SONGS_LIST } from '../utils/helper';
import { useNavigate } from 'react-router-dom';

function Songs() {
    const navigate = useNavigate();
    const [uploads, setUploads] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleAlphabetClick = (letter) => {
        navigate(`?letter=${letter.toLowerCase()}`);
    };

    const handleChange = (e) => {
        const imgUpload = URL.createObjectURL(e.target.files[0]);
        setUploads(imgUpload);
        setShowImage(true);
    };

    const handleRemoveImage = () => {
        setUploads(null);
        setShowImage(false);
    };

    return (
        <>
            <div className='container pt-[100px] max-lg:pt-0'>
                <h3 className='text-5xl font-semibold text-black -mb-5 max-lg:mb-5 max-md:text-3xl'>Songs</h3>
                <div className='flex max-lg:flex-col gap-5 items-center justify-between'>
                    <div className='max-w-[773px] max-lg:max-w-full w-full flex flex-col gap-11 max-md:gap-8'>
                        {SONGS_LIST.map((obj, i) => (
                            <div key={i}>
                                <div className='flex justify-between -mb-2'>
                                    <div className='flex gap-[17px]'>
                                        <p className='opacity-0'>{obj.heading}</p>
                                        <p className='text-sm font-semibold'>{obj.Songs}</p>
                                    </div>
                                    <div className='flex gap-[110px] max-md:gap-12 max-sm:gap-3'>
                                        <p className='text-sm font-semibold'>{obj.releaseDate}</p>
                                        <p className='text-sm font-semibold'>{obj.timesPlayed}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex gap-[17px]'>
                                        <p className='text-[#14191C] text-xs text-opacity-80'>{obj.number}</p>
                                        <p className='font-semibold text-sm flex'>{obj.song}</p>
                                    </div>
                                    <div className='flex gap-[147px] max-md:gap-20 max-sm:gap-8'>
                                        <p className='text-[#14191C] text-xs text-opacity-80'>{obj.date}</p>
                                        <p className='text-[#14191C] text-xs text-opacity-80'>{obj.playTime}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-500 max-lg:mx-auto max-w-[300px] w-full h-[600px] rounded-[20px] flex items-center justify-center text-center max-lg:max-w-[500px] max-lg:h-[400px] max-md:!max-w-[300px]">
                        <input
                            type="file"
                            id="my-input"
                            hidden
                            onChange={handleChange}
                            multiple
                        />
                        <label
                            htmlFor="my-input"
                            className={`cursor-pointer text-white ${showImage ? "hidden" : "block"}`}
                        >
                            Add Place
                        </label>
                        <img
                            className={`w-[300px] h-[600px] object-cover rounded-[20px] max-[1023.98px]:w-[500px] max-[1023.98px]:h-[400px] max-md:!w-[300px] ${showImage ? "block" : "hidden"}`}
                            src={uploads}
                            alt="image"
                        />
                        <div
                            className="flex flex-col gap-2 absolute top-5 right-5 cursor-pointer"
                            onClick={handleRemoveImage}
                        >
                            <span
                                className={`duration-300 ease-linear transition-all ${showImage ? "h-0.5 w-7 bg-white rounded-lg rotate-45 translate-y-1.5" : "h-0 w-0"}`}
                            ></span>
                            <span
                                className={`duration-300 ease-linear transition-all ${showImage ? "h-0.5 w-7 bg-white rounded-lg -rotate-45 -translate-y-1" : "h-0 w-0"}`}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:justify-center mt-[45px] pt-[42px] pb-[35px] max-md:py-6 border-[1px] border-t border-b border-primary overflow-x-auto'>
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
        </>
    );
}

export default Songs;
