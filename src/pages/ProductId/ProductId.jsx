import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import Footer from "../../components/Footer/Footer";
function ProductId() {
  const [value, setValue] = React.useState(5);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <section>
        <Layout>
          <div className="w-full h-auto pb-5 bg-[#f9f1e7]">
            <div className="text_wrapper flex flex-col md:flex-row  lg:flex-row items-center  pt-[40px] gap-[35px] pl-[40px]">
              <Link
                to={"/"}
                className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]"
              >
                Home
              </Link>
              <Link
                to={"/shop"}
                className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]"
              >
                Shop
              </Link>
              <p className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#000]">
                Asgaard sofa
              </p>
            </div>
          </div>

          <div className="container max-w-[1640px] m-auto">
            <div className="product_detail_wrapper flex flex-col md:items-center lg:flex-row lg:items-start justify-center mt-[40px] gap-[80px]">
              {" "}
              <div className="button_box rounded-[10px] max-w-[423px] w-full h-[500px] bg-[#f9f1e7] ">
                {" "}
                <div className="image flex pt-[80px] items-center justify-center">
                  {" "}
                  <img src="/sofa_2.png" alt="" />{" "}
                </div>{" "}
              </div>{" "}
              <div className="detail_text flex-1">
                {" "}
                <h2 className="font-normal text-[35px] md:text-[37px] lg:text-[42px] text-[#000] text-center md:text-center lg:text-left">
                  {" "}
                  Asgaard sofa{" "}
                </h2>{" "}
                <h3 className="font-medium text-[18px] md:text-[22px] lg:text-[24px] text-[#9f9f9f] text-center md:text-center lg:text-left">
                  {" "}
                  Rs. 250,000.00{" "}
                </h3>{" "}
                <div className="detail_rating flex justify-center md:justify-center lg:justify-start ">
                  {" "}
                  <Box sx={{ "& > legend": { mt: 2 } }}>
                    {" "}
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />{" "}
                  </Box>{" "}
                </div>{" "}
                <p className="font-normal max-w-[424px] text-[12px] md:text-[14px] ml-[10px] lg:text-[16px] mt-[18px] text-[#000]">
                  {" "}
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.{" "}
                </p>{" "}
                <p className="font-semibold text-[12px] text-center md:text-[13px] lg:text-[16px] mt-[18px] lg:text-left">
                  {" "}
                  Size{" "}
                </p>{" "}
                <div className="detail_size flex justify-center gap-[20px] lg:justify-start mt-[15px]">
                  {" "}
                  <button className="rounded-[5px] w-[30px] h-[30px] bg-[#f9f1e7] font-normal text-[13px] text-[#000]">
                    {" "}
                    L{" "}
                  </button>{" "}
                  <button className="rounded-[5px] w-[30px] h-[30px] bg-[#f9f1e7] font-normal text-[13px] text-[#000]">
                    {" "}
                    XL{" "}
                  </button>{" "}
                  <button className="rounded-[5px] w-[30px] h-[30px] bg-[#f9f1e7] font-normal text-[13px] text-[#000]">
                    {" "}
                    XS{" "}
                  </button>{" "}
                </div>{" "}
                <div className="detail_button mt-[70px] flex flex-col sm:flex-row gap-[22px] w-full">
                  {" "}
                  <div className="flex items-center justify-between  gap-[10px] border border-[#9f9f9f] rounded-[10px] sm:max-w-[123px] w-full h-[64px] bg-[#fff] px-3">
                    {" "}
                    <button
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                      className="font-medium text-[20px] text-[#000]"
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                    <span className="font-medium text-[16px] text-[#000]">
                      {" "}
                      {count}{" "}
                    </span>{" "}
                    <button
                      onClick={() => setCount(count + 1)}
                      className="font-medium text-[20px] text-[#000]"
                    >
                      {" "}
                      +{" "}
                    </button>{" "}
                  </div>{" "}
                  <button
                    onClick={() => navigate("/cart")}
                    className="border-[1px] cursor-pointer border-[#000] rounded-[15px] sm:max-w-[215px] w-full h-[64px] font-normal text-[20px] text-[#000]"
                  >
                    {" "}
                    Add to Cart{" "}
                  </button>{" "}
                  <button className="border-[1px] border-[#000] rounded-[15px] sm:max-w-[215px] w-full h-[64px] font-normal text-[20px] text-[#000]">
                    {" "}
                    Compare{" "}
                  </button>{" "}
                </div>{" "}
                <hr className="border-[1px] border-[#9f9f9f] max-w-[605px] w-full mt-[30px]" />{" "}
                <div className="about_wrapper mt-[41px]">
                  {" "}
                  <div className="about flex justify-center md:justify-center lg:justify-start gap-[25px] mt-[12px]">
                    {" "}
                    <h3 className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      SKU :{" "}
                    </h3>{" "}
                    <p className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      SS001{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="about flex justify-center md:justify-center lg:justify-start gap-[25px] mt-[12px]">
                    {" "}
                    <h3 className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      Category :{" "}
                    </h3>{" "}
                    <p className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      Sofas{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="about flex justify-center md:justify-center lg:justify-start gap-[25px] mt-[12px]">
                    {" "}
                    <h3 className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      Tags :{" "}
                    </h3>{" "}
                    <p className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      Sofa, Chair, Home, Shop{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="about flex justify-center md:justify-center lg:justify-start gap-[25px] mt-[12px]">
                    {" "}
                    <h3 className="font-normal text-[13px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                      {" "}
                      Share:{" "}
                    </h3>{" "}
                    <div className="icons flex gap-[15px]">
                      {" "}
                      <FacebookIcon /> <LinkedInIcon /> <TwitterIcon />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <hr className="border-[1px] border-[#9f9f9f]  w-full mt-[30px]" />

          <div className="container_information max-w-[1640px] m-auto  mt-[30px]">
            <div className="information_text flex flex-col  md:flex-row lg:flex-row justify-center items-center gap-[35px] mt-[50px]">
              <h3 className="font-[500]  text-[18px] md:text-[22px] lg:text-[24px] text-[#000]">
                Description
              </h3>
              <h3 className="font-[500]  text-[18px] md:text-[22px] lg:text-[24px] text-[#000]">
                Additional Information
              </h3>
              <h3 className="font-[500]  text-[16px] md:text-[22px] lg:text-[24px] text-[#000]">
                Reviews [5]
              </h3>
            </div>
            <div className="description">
              <div className="description_text max-w-[900px] m-auto mt-[50px]">
                <h5 className="font-normal text-[14px] md:text-[15px] lg:text-[16px] pl-3 pr-3 text-justify text-[#9f9f9f]">
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </h5>
              </div>

              <div className="description_text max-w-[900px] m-auto mt-[50px]">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] pl-3 pr-3 text-justify text-[#9f9f9f]">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>

                <div className="images_wrapper flex flex-col md:flex-row lg:flex-row justify-center items-center gap-[30px] ">
                  <div className="information_images_box w-auto   h-auto bg-[#f9f1e7] rounded-md mt-[50px]">
                    <div className="">
                      <img src="/sofa_3.png" alt="" />
                    </div>
                  </div>

                  <div className="information_images_box w-auto  h-auto bg-[#f9f1e7] rounded-md mt-[50px]">
                    <img src="/sofa_3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[1px] border-[#9f9f9f]  w-full mt-[60px]" />

          <div className="realated_container max-w-[1640px] m-auto">
            <h2 className="font-medium text-[28px] md:text-[33px] lg:text-[36px] text-[#000] mt-[55px] text-center">
              Related Products
            </h2>

            <div className="realated_wrapper grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-4 gap-[35px] mt-[30px] ">
              <div className="product_box relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden">
                <img className="w-[285px] h-[301px]" src="/img.png" alt="" />

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
              </div>

              <div className="product_box relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden">
                <img className="w-[285px] h-[301px]" src="/img.png" alt="" />

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
              </div>

              <div className="product_box relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden">
                <img className="w-[285px] h-[301px]" src="/img.png" alt="" />

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
              </div>

              <div className="product_box relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden">
                <img className="w-[285px] h-[301px]" src="/img.png" alt="" />

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
              </div>
            </div>
            <div className="show_more flex justify-center items-center mt-[45px]">
              <button className="border-[1px] cursor-pointer  border-[#b88e2f] w-[245px] h-[48px] bg-[#fff] font-semibold text-[16px] leading-normal text-[#b88e2f]">
                Show More
              </button>
            </div>
          </div>

          <Footer />
        </Layout>
      </section>
    </>
  );
}

export default ProductId;
