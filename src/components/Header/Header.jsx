import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <header className="header bg-[#fff] w-auto h-[100px]">
      <div className="container max-w-[1440px] m-auto mt-[40px]">
        <div className="header_wrapper flex justify-between items-center  ">
          <div className="logo">
            <img src="/furniro.png" alt="" />
          </div>
          <div className="header_link  hidden sm:flex lg:gap-[70px] md:flex gap-[20px]   ">
            <Link to={"/"} className="font-medium text-[16px] text-[#000]">
              Home
            </Link>
            <Link to={"/shop"} className="font-medium text-[16px] text-[#000]">
              Shop
            </Link>

            <Link className="font-medium text-[16px] text-[#000]">About</Link>

            <Link
              to={"/contact"}
              className="font-medium text-[16px] text-[#000]"
            >
              Contact
            </Link>
          </div>

          <button onClick={() => setOpen(true)} className=" sm:hidden text-2xl">
            ☰
          </button>

          {open && (
            <div className="menu fixed inset-0 bg-[#fff] flex flex-col items-center z-[9999] justify-center gap-[30px] ">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-2xl"
              >
                ✖
              </button>
              <Link to={"/"} className="font-medium text-[16px] text-[#000]">
                Home
              </Link>
              <Link
                to={"/shop"}
                className="font-medium text-[16px] text-[#000]"
              >
                Shop
              </Link>

              <Link className="font-medium text-[16px] text-[#000]">About</Link>

              <Link className="font-medium text-[16px] text-[#000]">
                Contact
              </Link>

              <PersonIcon />
              <SearchIcon />
              <FavoriteBorderIcon />
              <ShoppingBagIcon onClick={() => setOpened(true)} />
            </div>
          )}

          <div className="header_icons hidden sm:flex lg:gap-[44px] md:gap-[29px]">
            <PersonIcon />
            <SearchIcon />
            <FavoriteBorderIcon />
            <ShoppingBagIcon onClick={() => setOpened(true)} />
          </div>
        </div>
      </div>

      <Modal open={opened} handleClose={() => setOpened(false)} />
    </header>
  );
}

export default Header;
