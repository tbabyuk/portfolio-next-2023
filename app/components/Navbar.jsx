"use client"

import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx"
import { useState } from "react";


export const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    return (
      <nav className="h-[50px] w-full bg-gradient-to-r from-gray-800 to-gray-500 text-gray-50 flex justify-between items-center px-5 md:px-10 z-50">
        <Link href="/">MY PORTFOLIO</Link>
        <RxHamburgerMenu className="md:hidden hover:cursor-pointer text-3xl" onClick={() => setDropdownIsOpen(!dropdownIsOpen)} />
          <ul
              className={`md:flex ${dropdownIsOpen ? "flex mt-100 h-[220px] flex-col items-center justify-center gap-5 z-10 bg-black bg-opacity-80 absolute right-0 top-[50px] w-[188px] rounded-b-md" : "hidden"}`}>
                  <li className="md:me-6 hover:-rotate-3 hover:text-gray-300" onClick={() => setDropdownIsOpen(false)}><a href="/#about">About</a></li>
                  <li className="md:me-6 hover:-rotate-3 hover:text-gray-300" onClick={() => setDropdownIsOpen(false)}><a href="/#skills">Skills</a></li>
                  <li className="md:me-6 hover:-rotate-3 hover:text-gray-300" onClick={() => setDropdownIsOpen(false)}><a href="/#projects">Projects</a></li>
                  <li className="hover:-rotate-3 hover:text-gray-300" onClick={() => setDropdownIsOpen(false)}><a href="/#contact">Contact</a></li>
          </ul>
      </nav>
    );
  };