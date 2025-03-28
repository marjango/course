import React from 'react'
import s from "./learning.module.css";
import Image from "next/image";
import Link from "next/link";

const learningpage = () => {
  return (
    <>
        <div className={s.learningpage}>
        <div className={s.headerContainer}>
          <Link href="/" className={s.logo}>
            logo
          </Link>

          <div className={s.nav}>
            <Link href="#">Обучение</Link>
            <Link href="/coursespage">Курсы</Link>
            <Link href="#">Цены</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Контакты</Link>
          </div>

          <Link href="#" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <h1>как наши студенты обучаются?</h1>
        </div>
    </>
  )
}

export default learningpage