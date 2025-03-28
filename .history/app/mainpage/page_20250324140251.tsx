import React from "react";
import s from "./main.module.css";
import Link from "next/link";

const Mainpage = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Link href="./auth/login">logo</Link>

        <div className={s.nav}>
          <Link href="#">Обучение</Link>
          <Link href="#">Курсы</Link>
          <Link href="#">Цены</Link>
          <Link href="#">О нас</Link>
          <Link href="#">Контакты</Link>
        </div>

        <Link href="./auth/login">Вход</Link>
        <Link href="./auth/registration">Регистрация</Link>
      </div>
    </div>
  );
};

export default Mainpage;
