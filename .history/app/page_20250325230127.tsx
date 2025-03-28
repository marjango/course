'use client';
import Mainpage from "./mainpage/page";
import Header from "./header/header";
import SpecialHeader from './specialHeader/specialHeader';
import Footer from "./footer/footer";
import { usePathname } from 'next/navigation';

export default function Home({ Component, pageProps }) {
  const pathname = usePathname();

  // Список страниц без Header и Footer
  const noLayoutPages = ['/login'];

  // Список страниц с SpecialHeader и SpecialFooter
  const specialLayoutPages = ['/special-page'];

  // Определение Header и Footer на основе текущего маршрута
  let header = null;
  let footer = null;

  if (!noLayoutPages.includes(pathname)) { // Исправлено: router.pathname -> pathname
    header = specialLayoutPages.includes(pathname) ? <SpecialHeader /> : <Header />; // Исправлено: router.pathname -> pathname
    footer = specialLayoutPages.includes(pathname) ? <Footer /> : <Footer />; // Добавлен footer
  }

  return (
    <>
      {header}
      <Component {...pageProps} />
      {footer}
    </>
  );
}