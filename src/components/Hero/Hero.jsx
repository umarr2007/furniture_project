import React from "react";

function Hero() {
  return (
    <section className="hero bg-[url('/flower.png')] h-[800px] mt- flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="container max-w-[1440px] mx-auto">
        <div className="hero_wrapper flex justify-end  ">
          <div className="box rounded-[10px] w-[643px] h-auto pb-[20px] bg-[#fff3e3]">
            <div className="box_text px-[41px] pt-[62px]">
              <h2 className="font-semibold text-[16px] md:text-[13px] tracking-[0.19em] text-[#333]">
                New Arrival
              </h2>
              <h1 className="font-bold text-[20px] lg:text-[52px] md:text-[40px] text-[#b88e2f]">
                Discover Our New Collection
              </h1>
              <p className="font-medium  text-[14px] lg:text-[18px] md:text-[16px] leading-[1.33333] text-[#333] mt-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br /> elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="px-[72px] py-[25px] w-[222px] mt-[46px] h-[74px] cursor-pointer bg-[#b88e2f] hover:bg-[#a47d28] active:bg-[#8c6a22] transition-colors duration-300 font-bold text-[16px] uppercase text-[#fff]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
