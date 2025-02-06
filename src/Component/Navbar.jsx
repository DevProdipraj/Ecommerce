import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-400">
      <div className="container">
        <div className="flex items-center justify-between py-3 h-[10%]">
        <div className="">
            <a href="#" className="text-red-400 text-2xl font-semibold">Eshop</a>
        </div>
        <div className="">
            <ul className="flex items-center justify-between gap-x-4 md:gap-x-10" >
                <li><a href="#">Home</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="">
            <button>Sing In</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
