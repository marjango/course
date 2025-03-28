import Image from "next/image";
import Mainpage from "./mainpage/page";
// import Header from "./header/header";
import Footer from "./footer/footer";
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Mainpage />
      <Footer />
    </>
  );
}
