"use client"
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import {  useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const CredentialCard = () => {
    const t = useTranslations("homePage")
  return (
    <motion.div
    whileTap={{scale : 0.9}}
  >
    <Link href={`/credential`} className="card w-full block" >
    <Image
      src="/sign.png"
      width={400}
      height={400}
      alt="sign"
      className="w-full"
    />
    <div className="flex justify-between items-start gap-2">
      <div className="flex justify-between items-start flex-col gap-2">
        <p className="uppercase text-xs font-bold"> {t("tcredential")} </p>
        <p className="text-white text-xl font-bold capitalize">
          {t("credential")}
        </p>
      </div>

    </div>
  </Link>
  </motion.div>
  )
}

export default CredentialCard