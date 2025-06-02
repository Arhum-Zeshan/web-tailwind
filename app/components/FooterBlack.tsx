import React from "react";
import Link from "next/link";
const FooterBlack = () => {
  return (
    <footer className="bg-black text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-start md:flex-row flex-col flex-wrap">
        <div className="w-64 flex-shrink-0 mx-auto md:mx-0 text-center md:text-left">
          <Link
            href="http://localhost:3000/globalproject"
            className="flex items-center"
          >
            <img
              src="https://picsum.photos/536/354"
              className=" ml-4 size-16 rounded-full"
              alt="Flowbite Logo"
            />
          </Link>
          <p className="mt-2 text-md text-white text-left pt-2">
            Summarize your business so the visitor can learn about your
            offerings from any page on your website.
          </p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 mt-10 md:mt-0 text-center md:text-left">
          {[1, 2, 3, 4].map((col) => (
            <div key={col} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-white tracking-widest text-lg mb-3 font-bold">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 space-y-2">
                {["First", "Second", "Third", "Fourth"].map((item) => (
                  <li key={item}>
                    <a className="text-white hover:text-[#f08522] transition-colors duration-300">
                      {item} Link
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f08522]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
          <p className="text-sm text-white text-center font-semibold">
            Designed & Developed by Tech Buzz | Copyright © 2025 Global Desert
            @Arhum_Zeeshan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlack;
