import React from "react";
import s from "../mainpage/main.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <Link href="/" className={s.logo}>
        logo
      </Link>

      <div className={s.nav}>
        <Link href="#">Обучение</Link>
        <Link href="#">Курсы</Link>
        <Link href="#">Цены</Link>
        <Link href="#">О нас</Link>
        <Link href="#">Контакты</Link>
      </div>

      <div className={s.auth}>
        <Link href="./auth/login" className={s.login}>
          Вход
        </Link>
        <Link href="./auth/registration" className={s.registration}>
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Header;
