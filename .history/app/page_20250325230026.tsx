'use client';
import Mainpage from "./mainpage/page";
import Header from "./header/header";
import SpecialHeader from './specialHeader//specialHeader'
import Footer from "./footer/footer";
import { useRouter } from 'next/router';

export default function Home({ Component, pageProps }) {
  const router = useRouter();

  // Список страниц без Header и Footer
  const noLayoutPages = ['/login'];

  // Список страниц с SpecialHeader и SpecialFooter
  const specialLayoutPages = ['/special-page'];

  // Определение Header и Footer на основе текущего маршрута
  let header = null;
  let footer = null;

  if (!noLayoutPages.includes(router.pathname)) {
    header = specialLayoutPages.includes(router.pathname) ? <SpecialHeader /> : <Header />;
  }


  return (
    <>
      {header}
      <Component {...pageProps} />
      {footer}
    </>
  );
}
