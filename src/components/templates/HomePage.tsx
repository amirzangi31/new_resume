"use client"

import SiteLoader from "@/components/modules/SiteLoader";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import ProjectCard from "../modules/ProjectCard";
import CredentialCard from "../modules/CredentialCard";
import LetsCard from "../modules/LetsCard";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";


export default function HomePage() {

  const t = useTranslations("homePage")
  return (
    <>
      <SiteLoader />

      <div className="row grid gap-4 grid-cols-1 md:grid-cols-2 ">
        <motion.div
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={`/about`}
            className="card flex justify-between items-center  flex-col gap-2 md:flex-row  h-full"
          >
            <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl  md:w-50 image-box">
              <Image src={"/test-13.png"} alt="dsa" width={1000} height={1000} className="max-w-[12.25rem]" />
            </div>
            <div className=" px-2 flex-1 text-center md:text-left md:rtl:text-right flex justify-center items-start flex-col gap-2">
              <p className="uppercase">{t("job")}</p>
              <div>
                <p className="text-xl text-white font-bold">{t("name")}</p>
                <p className="text-xl text-white font-bold">{t("lastName")}</p>
              </div>
              <p className="capitalize rtl:text-right">{t("desc")}</p>

            </div>
          </Link>
        </motion.div>

        <div className="flex justify-between items-center gap-2 flex-col">
          <div className="card-one p-4 text-center text-white w-full  capitalize font-bold">
            {t("wellcome")}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2  h-full ">


            <CredentialCard />


            <ProjectCard />
          </div>
        </div>
      </div>
      <div className="row-one flex justify-between items-start flex-col md:flex-row-reverse gap-4 mt-4">
        <motion.div whileTap={{ scale: 0.9 }} className="card w-full md:w-3/12 h-full">
          <div className="card flex justify-between items-center">
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/a_m__i___rrr"}
              className="p-4 border border-white rounded-full text-white z-50 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href={"https://www.t.me/amir_zzzzz7"}
              rel="noreferrer"
              target="_blank"
              className="p-4 border border-white rounded-full text-white z-50 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <PiTelegramLogoDuotone className="text-3xl" />
            </a>
          </div>
          <Link
            href={`/about`}
            className="flex justify-between items-start gap-2 mt-1"
          >
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">{t("tprofile")}</p>
              <p className="text-white text-xl font-bold capitalize">
                {t("profile")}
              </p>
            </div>

          </Link>
        </motion.div>
        <div className="card w-full md:w-9/12 h-full flex  justify-between items-start flex-col md:flex-row gap-4">
          <div className="card w-full md:w-4/12 h-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl text-white text-center">10</p>
            <p className="text-sm uppercase   text-center">{t("itemPOne")} <br />
              {t("itemPTwo")}</p>
          </div>
          <div className="card w-full md:w-4/12 h-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl text-white text-center">2</p>
            <p className="text-sm uppercase   text-center">{t("itemYOne")} <br />
              {t("itemYTwo")}</p>
          </div>
          <div className="card w-full md:w-4/12 h-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl text-white text-center">6</p>
            <p className="text-sm uppercase   text-center">{t("itemWOne")} <br />
              {t("itemWTwo")}</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 block ">
        <LetsCard />
      </div>
    </>
  );
}
