"use client";

import React from "react";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";

function Footer() {

  // const rtl = isRtlLang(local)

  return (
    <footer>
      <div className="container mx-auto p-4 flex justify-between items-center ">
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center w-full">
            <Logo />
          </div>
          <div className="flex justify-center items-center w-full mt-4">
            <Navigation footer={true} />
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
