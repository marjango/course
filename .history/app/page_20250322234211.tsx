import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <>
     <Link href='./auth/login'>logo</Link>

    <div className="nav">
      <Link href='#'>Обучение</Link>
      <Link href='#'>Курсы</Link>
      <Link href='#'>Цены</Link>
      <Link href='#'>О нас</Link>
      <Link href='#'>Контакты</Link>
    </div>

     <Link href='./auth/login'>Вход</Link>
     <Link href='./auth/registration'>Регистрация</Link>
    </>
  );
}
