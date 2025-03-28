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
        <h1>Курсы</h1>
        <p>Хотите освоить автоматизацию и IT, чтобы работать с передовыми технологиями? На нашей платформе вы изучите DevOps, программирование, искусственный интеллект, кибербезопасность и анализ данных через практику и реальные кейсы. Гибкий формат, поддержка экспертов и актуальные инструменты помогут вам быстро применять знания. Начните обучение сегодня и создавайте технологии будущего!</p>
    </>
  )
}

export default coursespage