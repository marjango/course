import Image from "next/image";
import Mainpage from "./mainpage/page";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Mainpage />
      <Footer />
    </>
  );
}
