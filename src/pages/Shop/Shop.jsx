import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import AboutService from "../../components/AboutService/AboutService";

function Shop() {
  const products = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/box.png",
  }));

  const [page, setPage] = useState(1);
  const itemsPerPage = 16;
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <section className="cart bg-[url('/cart.png')] h-[460px] bg-cover bg-center bg-no-repeat">
        <Layout>
          <div className="container max-w-[1440px] m-auto">
            <div className="shop_wrapper flex justify-center items-center flex-col pt-[70px]">
              <h3 className="font-medium text-[48px] text-[#000]">Shop</h3>
              <div className="shop_text_wrapper flex justify-center gap-[15px]">
                <Link className="font-medium text-[16px] text-[#000]" to={"/"}>
                  Home
                </Link>
                <Link className="font-light text-[16px] text-[#000]">Shop</Link>
              </div>
            </div>
          </div>
        </Layout>
      </section>

      <div className="shop_box   w-full h-auto bg-[#f9f1e7] rounded-md">
        <div className="shop_wrapper pb-[12px] flex flex-col   md:flex-row gap-[30px]   justify-between items-center pt-[20px] ">
          <div className=" left flex gap-[20px] items-center pl-[25px] ">
            <img src="/filter.svg" alt="" />
            <p className="font-normal text-[20px] text-[#000]">Filter</p>
            <img src="/double.svg" alt="" />
            <img src="/thing.svg" alt="" />
            <h3 className="font-normal text-[12px] md:text-[14px] lg:text-[13px] text-[#000]">
              Showing 1–16 of 32 results
            </h3>
          </div>

          <div className="right flex  items-center gap-[20px]  sm:pr-[60px] ">
            <div className="show flex gap-[20px] items-center">
              <h3 className="font-normal text-[13px] md:text-[16px] lg:text-[20px] text-[#000]">
                Show
              </h3>
              <button className="w-[55px] h-[55px] bg-[#fff]">16</button>
            </div>
            <div className="short_by flex gap-[20px] items-center">
              <h5 className="font-normal text-[12px] md:text-[16px] lg:text-[20px] text-[#000]">
                Short by
              </h5>
              <button className="max-w-[150px] w-full h-[45px] md:w-[165px] lg:w-[188px]  bg-[#fff]">
                Default
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Product List */}
        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 12 }}>
          <Grid container spacing={2} justifyContent="center">
            {selectedProducts.map((product) => (
              <Grid xs={4} sm={6} md={3} key={product.id}>
                <div className="product_box cursor-pointer transition-transform duration-500 hover:scale-110 relative max-w-[285px] h-[446px] w-full bg-[#f4f5f7] group overflow-hidden">
                  <img
                    className="w-[285px] h-[301px]"
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="product_text pl-[16px]">
                    <h5 className="font-semibold text-[24px] text-[#2e2d2d] pt-[16px]">
                      {product.title}
                    </h5>
                    <h6 className="font-medium text-[16px] leading-normal text-[#898989] pt-[10px]">
                      {product.desc}
                    </h6>

                    <div className="product_text_wrapper flex items-center gap-[16px] pt-[10px]">
                      <h3 className="font-semibold text-[20px] leading-normal text-[#3a3a3a]">
                        {product.price}
                      </h3>
                      <p className="font-normal text-[16px] leading-normal line-through text-[#b0b0b0]">
                        {product.oldPrice}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/cart")}
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[202px] h-[48px] font-semibold text-[16px] text-[#b88e2f] bg-[#fff] px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="primary"
              size="large"
            />
          </Box>
        </Box>
      </div>

     <AboutService/>
      <Footer />
    </>
  );
}

export default Shop;
