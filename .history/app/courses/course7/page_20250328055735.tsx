import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css"
import Link from "next/link";

import img7 from "./img/7.svg";
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
            <h1>Разработка чат-ботов и голосовых ассистентов</h1>
            <p>
            Чат-боты и голосовые ассистенты становятся неотъемлемой частью бизнеса, помогая автоматизировать общение с клиентами и повышать уровень сервиса. В этом курсе вы изучите основные технологии и инструменты создания ботов, освоите работу с NLP (обработкой естественного языка) и научитесь интегрировать чат-ботов с популярными мессенджерами и голосовыми платформами. В результате вы сможете разрабатывать интеллектуальные боты для бизнеса, поддержки клиентов и автоматизации задач.
4o
            </p>
          </div>
          <Image src={img7} width={617} height={386} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
          Курс подойдет разработчикам, маркетологам, предпринимателям и всем, кто хочет создать умных виртуальных помощников. Он будет полезен специалистам по автоматизации, продуктовым менеджерам и тем, кто работает с клиентским сервисом и цифровыми платформами. Также подойдет начинающим программистам, желающим освоить технологии NLP и разработку голосовых интерфейсов.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
        Курс «Разработка чат-ботов и голосовых ассистентов» состоит из 35 уроков и рассчитан на 9 недель.
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
         


            <p> Введение в чат-ботов и голосовых ассистентов</p>
            <ul>
              <li>История и развитие технологий</li>
              <li>Области применения и бизнес-кейсы</li>
            </ul>
          </div>
          <div className={s.theme}>
          


            <p>Работа с платформами для ботов</p>
            <ul>
              <li>Telegram Bot API, WhatsApp API, Facebook Messenger</li>
              <li>Развертывание и настройка бота</li>
            </ul>
          </div>
          <div className={s.theme}>
          


            <p>Основы обработки естественного языка (NLP)</p>
            <ul>
              <li>Принципы работы NLP и машинного обучения</li>
              <li>Использование библиотек NLTK, spaCy, TensorFlow</li>
            </ul>
          </div>

          <div className={s.theme}>
          


            <p>Интеграция чат-ботов с внешними сервисами</p>
            <ul>
              <li>Подключение баз данных, CRM, API</li>
              <li>Взаимодействие с облачными платформами</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Безопасность и DevSecOps</p>
            <ul>
              <li>Основы безопасного DevOps</li>
              <li>Автоматизированное сканирование уязвимостей</li>
              <li>Защита контейнеров и CI/CD процессов</li>
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
