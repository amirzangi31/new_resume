
import {  useTranslations } from 'next-intl'

import { usePathname } from 'next/navigation'
import React from 'react'
import { GrClose } from 'react-icons/gr'
import LangButton from '../element/LangButton'
import { Link } from '@/i18n/routing'

function Navigation({ show = true, setShow, footer }: { show?: boolean, setShow?: React.Dispatch<React.SetStateAction<boolean>>, footer?: boolean }) {
    const pathname = usePathname()
    const t = useTranslations("menu")

    const closeHandler = () => {
        if (setShow) {
            setShow(false)
        }
    }

    return (
        <nav className={`navigation ${show === true && "active"}`}>
            <div className="navigation__hamburger-close" onClick={closeHandler} >
                <GrClose className={`text-2x text-white ${show === false || footer === true ? "hidden" : ""}`} />
            </div>
            <ul className="navigation__menu">
                <li className={`navigation__item ${pathname === "/" || pathname === "" ? "active" : ""}`}>
                    <Link href={`/`}>{t("home")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/about") ? "active" : ""}`}>
                    <Link href={`/about`}>{t("about")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/works") ? "active" : ""}`}>
                    <Link href={`/works `}>{t("works")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/credential") ? "active" : ""}`}>
                    <Link href={`/credential`}>{t("credential")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/contact") ? "active" : ""}`}>
                    <Link href={`/contact`}>{t("contact")}</Link>
                </li>
                <li className={``}>
                    <LangButton />
                </li>
            </ul>
        </nav >
    )
}

export default Navigation