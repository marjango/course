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
            <Link href="#" className={s.login}>
              Личный кабинет
            </Link>
          </div>
        </div>
        
    </>
  )
}

export default coursespage