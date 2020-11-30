import React from "react";

const Navbar = () => {
  return (
    <>
      <header class="bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l center">
        <nav class="f6 ttu tracked">
          <a class="link dim white  mr3" href="#home" title="Home">
            Home
          </a>
          <a class="link dim white  mr3" href="#About" title="About">
            About
          </a>
          <a class="link dim white  mr3" href="#Bookroom" title="Store">
            Rooms
          </a>
          <a class="link dim white  mr3" href="#" title="Contact">
            Services
          </a>
          <a class="link dim white  mr3" href="#Gallery" title="fd">
            Gallery
          </a>
          <a class="link dim white  mr3" href="#" title="gr">
            See&Do
          </a>
          <a class="link dim white  mr3" href="#" title="gt">
            Contact
          </a>
          <button href="#Bookroom" class="mr3 f6">
            Book A Room
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
