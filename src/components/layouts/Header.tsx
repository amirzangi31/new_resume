"use client";


import { usePathname } from "next/navigation";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useScroll , motion,useSpring } from "framer-motion";



function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  
const t = useTranslations("resume")


  const pathname = usePathname()

  const showMenuHandler = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
      setShowMenu(false)
  } , [pathname])




  return (
    <header>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="container mx-auto p-4 flex justify-between items-center ">
        <Logo />
        <Navigation show={showMenu} setShow={setShowMenu} />
        <div className="navigation__hamburger-btn" onClick={showMenuHandler}>
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className="hidden md:block">
          <a href={"/resume.pdf"}  className="btn btn-primary font-bold" download>{t("resume")}</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
