import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import AnimatedCursor from "react-animated-cursor";
const Layout = async ({ children }: { children: ReactNode }) => {

  return (
    <>
      {/* <AnimatedCursor color="	91,120,246" /> */}
      <Header />
      <main>
        <div className="container mx-auto p-4">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
