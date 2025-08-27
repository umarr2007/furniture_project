import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import Footer from "../../components/Footer/Footer";

function Cart() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="cart bg-[url('/cart.png')] h-[560px] bg-cover bg-center bg-no-repeat">
        <Layout>
          <div className="container max-w-[1440px] m-auto">
            <div className="cart_wrapper flex justify-center items-center flex-col pt-[60px]">
              <img src="/cart_logo.svg" alt="" />
              <h3 className="font-medium text-[48px] text-[#000]">Cart</h3>
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
      <div className="container_2 max-w-[1440px] m-auto px-4">
        {/* Cart Header */}
        <div className="cart_box mt-6 lg:mt-[75px] w-full h-auto bg-[#f9f1e7] rounded-md">
          <div className="cart_box_wrapper flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-[30px] md:gap-[50px] lg:gap-[90px] py-[15px] px-4">
            <h3 className="font-medium text-[13px] md:text-[14px] lg:text-[16px] text-[#000]">
              Product
            </h3>
            <h3 className="font-medium text-[13px] md:text-[14px] lg:text-[16px] text-[#000]">
              Price
            </h3>
            <h3 className="font-medium text-[13px] md:text-[14px] lg:text-[16px] text-[#000]">
              Quantity
            </h3>
            <h3 className="font-medium text-[13px] md:text-[14px] lg:text-[16px] text-[#000]">
              Subtotal
            </h3>
          </div>
        </div>

        {/* Cart Body */}
        <div className="boxses_wrapper flex flex-col lg:flex-row gap-[30px] lg:gap-[40px] mt-[40px]">
          {/* Sofa Item */}
          <div className="sofa_wrapper flex flex-col sm:flex-row lg:items-center gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[60px]">
            <div className="left flex justify-center sm:justify-start">
              <img
                src="/sofa.png"
                alt="sofa"
                className="w-[120px] sm:w-[150px] lg:w-[200px]"
              />
            </div>
            <div className="right flex-1">
              <div className="right_wrapper flex flex-col sm:flex-row sm:items-center justify-between sm:gap-[30px] md:gap-[40px] lg:gap-[75px]">
                <h2 className="font-[500] text-[12px] text-center  md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                  Asgaard sofa
                </h2>
                <h3 className="font-[500] text-[12px] text-center mt-[10px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                  Rs. 250,000.00
                </h3>
                <div className="quantity  flex justify-center mt-[10px] gap-[10px]">
                  <button className="border border-[#9f9f9f] rounded-[5px] w-[32px] h-[32px]">
                    1
                  </button>
                </div>
                <p className="font-[500] text-[12px] text-center mt-[10px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                  Rs. 250,000.00
                </p>
                <div className="delete flex justify-center mt-[10px]">
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="box w-full lg:w-[393px] h-auto bg-[#f9f1e7] rounded-md p-6">
            <h2 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] text-[#000] text-center">
              Cart Totals
            </h2>

            <div className="box_wrapper flex justify-between items-center mt-6 px-2">
              <h3 className="font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#000]">
                Subtotal
              </h3>
              <h3 className="font-[500] text-[12px] md:text-[14px] lg:text-[16px] text-[#9f9f9f]">
                Rs. 250,000.00
              </h3>
            </div>

            <div className="box_wrapper_rs flex justify-between items-center mt-6 px-2">
              <h3 className="font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#000]">
                Total
              </h3>
              <p className="font-[500] text-[12px] md:text-[14px] lg:text-[16px] text-[#b88e2f]">
                Rs. 250,000.00
              </p>
            </div>
            <button className="border-[1px] mt-[45px] border-[#000] rounded-[15px] w-full h-[58px] font-normal text-[20px] text-[#000]">
              Checkout
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-[72px] py-[25px] w-[200px] rounded-[12px] mt-[46px] h-[74px] bg-[#b88e2f] font-bold text-[16px] uppercase text-[#fff]"
        >
          Back
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
