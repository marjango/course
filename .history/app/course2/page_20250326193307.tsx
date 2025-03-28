import React from "react";
import Image from "next/image";
import s from "./course1.module.css";
import Link from "next/link";

import img1 from "../mainpage/img/1.svg";
import image from "./img/image.svg";

const course2 = () => {
  return (
    <>
      <div className={s.coursePage}>
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

          <Link href="#" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <div className={s.hero}>
          <div className={s.text}>
            <h1>Программирование и разработка ПО</h1>
            <p>
              Программирование – ключ к миру IT, и этот курс поможет вам освоить
              его с нуля. Вы научитесь писать чистый код, работать с базами
              данных, создавать веб- и мобильные приложения, разбираться в
              алгоритмах и использовать популярные фреймворки. Курс сочетает
              теорию с практикой, позволяя сразу применять знания в реальных
              проектах.
            </p>
          </div>
          <Image src={img1} width={617} height={386} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
            Этот курс подойдет начинающим, кто хочет освоить программирование с
            нуля, а также разработчикам, желающим углубить знания и освоить
            новые технологии. Он будет полезен тем, кто хочет создавать веб- и
            мобильные приложения, работать с базами данных, разбираться в
            алгоритмах и писать чистый код. Подходит для студентов, сменивших
            профессию специалистов и всех, кто хочет начать карьеру в IT.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
          Курс «Программирование и разработка ПО»
          <br /> состоит из 40 уроков и рассчитан на 10 недель.
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
            <p>Введение в программирование</p>

            <ul>
              <li>Основные понятия: переменные, типы данных, операторы</li>
              <li>Установка среды разработки и первый код</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p> Алгоритмы и структуры данных</p>
            <ul>
              <li>Базовые алгоритмы: сортировка, поиск, рекурсия</li>
              <li>Основные структуры данных: массивы, списки, хеш-таблицы</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Основы объектно-ориентированного программирования (ООП)</p>
            <ul>
              <li>Принципы ООП: инкапсуляция, наследование, полиморфизм</li>
              <li>Работа с классами и объектами</li>
            </ul>
          </div>

          <div className={s.theme}>
            <p>Работа с базами данных</p>
            <ul>
              <li>Основы SQL и взаимодействие с базами данных</li>
              <li>Проектирование и оптимизация баз данных</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Разработка веб-приложений</p>
            <ul>
              <li>Основы HTML, CSS, JavaScript</li>
              <li>Введение в backend-разработку (Node.js, Python, Java)</li>
            </ul>
          </div>
        </div>

        <button>Приступить к курсу</button>
      </div>
      <footer className={s["coursespage-footer"]}>
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

export default course2;
