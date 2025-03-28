import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css"
import Link from "next/link";

import img4 from "./img/4.svg";
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
        <div className={s.hero}>
          <div className={s.text}>
            <h1>Кибербезопасность и защита данных</h1>
            <p>
              В мире цифровых технологий безопасность данных стала приоритетом.
              Этот курс познакомит вас с основами кибербезопасности, методами
              защиты информации и основными видами кибератак. Вы научитесь
              выявлять уязвимости, предотвращать угрозы, работать с шифрованием
              и системами безопасности. Практические задания и реальные кейсы
              помогут вам освоить инструменты киберзащиты и стать востребованным
              специалистом в сфере информационной безопасности
            </p>
          </div>
          <Image src={img4} width={617} height={386} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
            Курс подойдет как новичкам, интересующимся кибербезопасностью, так и
            IT-специалистам, желающим углубить знания в защите данных. Он будет
            полезен разработчикам, системным администраторам, аналитикам
            безопасности и всем, кто хочет научиться защищать информацию,
            предотвращать кибератаки и работать с шифрованием. Подходит для
            студентов, специалистов по IT-инфраструктуре и тех, кто хочет
            построить карьеру в кибербезопасности.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
          Курс «Кибербезопасность и защита данных» <br />
          состоит из 35 уроков и рассчитан на 10 недель.
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
            <p>Введение в кибербезопаснpость</p>
            <ul>
              <li>Основные угрозы и принципы защиты данных</li>
              <li>Виды кибератак и современные тренды безопасности</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Основы сетевой безопасности</p>
            <ul>
              <li>Протоколы передачи данных и их уязвимости</li>
              <li>Настройка безопасных сетей и VPN</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Шифрование и криптография</p>
            <ul>
              <li>Основные алгоритмы шифрования (AES, RSA, SHA)</li>
              <li>Хеширование и цифровые подписи</li>
            </ul>
          </div>

          <div className={s.theme}>
            <p> Защита веб-приложений</p>
            <ul>
              <li>Распространенные атаки (SQL-инъекции, XSS, CSRF)</li>
              <li>Безопасная разработка и защита API</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Этичный хакинг и тестирование на проникновение (Pentesting)</p>
            <ul>
              <li>Поиск уязвимостей в системах</li>
              <li>Практика взлома и защиты</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p> Финальный проект</p>
            <ul>
              <li>Проведение аудита безопасности</li>
              <li>Разработка стратегии защиты IT-инфраструктуры</li>
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

export default course1;
