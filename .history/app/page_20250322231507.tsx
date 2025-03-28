import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
     <Link href='./auth/login'>logo</Link>

    <div className="na"></div>
     <Link href='./auth/login'>Вход</Link>
     <Link href='./auth/registration'>Регистрация</Link>
    </>
  );
}
