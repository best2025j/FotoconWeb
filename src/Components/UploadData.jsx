import React from "react";
import Modal from "../Pages/Modal";
import image from "../Assets/Vector.png";

const UploadData = () => {
  return (
    <Modal>
      <div className="text-center">
        <h1 className="text-2xl text-bold">Best Photographer</h1>
        <p className="sm:pr-[15rem] sm:py-6 py-2 text-xs">Upload file</p>
        <div className=" text-sm border border-slate-500 border-dashed sm:w-[20rem] mx-auto rounded-xl">
          <div className="space-y-2 py-4 text-zinc-600">
            <p>Best Photographer</p>
            <a href="/">
              <img src={image} alt="img" className="mx-auto"></img>
            </a>
            <p>Drag and drop</p>
            <p>Or</p>
            <p>Browse</p>
          </div>
        </div>
        <div className="sm:pt-8 pt-2">
          <button
            type="submit"
            className=" md:px-8 md:py-3 py-2 px-4 bg-[#FFD523] text-sm text-[#171717] rounded-[6px]"
          >
            <a href="/upload"> Upload photo</a>
          </button>
        </div>
        {/*  */}
        <div className="text-xs sm:py-6 pt-2">
          <h3 className="uppercase">or</h3>
          <p>Upload from social media</p>
        </div>
      </div>

      {/*  */}
    </Modal>
  );
};

export default UploadData;
