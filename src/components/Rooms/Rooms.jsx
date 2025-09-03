import React from "react";

function Rooms() {
  return (
    <section className="rooms mt-[120px] w-auto h-[670px] bg-[#fcf8f3]">
      <div className="container max-w-[1440px] m-auto">
        <div className="rooms_wrapper  flex flex-col sm:flex-row md:gap-[40px] justify-between items-center px-5">
          <div className="left">
            <h3 className="font-bold text-[20px] mt-[20px] md:text-[30px] pl-[10px] lg:text-[40px] text-[#3a3a3a]">
              50+ Beautiful rooms <br /> inspiration
            </h3>
            <p className="font-medium text-[13px] md:text-[14px] pl-[10px] lg:text-[16px] text-[#616161] mt-[8px]">
              Our designer already made a lot of beautiful <br /> prototipe of
              rooms that inspire you
            </p>
            <button className="w-[176px] h-[48px] bg-[#b88e2f] hover:bg-[#a47d28] active:bg-[#8c6a22] transition-colors duration-300 font-semibold text-[16px] cursor-pointer leading-normal text-white mt-[24px] rounded-lg">
              Explore More
            </button>
          </div>

          <div className="right    flex flex-col sm:flex-row md:gap-[30px] gap-[24px] mt-[24px]">
            <img
              className="w-full  cursor-pointer transition-transform duration-500 hover:scale-110 sm:w-1/2 h-auto"
              src="/rooms.png"
              alt=""
            />{" "}
            <div className="flex items-center sm:w-1/2">
              <img
                className="w-full cursor-pointer transition-transform duration-500 hover:scale-110 h-auto"
                src="/rooms_two.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Rooms;
