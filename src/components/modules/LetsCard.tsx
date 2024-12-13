"use client"
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import {  useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


const LetsCard = () => {
  const l = useTranslations("LETS")
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className='h-full'
    >


      <Link href={`/contact`} className="card relative block w-full h-full">
        <Image src={"/icon2.png"} width={40} height={40} alt="icon" className="absolute top-0 left-10 rtl:right-10" />
        <span className="mt-20 flex justify-between items-center " >
          <span>
            <p className="uppercase text-white text-3xl font-bold">{l("one")}</p>
            <p className="uppercase text-white text-3xl font-bold">{l("two")} <span className="lowercase text-secondary">{l("three")}</span></p>
          </span>
        </span>
      </Link>
    </motion.div>
  )
}

export default LetsCard