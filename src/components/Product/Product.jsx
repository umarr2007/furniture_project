import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/productid");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    navigate("/cart");
  };
  return (
    <section className="mt-[100px]">
      <div className="container max-w-[1440px] m-auto">
        <h3 className="font-bold text-[40px] text-center text-[#3a3a3a]">
          Our Products
        </h3>
        <div className="product_wrapper grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center  gap-[45px] mt-[35px]">
          <div
            onClick={handlePage}
            className="product_box transition-transform duration-500 hover:scale-118 cursor-pointer  relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div
            onClick={handlePage}
            className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden"
          >
            <img className="w-[285px] h-[301px]" src="/box.png" alt="" />

            <div className="product_text pl-[16px]">
              <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                Syltherine
              </h5>
              <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                Stylish cafe chair
              </h6>

              <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                  Rp 2.500.000
                </h3>
                <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                  Rp 3.500.000
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="absolute cursor-pointer top-1/3 left-1/2 -translate-x-1/2 
             w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] 
             bg-[#fff] px-6 py-2 rounded-md 
             opacity-0 group-hover:opacity-100 focus:opacity-100 active:opacity-100 
             transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="show_more flex justify-center items-center mt-[32px]">
          <button
            className="border-[1px] hover:bg-[#b88e2f] hover:text-white active:bg-[#a47d28] active:text-white 
            transition-colors duration-300 cursor-pointer hover:border-[#b88e2f]  w-[245px] h-[48px] bg-[#fff] font-semibold text-[16px] leading-normal text-[#b88e2f]"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
export default Product;
