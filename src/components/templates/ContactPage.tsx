"use client"
import { useState } from 'react'
import SiteLoader from "../modules/SiteLoader";


import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight, PiWhatsappLogoThin } from "react-icons/pi";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { useTranslations } from 'next-intl';

function ContactPage() {

  const l = useTranslations("LETS")
  const f = useTranslations("form")
  const t = useTranslations("contactPage")
  const r = useTranslations("resume")
  const to = useTranslations("toast")
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)





  const submitHandler = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("invalid data", {

        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    } else {
      setLoading(true)
      const res = await fetch("https://amlak-zangiabadi.vercel.app/api/together", {
        method: "POST",
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setLoading(false)
      if (data.error) {
        toast.error("There was a problem with the server, please try again", {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      } else {
        toast.success(to("title"), {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }
    }
  }


  return (
    <>
      <SiteLoader />
      <section className="flex justify-between items-start gap-2 flex-col md:flex-row">
        <div className="w-full md:w-4/12">
          <p className="text-white uppercase">contact info</p>
          <div className="flex justify-between items-start gap-2 mt-4">
            <div className="card ">
              <CiMail className="text-2xl text-white " />
            </div>
            <div className="ltr:mr-auto rtl:ml-auto">
              <p className="uppercase">{t("mail")}</p>
              <a href="mailto:zangiabadi1378888@gmail.com" className="text-white">
                zangiabadi1378888@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-between items-start gap-2 mt-4">
            <div className="card">
              <BsTelephone className="text-2xl text-white " />
            </div>
            <div className="ltr:mr-auto rtl:ml-auto">
              <p className="uppercase">{t("contact")}</p>
              <a href="tel:09339727560" className="text-white">
                +989339727560
              </a>
            </div>
          </div>
          <div className="flex justify-between items-start gap-2 mt-4">
            <div className="card">
              <CiLocationOn className="text-2xl text-white " />
            </div>
            <div className="ltr:mr-auto rtl:ml-auto">
              <p className="uppercase">{t("loc")} </p>
              <p className="text-white">{t("city")}</p>
            </div>
          </div>
          <p className="text-white uppercase mt-4">{t("media")}</p>
          <div className="flex justify-start gap-2 items-start mt-4">
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/a_m__i___rrr"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href={"https://www.t.me/amir_zzzzz7"}
              rel="noreferrer"
              target="_blank"
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <PiTelegramLogoLight className="text-3xl" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://wa.me/+989339727560?text=Hello Newsunweb"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <PiWhatsappLogoThin className="text-3xl" />
            </a>
          </div>
          <div className="mt-5">

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
          <div className="form">
            <Image
              src={"/icon2.png"}
              width={40}
              height={40}
              alt="icon"
              className="absolute top-0 ltr:right-10 rtl:left-10"
            />
            <p className="text-3xl text-white font-bold">
              {l("one")} {l("two")} <span className="text-secondary">{l("three")}</span>.
            </p>
            <div className="mt-12">
              <div className="form__control">
                <input type="text" name="name" value={form.name} placeholder={f("name")} onChange={(e) => {
                    setForm({
                      ...form,
                      name : e.target.value
                    })
                }} />
              </div>
              <div className="form__control">
                <input type="text" name="email" value={form.email} placeholder={f("email")} onChange={(e) => {
                    setForm({
                      ...form,
                      email : e.target.value
                    })
                }} />
              </div>
              <div className="form__control">
                <input type="text" name="subject" value={form.subject} placeholder={f("sub")} onChange={(e) => {
                    setForm({
                      ...form,
                      subject : e.target.value
                    })
                }} />
              </div>
              <div className="form__control">
                <textarea name="message" value={form.message} placeholder={f("desc")} cols={30} rows={7} onChange={(e) => {
                    setForm({
                      ...form,
                      message : e.target.value
                    })
                }} ></textarea>
              </div>



              <button type="button" disabled={loading} className="btn btn-primary w-full capitalize flex justify-center items-center" onClick={submitHandler} >

                {loading ? "درحال ارسال ..." : f("send")}

              </button>



            </div>
          </div>
        </div>
        <Toaster />
      </section>

    </>
  );
}

export default ContactPage;
