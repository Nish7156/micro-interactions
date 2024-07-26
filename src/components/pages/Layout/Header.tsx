import React from "react";
import { DockDemo } from "./DockDemo";

function Header() {
  return (
    <div className="sticky top-0 py-5 z-[100] bg-inherit backdrop-filter backdrop-blur-lg bg-opacity-30 border-b dark:border-gray-800">
      <div className="container ">
        <div className="flex items-center justify-end">

        <DockDemo/>
        </div>
      </div>
    </div>
  );
}

export default Header;
