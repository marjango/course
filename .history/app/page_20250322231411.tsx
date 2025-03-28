import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
     <h1>Main page!</h1>
     
     <Link href='./auth/login'>Вход</Link>
     <Link href='./auth/registration'>Регистрация</Link>
    </>
  );
}
