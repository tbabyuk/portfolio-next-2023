import Link from "next/link";

export const Navbar = () => {

    return (
      <nav className="h-[50px] bg-gradient-to-r from-sky-950 to-sky-900 text-gray-100 flex justify-between items-center px-5 md:px-10">
        <div>PORTFOLIO</div>
        <ul className="flex">
          <li className="me-3 md:me-6"><a href="#about">About</a></li>
          <li className="me-3 md:me-6"><a href="#skills">Skills</a></li>
          <li className="me-3 md:me-6"><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  };