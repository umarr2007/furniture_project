import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AboutService from "../../components/AboutService/AboutService";
import Footer from "../../components/Footer/Footer";
function Contact() {
  return (
    <>
      <div>
        <section className="cart bg-[url('/cart.png')] h-[560px] bg-cover bg-center bg-no-repeat">
          <Layout>
            <div className="container max-w-[1440px] m-auto">
              <div className="cart_wrapper flex justify-center items-center flex-col pt-[60px]">
                <img src="/cart_logo.svg" alt="" />
                <h3 className="font-medium text-[48px] text-[#000]">Contact</h3>
                <div className="card_text_wrapper flex gap-[15px]">
                  <Link
                    className="font-medium text-[16px] text-[#000]"
                    to={"/"}
                  >
                    Home
                  </Link>
                  <Link className="font-light text-[16px] text-[#000]">
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </section>
      </div>
      <div>
        <section className="contact ">
          <div className="container max-w-[1140px] m-auto">
            {/* Title */}
            <div className="contact_text mt-[60px]">
              <h3 className="font-semibold text-[28px] md:text-[36px] text-[#000] text-center">
                Get In Touch With Us
              </h3>
              <p className="font-normal text-[14px] md:text-[16px] text-center text-[#9f9f9f] mt-[10px] leading-relaxed">
                For More Information About Our Product & Services. Please Feel
                Free To Drop Us <br className="hidden md:block" /> An Email. Our
                Staff Always Be There To Help You Out. Do Not Hesitate!
              </p>
            </div>

            <div className="contact_wrapper flex flex-col md:flex-row items-center  gap-[10px] mt-[50px]">
              <div className="contact_icons flex-1  ">
                <div className="contact_box flex  gap-[20px]">
                  <LocationOnIcon className="text-[#b88e2f]" />
                  <div>
                    <h3 className="font-medium text-[20px] md:text-[24px] text-[#000]">
                      Address
                    </h3>
                    <p className="font-normal text-[14px] md:text-[16px] text-[#000]">
                      236 5th SE Avenue, New <br /> York NY10000, United <br />
                      States
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="contact_box mt-[40px] flex items-start gap-[20px]">
                  <LocationOnIcon className="text-[#b88e2f]" />
                  <div>
                    <h3 className="font-medium text-[20px] md:text-[24px] text-[#000]">
                      Phone
                    </h3>
                    <p className="font-normal text-[14px] md:text-[16px] text-[#000]">
                      Mobile: + (84) 546-6789 <br />
                      Hotline: + (84) 456-6789
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="contact_box mt-[40px] flex items-start gap-[20px]">
                  <LocationOnIcon className="text-[#b88e2f]" />
                  <div>
                    <h3 className="font-medium text-[20px] md:text-[24px] text-[#000]">
                      Working Time
                    </h3>
                    <p className="font-normal text-[14px] md:text-[16px] text-[#000]">
                      Monday–Friday: 9:00 – 22:00 <br />
                      Saturday–Sunday: 9:00 – 21:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - form */}
              <div className="contact_inputs flex-1 w-full mt-[10px] pr-6">
                <form className="form flex flex-col justify-center gap-[20px] md:gap-[30px] w-full">
                  <input
                    className="border border-[#9f9f9f] rounded-[10px] w-full h-[55px] md:h-[65px] px-4 font-normal text-[14px] md:text-[16px] text-[#333]"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="border border-[#9f9f9f] rounded-[10px] w-full h-[55px] md:h-[65px] px-4 font-normal text-[14px] md:text-[16px] text-[#333]"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="border border-[#9f9f9f] rounded-[10px] w-full h-[55px] md:h-[65px] px-4 font-normal text-[14px] md:text-[16px] text-[#333]"
                    type="text"
                    placeholder="Subject"
                  />
                  <textarea
                    className="border border-[#9f9f9f] rounded-[10px] w-full h-[120px] md:h-[150px] p-4 font-normal text-[14px] md:text-[16px] text-[#333]"
                    placeholder="Message"
                  />
                  <button className="border border-[#b88e2f] cursor-pointer hover:bg-[#a47d28] active:bg-[#8c6a22] transition-colors duration-300  rounded-[5px] w-[160px] md:w-[200px] h-[45px] md:h-[55px] bg-[#b88e2f] font-medium text-[14px] md:text-[16px] text-[#fff] self-start">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>


          <AboutService/>

          <Footer/>
        </section>
      </div>
    </>
  );
}

export default Contact;
