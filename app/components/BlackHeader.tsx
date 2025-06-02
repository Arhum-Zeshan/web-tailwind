import React from "react";
import Link from "next/link";
const BlackHeader = () => {
  return (
    <header>
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sticky">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            href="http://localhost:3000/globalproject"
            className="flex items-center"
          >
            <img
              src="https://picsum.photos/536/354"
              className=" ml-4 size-20 rounded-full"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white dark:text-white  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#F08522] font-bold bg-primary-700 hover:bg-primary-800  border hover:bg-[#F08522] hover:text-white rounded-lg text-sm hover:border-[#F08522] px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Book Online
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-thin text-sm py-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="http://localhost:3000/globalproject"
                  className="block py-2 pr-4 pl-3 text-white rounded hover:text-[#F08522] lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white focus:text-[#F08522] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="http://localhost:3000/Quadbiking"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#F08522] lg:hover:bg-transparent focus:text-[#F08522] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Quad Biking Dubai
                </Link>
              </li>
              <li>
                <Link
                  href="http://localhost:3000/FamilyBuggiesDubai"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#F08522] lg:hover:bg-transparent focus:text-[#F08522] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Family Buggies Dubai
                </Link>
              </li>
              <li>
                <Link
        
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#F08522] lg:hover:bg-transparent focus:text-[#F08522] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dune Buggy Dubai
                </Link>
              </li>
              <li>
                <Link
                  href="http://localhost:3000/partner"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#F08522] lg:hover:bg-transparent focus:text-[#F08522] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Partner
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-[#F08522] lg:hover:bg-transparent focus:text-[#F08522] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BlackHeader;
