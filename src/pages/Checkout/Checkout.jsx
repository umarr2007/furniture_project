import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import AboutService from "../../components/AboutService/AboutService";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <section className="cart bg-[url('/cart.png')] h-[560px] bg-cover bg-center bg-no-repeat">
        <Layout>
          <div className="container max-w-[1440px] m-auto">
            <div className="cart_wrapper flex justify-center items-center flex-col pt-[60px]">
              <img src="/cart_logo.svg" alt="" />
              <h3 className="font-medium text-[48px] text-[#000]">Checkout</h3>
              <div className="card_text_wrapper flex gap-[15px]">
                <Link className="font-medium text-[16px] text-[#000]" to={"/"}>
                  Home
                </Link>
                <Link className="font-light text-[16px] text-[#000]">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </section>

      <div className="checkout">
        <div className="checkout_container max-w-[1440px] m-auto">
          <div className="checkout_wrapper flex flex-col  lg:flex-row  lg:gap-[160px] mt-[90px]">
            <div className="checkout_left">
              <h3 className="font-semibold text-[30px] text-center md:text-[33px] lg:text-[36px] md:text-center text-[#000]">
                Billing Details
              </h3>
              <div className="checkout_inputs flex justify-center md:justify-center lg:justify-start  mt-[40px]  gap-[40px]">
                <div className="inputs_left mx-3 flex flex-col">
                  <label className="mb-2">First Name</label>
                  <input
                    className="border-[1px] border-[#9f9f9f] rounded-[10px] max-w-[211px] w-full h-[75px]"
                    type="text"
                  />
                </div>
                <div className="inputs_right mx-3 flex flex-col">
                  <label className="mb-2 ">Last Name</label>
                  <input
                    className="border-[1px]  border-[#9f9f9f] rounded-[10px] max-w-[211px] w-full h-[75px]"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-6 mt-9">
                {/* Company */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Company
                  </label>
                  <input
                    type="text"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Country
                  </label>
                  <input
                    type="text"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Street */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Town */}
                <div className="flex flex-col md:items-center mx-6 lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Town / City
                  </label>
                  <input
                    type="text"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Zip */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <label className="mb-2 text-sm font-medium text-[#000]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[55px] px-3"
                  />
                </div>

                {/* Additional info */}
                <div className="flex flex-col mx-6  md:items-center lg:items-start">
                  <input
                    type="text"
                    placeholder="Additional Information"
                    className="border border-[#9f9f9f] rounded-[10px] w-full max-w-[453px] h-[75px] px-3"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="checkout_right   max-w-[608px] h-[789px] px-[38px] w-full ">
                <div className="checkout_text flex justify-between pt-[87px]">
                  <h3 className="font-medium text-[24px] text-[#000]">
                    Product
                  </h3>
                  <h3 className="font-medium text-[24px] text-[#000]">
                    Subtotal
                  </h3>
                </div>

                <div className="checkout_text flex justify-between pt-[14px]">
                  <h3 className="font-normal text-[16px] text-[#9f9f9f]">
                    Asgaard sofa
                  </h3>
                  <h3 className="font-light text-[16px] text-[#000]">
                    Rs. 250,000.00
                  </h3>
                </div>

                <div className="checkout_text flex justify-between pt-[14px]">
                  <h3 className="font-normal text-[16px] text-[#000]">
                    Subtotal
                  </h3>
                  <h3 className="font-normal text-[16px] text-[#000]">
                    Rs. 250,000.00
                  </h3>
                </div>

                <div className="checkout_text flex justify-between pt-[14px]">
                  <h3 className="font-normal text-[16px] text-[#000]">Total</h3>
                  <h3 className="font-bold text-[24px] text-[#b88e2f]">
                    Rs. 250,000.00
                  </h3>
                </div>
                <hr className="border-[1px] border-[#9f9f9f] mt-[33px]" />

                <div className="direct_text pt-[23px]">
                  <h5 className="font-medium text-[16px] text-[#000]">
                    Direct Bank Transfer
                  </h5>
                  <p className="font-light text-[16px] text-justify text-[#9f9f9f] pt-[11px]">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won't be
                    shipped until the funds have cleared in our account.{" "}
                  </p>
                  <div className="checkbox_input gap-4 flex items-center pt-[25px]">
                    <input type="checkbox" />
                    <p className="font-light text-[16px]  text-[#9f9f9f] ">
                      Direct Bank Transfer
                    </p>
                  </div>

                  <div className="checkbox_input gap-4 flex items-center pt-[11px]">
                    <input type="checkbox" />
                    <p className="font-light text-[16px]  text-[#9f9f9f] ">
                      Cash On Delivery
                    </p>
                  </div>
                </div>

                <p className="font-[300] text-[16px] text-justify text-[#000] pt-[22px]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-[600]">privacy policy.</span>
                </p>
                <div className="checkout_button flex justify-center items-center pt-[33px]">
                  <button className="border-[1px] hover:bg-[#a47d28] active:bg-[#8c6a22] transition-colors duration-300 border-[#b88e2f] rounded-[15px] w-[318px] h-[64px]">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#b88e2f] hover:bg-[#a47d28] active:bg-[#8c6a22] transition-colors duration-300  rounded-[15px] cursor-pointer w-[318px] h-[64px] text-[#fff] text-[24px] mt-[30px] ml-[20px]"
          >
            Back
          </button>
        </div>
      </div>

      <AboutService />
      <Footer />
    </>
  );
}

export default Checkout;
