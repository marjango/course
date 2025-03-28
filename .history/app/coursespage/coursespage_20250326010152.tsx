import React from 'react'

import s from "./main.module.css";
import Link from "next/link";

const coursespage = () => {
  return (
    <>
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
        <div className={s.hero}>
          <h1>
            АВТОМАТИЗАЦИЯ В ДЕЙСТВИИ, IT В ОБУЧЕНИИ, БУДУЩЕЕ В ТВОИХ РУКАХ!
          </h1>
          <div className={s.btns}>
            <Link href="#" className={s.btn1}>
              Начни сейчас
            </Link>
            <Link href="#" className={s.btn2}>
              Подробнее
            </Link>
          </div>
        </div>
    </>
  )
}

export default coursespage