"use client"

import React, { useState } from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import Modal from "../modules/Modal";
import worksData from "@/data/worksData";
import WorkCard from "../modules/WorkCard";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


function WorksPage() {
  const t = useTranslations("worksPage")
  const [activeModal, setActiveModal] = useState(0)


  return (
    <>
      {/* Resume */}
      <Modal show={activeModal === 1} setShow={setActiveModal}>
        <div className="text-white">
          <p>{t("pOne_textOne")}</p>

          <p className="mt-4">{t("pOne_textTwo")} <Link href={`/contact`} className="text-secondary underline" >{t("pOne_link")} </Link>{t("pOne_textThree")}</p>
          <p className="mt-2">{t("pOne_textFour")}</p>
        </div>
      </Modal>
      {/* Resume */}
      {/* Arenap */}
      <Modal show={activeModal === 2} setShow={setActiveModal}>
        <div className="text-white">
          <p className="mt-4">{t("pTwo_textOne")}</p>
          <p className="mt-4">{t("pTwo_textTwo")}</p>
          <p className="mt-4">{t("pTwo_textThree")}</p>
          <p className="mt-4">{t("pTwo_textFour")}</p>
        </div>
      </Modal>
      {/* Arenap */}
      {/* Salamat man */}
      <Modal show={activeModal === 3} setShow={setActiveModal}>
        <div className="text-white">
          <p className="mt-4">{t("pThree_textOne")}</p>
          <p className="mt-4">{t("pThree_textTwo")}</p>
          <p className="mt-4">{t("pThree_textThree")}</p>
          <p className="mt-4">{t("pThree_textFour")}</p>
          <p className="mt-4">{t("pThree_textFive")}</p>
        </div>
      </Modal>
      {/* Salamat man */}
      {/* Barez man */}
      <Modal show={activeModal === 4} setShow={setActiveModal}>
        <div className="text-white">
          <p className="mt-4">{t("pFour_textOne")}</p>
          <p className="mt-4">{t("pFour_textTwo")}</p>
          <p className="mt-4">{t("pFour_textThree")}</p>
          <p className="mt-4">{t("pFour_textFour")}</p>
          <p className="mt-4">{t("pFour_textFive")}</p>
        </div>
      </Modal>
      {/* Barez man */}






      <SiteLoader />
      <header>
        <div className="flex justify-between items-center gap-2  sm:w-8/12 mx-auto">
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
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4     mt-6   ">

        {worksData.map((item, index) => (
          <WorkCard key={item.id}  {...item} modal={index + 1} setActiveM={setActiveModal} />
        ))}





      </section>
    </>
  );
}

export default WorksPage;
