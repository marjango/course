import React from "react";
import Image from "next/image";
import s from "./courses.module.css";
import Link from "next/link";

import img1 from "../mainpage/img/1.svg";
import img2 from "../mainpage/img/2.svg";
import img3 from "../mainpage/img/3.svg";
import img4 from "../mainpage/img/4.svg";
import img5 from "../mainpage/img/5.svg";
import img6 from "../mainpage/img/6.svg";
import img7 from "../mainpage/img/7.svg";
import img8 from "../mainpage/img/8.svg";
import img9 from "../mainpage/img/9.svg";

const coursespage = () => {
  return (
    <>
      <div className={s.coursePage}>
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

          <Link href="/auth/profile" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <h1>Курсы</h1>
        <p>
          Хотите освоить автоматизацию и IT, чтобы работать с передовыми
          технологиями? На нашей платформе вы изучите DevOps, программирование,
          искусственный интеллект, кибербезопасность и анализ данных через
          практику и реальные кейсы. Гибкий формат, поддержка экспертов и
          актуальные инструменты помогут вам быстро применять знания. Начните
          обучение сегодня и создавайте технологии будущего!
        </p>
        <div className={s.courses}>
          <Link href="/courses/course1/1">
            <div className={s.course}>
              <Image src={img1} width={415} height={235} alt="course" />
              <p>Автоматизация <br /> процессов и DevOps</p>
            </div>
          </Link>
          <Link href="/courses/course2">
            <div className={s.course}>
              <Image src={img2} alt="course" />
              <p>Программирование и разработка ПО</p>
            </div>
          </Link>
          <Link href="/courses/course3">
            <div className={s.course}>
              <Image src={img3} width={415} height={238} alt="course" />
              <p>Искусственный интеллект и машинное обучение</p>
            </div>
          </Link>
          <Link href="/courses/course4">
            <div className={s.course}>
              <Image src={img4} width={415} height={235} alt="course" />
              <p>Кибербезопасность и защита данных</p>
            </div>
          </Link>
          <Link href="/courses/course5">
            <div className={s.course}>
              <Image src={img5} width={415} height={252} alt="course" />
              <p>Системное администрирование и облачные технологии</p>
            </div>
          </Link>
          <Link href="/courses/course6">
            <div className={s.course}>
              <Image src={img6} width={415} height={238} alt="course" />
              <p>Автоматизация бизнес-процессов (RPA)</p>
            </div>
          </Link>
          <Link href="/courses/course7">
            <div className={s.course}>
              <Image src={img7} width={415} height={235} alt="course" />
              <p>Разработка чат-ботов и голосовых ассистентов</p>
            </div>
          </Link>
          <Link href="/courses/course8">
            <div className={s.course}>
              <Image src={img8} width={415} height={252} alt="course" />
              <p>Разработка мобильных приложений</p>
            </div>
          </Link>
          <Link href="/courses/course9">
            <div className={s.course}>
              <Image src={img9} width={415} height={238} alt="course" />
              <p>Тестирование ПО и автоматизация QA</p>
            </div>
          </Link>

          <div className={s.lineContainer}>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
        </div>
      </div>
      <footer className={s["white-footer"]}>
        <div className={s.items}>
          <div className={s.item}>
            <div className={s.socials}></div>
          </div>
          <div className={s.item}>
            <Link href="/" className={s.footerLogo}>
              logo
            </Link>
          </div>
          <div className={s.item}>
            <p>
              Email: support@yourplatform.com <br />
              Phone: +7 XXX XXX XXXX <br />
              Live Chat / Help Center link <br />
              Social Media: Icons linking to LinkedIn, Telegram, YouTube, etc.
            </p>
          </div>
          <div className={s.item}>
            <p>
              Subscribe to Our Newsletter (for updates & new courses) <br />
              "Join Now" / "Start Learning" button
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default coursespage;
