import React from "react";
import Image from "next/image";
import s from "./profile.module.css";
import Link from "next/link";
import photo from './img/profilephoto.svg'

const profile = () => {
  return (
    <>
      <div className={s.profile}>
        <div className={s.headerContainer}>
          <Link href="/" className={s.logo}>
            logo
          </Link>

          <div className={s.nav}>
            <Link href="/learningpage">Обучение</Link>
            <Link href="/coursespage">Курсы</Link>
            <Link href="/pricepage">Цены</Link>
            <Link href="/aboutus">О нас</Link>
            <Link href="#">Контакты</Link>
          </div>

          <Link href="/profile" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <div className={s.}></div>
      </div>
    </>
  );
};

export default profile;
