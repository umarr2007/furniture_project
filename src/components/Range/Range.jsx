import React from "react";

function Range() {
  return (
    <section className="range mt-[60px]">
      <div className="container max-w-[1440px] m-auto">
        <div className="range_text">
          <h2 className="font-bold text-[32px] text-[#333] text-center">
            Browse The Range
          </h2>
          <p className="font-normal text-[20px] text-center text-[#666] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="range_wrapper grid lg:grid-cols-3 md:grid-cols-1 gap-[90px] place-items-center mt-[63px] ">
          <div className="range_box max-w-[381px] h-[480px] w-full  ">
            <img src="/card.svg" alt="" />
            <p className="font-semibold text-[24px] text-center text-[#333] mt-[30px]">
              Dining
            </p>
          </div>

          <div className="range_box max-w-[381px] h-[480px] w-full">
            <img src="/card.svg" alt="" />
            <p className="font-semibold text-[24px] text-center text-[#333] mt-[30px]">
              Living{" "}
            </p>
          </div>

          <div className="range_box max-w-[381px] h-[480px]">
            <img src="/card.svg" alt="" />
            <p className="font-semibold text-[24px] text-center text-[#333] mt-[30px]">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Range;
