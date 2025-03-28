import React from 'react'
import s from './aboutus.module.css'

import Link from "next/link";

const aboutus = () => {
  return (
    <>
        <div className={s.aboutus}>
        <div className={s.headerContainer}>
          <Link href="/" className={s.logo}>
            logo
          </Link>

          <div className={s.nav}>
            <Link href="#">Обучение</Link>
            <Link href="/coursespage">Курсы</Link>
            <Link href="/pricepage">Цены</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Контакты</Link>
          </div>

          <Link href="#" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
            <h1>кто мы такие?</h1>
            <p>образовательная онлайн-платформа, помогающая осваивать программирование и автоматизацию.</p>
        </div>
        
    </>
  )
}

export default aboutus