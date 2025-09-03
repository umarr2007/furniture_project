import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const iconStyle = (iconName) => ({
    fontSize: 48,
    color: activeIcon === iconName ? "#1976d2" : "#757575",
    backgroundColor: activeIcon === iconName ? "#e3f2fd" : "transparent",
    padding: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: activeIcon === iconName ? "scale(0.95)" : "scale(1)",
    boxShadow: activeIcon === iconName ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
    margin: "0 10px",
    "&:hover": {
      color: "#1565c0",
      backgroundColor: "#f5f5f5",
      transform: "scale(1.1)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
  });

  const handleMouseEnter = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  const handleMouseDown = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleMouseUp = () => {
    setActiveIcon(null);
  };
  return (
    <header className="header bg-[#fff] w-auto h-[100px]">
      <div className="container max-w-[1440px] m-auto mt-[40px]">
        <div className="header_wrapper flex justify-between items-center  ">
          <div className="logo">
            <img
              className="cursor-pointer"
              onClick={() => navigate("/")}
              src="/furniro.png"
              alt=""
            />
          </div>
          <div className="header_link  hidden sm:flex lg:gap-[70px] md:flex gap-[20px]   ">
            <Link
              to={"/"}
              className="font-medium hover:text-[#fca311] text-[16px] text-[#000]"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="font-medium hover:text-[#fca311] text-[16px] text-[#000]"
            >
              Shop
            </Link>

            <Link className="font-medium hover:text-[#fca311] text-[16px] text-[#000]">
              About
            </Link>

            <Link
              to={"/contact"}
              className="font-medium hover:text-[#fca311] text-[16px] text-[#000]"
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

          <div className="header_icons   hidden sm:flex ">
            <PersonIcon
              style={iconStyle("person")}
              onMouseEnter={() => handleMouseEnter("person")}
              onMouseLeave={handleMouseLeave}
              onMouseDown={() => handleMouseDown("person")}
              onMouseUp={handleMouseUp}
            />
            <SearchIcon
              style={iconStyle("search")}
              onMouseEnter={() => handleMouseEnter("search")}
              onMouseLeave={handleMouseLeave}
              onMouseDown={() => handleMouseDown("search")}
              onMouseUp={handleMouseUp}
            />

            <FavoriteBorderIcon
              style={iconStyle("favorite")}
              onMouseEnter={() => handleMouseEnter("favorite")}
              onMouseLeave={handleMouseLeave}
              onMouseDown={() => handleMouseDown("favorite")}
              onMouseUp={handleMouseUp}
            />

            <ShoppingBagIcon
              style={iconStyle("shopping")}
              onMouseEnter={() => handleMouseEnter("shopping")}
              onMouseLeave={handleMouseLeave}
              onMouseDown={() => handleMouseDown("shopping")}
              onMouseUp={handleMouseUp}
              onClick={() => setOpened(true)}
            />
          </div>
        </div>
      </div>

      <Modal open={opened} handleClose={() => setOpened(false)} />
    </header>
  );
}

export default Header;
