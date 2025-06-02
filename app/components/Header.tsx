import React from "react";
import Link from "next/link"

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link className="mr-5 hover:text-gray-900" href="http://localhost:3000/tailblock">Home</Link>
          <Link
            className="mr-5 hover:text-gray-900"
            href="http://localhost:3000/about"
          >
            About Us
          </Link>
          <Link
            className="mr-5 hover:text-gray-900 "
            href="http://localhost:3000/contact"
          >
            Contact Us
          </Link>
          <Link className="hover:text-gray-900" href="https://discord.com/">
            Discord
          </Link>
        </nav>

        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 hover:cursor-default">
          <span className="ml-3 text-xl">My Project</span>
        </a>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 space-x-4">
          <Link
            className="inline-flex items-center hover:bg-indigo-600 hover:text-white border-0 py-1 px-3 focus:outline-none bg-white text-indigo-600 rounded text-base mt-4 md:mt-0"
            href="http://localhost:3000/signin"
          >
            Sign In
          </Link>
          <Link
            className="inline-flex items-center  hover:bg-indigo-600 hover:text-white border-0 py-1 px-3 focus:outline-none bg-white text-indigo-600  rounded text-base mt-4 md:mt-0"
            href="http://localhost:3000/register"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
