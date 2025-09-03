import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import AboutService from "../../components/AboutService/AboutService";
import Footer from "../../components/Footer/Footer";

function Comparasion() {
  return (
    <>
      <section className="cart bg-[url('/cart.png')] h-[560px] bg-cover bg-center bg-no-repeat">
        <Layout>
          <div className="container max-w-[1440px] m-auto">
            <div className="cart_wrapper flex justify-center items-center flex-col pt-[60px]">
              <img src="/cart_logo.svg" alt="" />
              <h3 className="font-medium text-[40px] px-3 text-center md:text-[44px] lg:text-[48px] text-[#000]">
                Product Comparison
              </h3>
              <div className="card_text_wrapper flex gap-[15px]">
                <Link className="font-medium text-[16px] text-[#000]" to={"/"}>
                  Home
                </Link>
                <Link className="font-light text-[16px] text-[#000]">Cart</Link>
              </div>
            </div>
          </div>
        </Layout>
      </section>

      <div className="container max-w-[1440px] m-auto">
        <div className="products_wrapper flex flex-col  lg:flex-row gap gap-[90px] px-3 ">
          <div className="text mt-[32px] flex flex-col items-center md:items-center md:justify-center ">
            <h2 className="font-medium text-[28px] leading-[1.265] text-[#000]">
              Go to Product <br /> page for more <br /> Products
            </h2>
            <p className="font-medium text-[20px] text-[#727272] mt-[21px]">
              View More
            </p>
            <hr className="border-[1px] w-[115px] border-[#727272] mt-1" />
          </div>

          <div className="box_wrapper grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 mt-[15px] place-items-center md:place-items-center  ">
            <div className="products">
              <img src="/products.png" alt="" />
              <h3 className="font-medium text-[24px] leading-[1.265] text-[#000] pt-[18px]">
                Asgaard Sofa
              </h3>
              <h4 className="font-medium text-[18px] text-[#000] pt-1">
                Rs. 250,000.00
              </h4>
              <div className="rating flex gap-4 pt-1 items-center">
                <p className="font-medium text-[18px] text-[#000]">4.7</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
                <p className="font-normal text-[13px] text-[#9f9f9f]">
                  204 Review
                </p>
              </div>{" "}
            </div>

            <div className="products">
              <img src="/products.png" alt="" />
              <h3 className="font-medium text-[24px] leading-[1.265] text-[#000] pt-[18px]">
                Outdoor Sofa Set
              </h3>
              <h4 className="font-medium text-[18px] text-[#000] pt-1">
                Rs. 250,000.00
              </h4>
              <div className="rating flex gap-4 items-center">
                <p className="font-medium text-[18px] text-[#000]">4.2</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
                <p className="font-normal text-[13px] text-[#9f9f9f]">
                  204 Review
                </p>
              </div>{" "}
            </div>

            <div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-[700] text-[24px] leading-[1.265] text-[#000]">
                  Add A Product
                </h3>
                <button className="rounded-[6px] mt-3 w-[242px] h-[39px] bg-[#b88e2f] hover:bg-[#a47d28] active:bg-[#8c6a22] transition-colors duration-300  font-semibold text-[14px] leading-[1.265] text-[#fff] m  ">
                  Choose a Product
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="general_text mt-[100px] ">
            <div className="general_text_wrapper flex flex-col md:flex-row px-5 md:gap-x-30  items-center">
              <div className="left">
                <h2 className="font-medium text-[28px] text-[#000]">General</h2>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="bottom mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="right mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>
            </div>
          </div>

          <div className="general_text mt-[100px] ">
            <div className="general_text_wrapper flex flex-col md:flex-row px-5 md:gap-x-30  items-center">
              <div className="left">
                <h2 className="font-medium text-[28px] text-[#000]">General</h2>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="bottom mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="right mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>
            </div>
          </div>

          <div className="general_text mt-[100px] ">
            <div className="general_text_wrapper flex  flex-col  md:flex-row  px-5 md:gap-x-30  items-center">
              <div className="left">
                <h2 className="font-medium text-[28px] text-[#000]">General</h2>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="bottom mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="right mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>
            </div>
          </div>

          <div className="general_text mt-[100px] ">
            <div className="general_text_wrapper flex  flex-col  md:flex-row  px-5 md:gap-x-30  items-center">
              <div className="left">
                <h2 className="font-medium text-[28px] text-[#000]">General</h2>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="bottom mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>

              <div className="right mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Sales Package
                </p>
              </div>
            </div>
          </div>
          {/* <div className="warranty_text mt-10 ">
            <div className="general_text_wrapper flex flex-col md:flex-row px-5 md:gap-x-30  md:items-center ">
              <div className="left">
                <h2 className="font-medium text-[28px] text-[#000]">
                  Warranty
                </h2>

                <p className="font-normal text-[18px] text-[#000] mt-5">
                  Warranty Summary{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[60px]">
                  Warranty Service <br /> Type{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[109px]">
                  Covered in Warranty{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[121px]">
                  Not Covered in <br /> Warranty{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[159px]">
                  Domestic Warranty{" "}
                </p>
              </div>

              <div className="bottom space-y-5 mt-[60px]">
                <p className="font-normal text-[18px] text-[#000]">
                  1 Year Manufacturing <br /> Warranty
                </p>
                <p className="font-normal text-[18px] text-[#000] mt-[34px]">
                  For Warranty Claims or <br /> Any Product Related <br />
                  Issues Please Email at <br /> operations@trevifurnitu <br />
                  re.com
                </p>
                <p className="font-normal text-[18px] text-[#000] mt-[35px]">
                  Warranty Against <br /> Manufacturing Defect
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[95px]">
                  For Warranty Claims or <br /> Any Product Related <br />{" "}
                  Issues Please Email at <br /> operations@trevifurnitu <br />
                  re.com{" "}
                </p>
                <p className="font-normal text-[18px] text-[#000] mt-[70px]">
                  1 Year
                </p>
                <button className="border-[1px] border-[#b88e2f] w-[215px] h-[64px] bg-[#b88e2f] font-normal text-[20px] text-[#fff]">
                  Add To Cart
                </button>
              </div>

              <div className="right mt-10">
                <p className="font-normal text-[18px] text-[#000] mt-5">
                  1.2 Year Manufacturing Warranty{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[59px]">
                  For Warranty Claims or <br /> Any Product Related <br />{" "}
                  Issues Please Email at <br /> operations@trevifurnitu <br />
                  re.com{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[35px]">
                  Warranty of the product <br /> is limited to <br />{" "}
                  manufacturing defects <br />
                  only.{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-10">
                  For Warranty Claims or <br /> Any Product Related <br />{" "}
                  Issues Please Email at <br /> operations@trevifurnitu <br />
                  re.com{" "}
                </p>

                <p className="font-normal text-[18px] text-[#000] mt-[90px]">
                  3 Months{" "}
                </p>

                <div className="button">
                  <button className="border-[1px] border-[#b88e2f] w-[215px] h-[64px] bg-[#b88e2f] font-normal text-[20px] text-[#fff]">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>


      </div>
        <AboutService/>

        <Footer/>
    </>
  );
}

export default Comparasion;
