"use client"

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  const t = useTranslations("homePage");
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
    >
      <Link href={`/works`} className="card w-full block">
        <Image
          src="/my-works.png"
          width={400}
          height={400}
          alt="sign"
          className="w-full"
        />
        <div className="flex justify-between items-start gap-2">
          <div className="flex justify-between items-start flex-col gap-2">
            <p className="uppercase text-xs font-bold">{t("tproject")}</p>
            <p className="text-white text-xl font-bold capitalize">
              {t("project")}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
