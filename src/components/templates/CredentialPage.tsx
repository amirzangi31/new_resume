"use client"
import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight, PiWhatsappLogoThin } from "react-icons/pi";
import { useTranslations } from "next-intl";
import cn from "@/utils/clsxFun";

function CredentialPage() {

  const r = useTranslations("resume")
  const t = useTranslations("credentialPage")
  const e = useTranslations("education")
  const ex = useTranslations("experience")
  return (
    <>
      <SiteLoader />
      <section className="flex justify-between items-start flex-col md:flex-row gap-8 relative">
        <div className="card w-full md:w-4/12 profile-card">
          <div className="image-box rounded-3xl overflow-hidden">
            <Image src={"/test-13.png"} width={400} height={400} alt="profile" />
          </div>
          <div className="mt-6">
            <p className="text-lg text-white font-bold capitalize text-center">
              {t("name")}
            </p>
            <a className="block text-center mt-4"
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/a_m__i___rrr"}>
              @a_m__i___rrr
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/a_m__i___rrr"}
              className="social-item">
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href={"https://www.t.me/amir_zzzzz7"}
              rel="noreferrer"
              target="_blank"
              className="social-item">
              <PiTelegramLogoLight className="text-3xl" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://wa.me/+989339727560?text=Hello Newsunweb"}
              className="social-item">
              <PiWhatsappLogoThin className="text-3xl" />
            </a>
          </div>
          <div className="mt-8">
            <a
              href={"/resume.pdf"}
              className="btn btn-primary w-full block text-center"
              download
            >
              {r("resume")}
            </a>
          </div>
        </div>
        <div className="w-full md:w-8/12">
          <div>
            <p className="text-white font-bold mb-4 uppercase">{t("title")}</p>
            <p className="my-8 text-justify">
              {t("descOne")}
            </p>
            <p className="my-8 text-justify">
              {t("descTwo")}

            </p>
            <p className="text-justify">
              {t("descThree")}

            </p>
          </div>
          {/* <div className="mt-8">
            <p className="text-white font-bold mb-4">EXPERIENCE</p>
            <div className="my-4">
              <p className="text-text-primary my-2">2007 - 2017</p>
              <p className="text-secondary">Framer Designer & Develope</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                Bluebase Designs
              </p>
              <p className="text-white">
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
            <div className="my-4">
              <p className="text-text-primary my-2">2007 - 2017</p>
              <p className="text-secondary">Framer Designer & Develope</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                Bluebase Designs
              </p>
              <p className="text-white">
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
          </div> */}
          <div className="mt-8">
            <p className="text-white font-bold mb-4">{e("title")}</p>
            <div className="my-4">
              <p className="text-text-primary my-2">1395 - 1397</p>
              <p className="text-secondary">{e("study")}</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                {e("uni")}
              </p>
              <p className="text-white text-justify">
                {e("desc")}
              </p>
            </div>

          </div>
          <div className="mt-8">
            <p className="text-white font-bold mb-4">{ex("title")}</p>
            <div className="my-4">
              <p className="text-text-primary my-2">1402 - {ex("date")}</p>
              <p className="text-secondary">{ex("job_title")}</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                {ex("company")}
              </p>
              <p className="text-white text-justify">
                {ex("desc")}
              </p>
            </div>
            <div className="my-4">
              <p className="text-text-primary my-2">1400 - 1402</p>
              <p className="text-secondary">{ex("job_title")}</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                {ex("company_one")}
              </p>
              <p className="text-white text-justify ">
                {ex("desc_1")}
              </p>
            </div>

          </div>
          <div className="mt-8">
            <p className="text-white font-bold mb-4 flex justify-start items-center gap-2">{t("skills")} <span className="text-primary font-normal">({t("experience")})</span></p>
            <div className="grid grid-cols-2 gap-4">
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">HTML</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2.5  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Css</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2.5  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">JavaScript</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2.5  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">React</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Nextjs (All versions)</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">1.5 {t("year")} </p>
              </div>

              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Redux-toolkit</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Tailwind Css</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Bootstrap</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Tree js </p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">6  {t("month")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Git</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">2.5  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">MongoDb </p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">1  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Ionic</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">10  {t("month")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">React Query</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">1.5  {t("year")} </p>
              </div>
              <div className={cn(
                "flex relative justify-between items-center group border-b-2 border-primary py-2",
                "after:block after:absolute after:left-0 after:bottom-0 after:bg-secondary after:w-0 after:h-[2px] after:transition-all after:duration-300",
                "hover:after:w-full "
              )} >
                <p className="text-white text-lg">Node js</p>
                <p className="text-sm text-text-primary group-hover:text-secondary transition-all">3  {t("month")} </p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default CredentialPage;
