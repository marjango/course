import Image from "next/image";
import Mainpage from "./mainpage/page";
// import Header from "./header/header";
import Footer from "./footer/footer";
import { useRouter } from 'next/router';

export default function Home({ Component, pageProps }) {
  const router = useRouter();

  // Список страниц, на которых не нужно отображать Header и Footer
  const noLayoutPages = ['/login', '/signup'];

  // Проверяем, находится ли текущая страница в списке noLayoutPages
  const showLayout = !noLayoutPages.includes(router.pathname);

  return (
    <>
      {showLayout && <Header />}
      <Mainpage />
      {showLayout && <Footer />}
    </>
  );
}
