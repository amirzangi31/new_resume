"use client"

import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import ProjectCard from "../modules/ProjectCard";
import LetsCard from "../modules/LetsCard";
import CredentialCard from "../modules/CredentialCard";
import { useTranslations } from "use-intl";





function AboutPage() {

  const t = useTranslations("aboutPage")
  const e = useTranslations("education")
  const ex = useTranslations("experience")
  return (
    <>

      <SiteLoader />
      <header className="flex justify-between items-center flex-col md:flex-row md:items-stretch gap-4">
        <div className="w-8/12 md:w-4/12 card">
          <div className="overflow-hidden rounded-3xl image-box">
            <Image
              src={"/test-13.png"}
              alt="dsa"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-8/12  ">
          <div className="flex justify-between items-center gap-2    ">
            <Image
              width={400}
              height={400}
              alt="star"
              src={"/star-2.png"}
              className="w-16"
            />
            <p className="uppercase text-white font-bold big-text">
              {t("title")}
            </p>
            <Image
              width={400}
              height={400}
              alt="star"
              src={"/star-2.png"}
              className="w-16"
            />
          </div>

          <div className="card relative block h-[calc(100%-75px)]">
            <Image
              src={"/icon2.png"}
              width={40}
              height={40}
              alt="icon"
              className="absolute top-0 left-10"
            />
            <span className="mt-20 flex justify-between items-center ">
              <span>
                <p className="uppercase text-secondary text-xl font-bold">
                  {t("name")}
                </p>
                <p className="text-white mt-2">
                  {t("desc")}
                </p>
              </span>
            </span>
          </div>
        </div>
      </header>
      <section className="mt-4 grid grid-cols-1  gap-2">
        {/* <div className="card">
          <p className="uppercase text-white ">EXPERIENCE</p>
          <div className="mt-2">
            <p>2007 - 2017</p>
            <p className="text-white font-bold text-lg">
              Framer Designer & Developer
            </p>
            <p>Bluebase Designs</p>
          </div>
          <div className="mt-2">
            <p>2007 - 2017</p>
            <p className="text-white font-bold text-lg">
              Framer Designer & Developer
            </p>
            <p>Bluebase Designs</p>
          </div>
        </div> */}
        <div className="card">
          <p className="uppercase text-white ">{e("title")}</p>
          <div className="mt-2">
            <p>1395 - 1397</p>
            <p className="text-white font-bold text-lg">
              {e("study")}
            </p>
            <p>{e("uni")}</p>
          </div>

        </div>
        <div className="card">
          <p className="uppercase text-white ">{ex("title")}</p>
          <div className="mt-2">
            <p>1402 -  {ex("date")}</p>
            <p className="text-white font-bold text-lg">
              {ex("job_title")}
            </p>
            <p>{ex("company")}</p>
            {/* <p>{ex("desc")}</p> */}
          </div>
          <div className="divider">

          </div>
          <div className="mt-2">
            <p>1400 -  1402</p>
            <p className="text-white font-bold text-lg">
              {ex("job_title")}
            </p>
            <p>{ex("company_one")}</p>
            {/* <p>{ex("desc_1")}</p> */}
          </div>

        </div>
      </section>
      <section className="flex justify-between items-stretch flex-col md:flex-row gap-4 mt-4">
        <div className="content-about w-full md:w-3/12">
          <ProjectCard />
        </div>
        <div className="content-about w-full md:w-6/12">
          <LetsCard />
        </div>
        <div className="content-about w-full md:w-3/12">
          <CredentialCard />
        </div>


      </section>
    </>
  );
}

export default AboutPage;
