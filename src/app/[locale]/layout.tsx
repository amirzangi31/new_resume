import type { Metadata } from "next";
import "./globals.css";
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing';
import iranSans from "../../../public/fonts/iransans";
import { Poppins } from 'next/font/google'
import cn from "@/utils/clsxFun";
import Layout from "@/components/layouts/Layout";
import NextIntlProvider from "@/providers/NextIntlProvider";
import { getLocale } from "next-intl/server";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})


export const metadata: Metadata = {
  title: 'Amirmohammad Zangiabadi',
  description: 'resume mr.amirmohammad zangiabadi',
  icons: { icon: "./favicon.ico" }
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  if (!routing.locales.includes(locale as "fa" | "en")) {
    notFound();
  }


  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body
        className={
          cn(
            `base ${locale === "en" ? poppins.className : iranSans.className}`,
          )
        }
      >
        <NextIntlProvider>
          <Layout>
            {children}
          </Layout>
        </NextIntlProvider>
      </body>
    </html>
  );
}
