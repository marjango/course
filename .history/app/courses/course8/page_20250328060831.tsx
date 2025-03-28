import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css"
import Link from "next/link";

import img8 from "./img/8.svg";
import image from "./img/image.svg";

const course1 = () => {
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

          <Link href="#" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <div className={s.hero}>
          <div className={s.text}>
            <h1>Разработка мобильных приложений</h1>
            <p>
            Мобильные приложения стали ключевым инструментом для бизнеса, стартапов и пользователей по всему миру. В этом курсе вы освоите полный цикл разработки мобильных приложений — от идеи и дизайна до программирования и публикации в App Store и Google Play. Вы научитесь работать с нативными и кроссплатформенными технологиями, разрабатывать UI/UX, подключать API и базы данных, а также оптимизировать производительность приложений. Курс подойдет как новичкам, так и разработчикам, желающим углубить свои знания.
            </p>
          </div>
          <Image src={img8} width={617} height={386} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
          Курс подойдет начинающим и опытным разработчикам, дизайнерам, предпринимателям и всем, кто хочет создавать современные мобильные приложения. Он будет полезен тем, кто хочет запустить свой стартап, улучшить навыки программирования или освоить востребованную профессию мобильного разработчика. Также подойдет IT-специалистам, которые хотят перейти в сферу мобильной разработки.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
        Курс «Разработка мобильных приложений» состоит из 40 уроков и рассчитан на 10 недель
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
          


            <p>Введение в мобильную разработку</p>
            <ul>
              <li>История и тренды мобильных приложений</li>
              <li>Различие между нативными и кроссплатформенными технологиями</li>
            </ul>
          </div>
          <div className={s.theme}>
          


            <p>Работа с API и базами данных</p>
            <ul>
              <li>REST API и взаимодействие с сервером</li>
              <li>Использование Firebase и SQLite</li>
            </ul>
          </div>
          <div className={s.theme}>
          


            <p>Основы UI/UX дизайна для мобильных приложений</p>
            <ul>
              <li>Принципы проектирования интерфейсов</li>
              <li>Инструменты для дизайна (Figma, Adobe XD)</li>
            </ul>
          </div>

          <div className={s.theme}>
          Публикация в App Store и Google Play


            <p>Публикация в App Store и Google Play</p>
            <ul>
              <li>Подготовка к релизу</li>
              <li>Монетизация и продвижение приложения</li>
            </ul>
          </div>
          <div className={s.theme}>
          


            <p>Основы программирования для мобильных платформ</p>
            <ul>
              <li>Знакомство с Kotlin (Android) и Swift (iOS)</li>
              <li>Основные структуры и компоненты приложений</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Практический проект</p>
            <ul>
              <li>Разработка и развертывание реального проекта</li>
              <li>Автоматизация полного цикла CI/CD</li>
              <li>Оптимизация DevOps-процессов на практике</li>
            </ul>
          </div>
        </div>

      <button>Приступить к курсу</button>
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

export default course1;
