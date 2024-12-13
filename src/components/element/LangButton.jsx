"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { shortPathname } from "@/helper/functions";

const LangButton = () => {
  const [active, setActive] = useState("فارسی");
  const local = useLocale();
  const pathName = usePathname();
  useEffect(() => {
    setActive(local === "en" ? "فارسی" : "English");
  }, [local]);

  return (
    <div className="relative">
      <Link
        href={`${local === "en" ? "/fa" : "/en"}${
          local === "en" ? shortPathname(pathName) : pathName
        }`}
      >
        {active}
      </Link>
    </div>
  );
};

export default LangButton;
