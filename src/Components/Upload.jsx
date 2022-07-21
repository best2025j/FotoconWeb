import React from "react";
import Modal from "../Pages/Modal";

const Upload = () => {
  return (
    <Modal>
      <div className="">
        <div className="text-center">
          <h1 className="text-2xl text-bold">Best Photographer</h1>
          <p className="sm:pr-[20rem] sm:py-4 py-2 text-xs">Uploading file</p>
        </div>

        <div className=" text-sm border-[#C4C4C4] m-4 border-dashed sm:w-[26rem] w-[18rem] mx-auto rounded-xl">
          <div className="space-y-2 sm:py-2 items-center ">
            <div className="sm:space-y-3">
              <p>sample1.png</p>
              <div className=" bg-slate-200 shadow-3xl w-[98%] rounded-sm">
                <div className="bg-[#2C2E43] h-10 flex justify-center items-center w-[66%]">
                  66%
                </div>
              </div>
            </div>

            <div className="sm:space-y-3">
              <p>sample2.png</p>
              <div className=" bg-slate-200 shadow-3xl w-[98%] rounded-sm">
                <div className=" bg-[#2C2E43] h-10 flex justify-center items-center w-[36%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:pt-4 text-center">
          <button
            type="submit"
            className=" md:px-9 md:py-3 py-2 px-4 bg-[#FFD523] text-sm text-[#171717] rounded-[6px]"
          >
            <a href="/">Submit</a>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Upload;
