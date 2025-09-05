import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-14 w-full relative">
      <div
        className="mx-auto max-w-[1240px] px-4 py-10 grid gap-8 
                   grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      >
        <div>
          <h2 className="font-bold text-2xl mb-4">Funiro.</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 text-sm uppercase mb-4">Links</h3>
          <ul className="space-y-2 flex flex-col">
            <Link to="/" className="font-medium hover:text-[#fca311] active:text-[#92651d]   text-black cursor-pointer">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-[#fca311] active:text-[#92651d] text-black cursor-pointer">
              Shop
            </Link>
            <Link className="font-medium text-black hover:text-[#fca311] active:text-[#92651d] cursor-pointer">About</Link>
            <Link
              to="/contact"
              className="font-medium hover:text-[#fca311] active:text-[#92651d] text-black cursor-pointer"
            >
              Contact
            </Link>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 text-sm uppercase mb-4">Help</h3>
          <ul className="space-y-2">
            <li className="font-medium text-black cursor-pointer">
              Payment Options
            </li>
            <li className="font-medium text-black cursor-pointer">Returns</li>
            <li className="font-medium text-black cursor-pointer">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400 text-sm uppercase mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row sm:items-center border-b border-black pb-2 gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 outline-none text-sm placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center py-4">
          2023 Funiro. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
