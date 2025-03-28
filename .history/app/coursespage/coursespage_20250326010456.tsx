import React from 'react'
import Image from "next/image";
import s from "./main.module.css";
import Link from "next/link";

import img1 from "./img/1.svg";
import img2 from "./img/2.svg";
import img3 from "./img/3.svg";

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
        <div className={s.courses}>
          <div className={s.course1}>
            <Image src={img1} width={415} height={235} alt="course" />
            <p>
            Автоматизация процессов и DevOps <br /> информационных <br />
              технологий
            </p>
          </div>

          <div className={s.course2}>
            <Image src={img2} width={415} height={252} alt="course" />
            <p>Программирование и разработка программного обеспечения</p>
          </div>

          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация</p>
          </div>
          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация</p>
          </div>
          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация</p>
          </div>
          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация</p>
          </div>
          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация</p>
          </div>
          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация</p>
          </div>
        </div>
    </>
  )
}

export default coursespage