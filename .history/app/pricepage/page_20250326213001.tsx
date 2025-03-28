import React from "react";
import Image from "next/image";
import s from "./price.module.css";
import Link from "next/link";
import star from "./Star.svg";

const pricepage = () => {
  return (
    <>
      <div className={s.pricepage}>
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
        <h1>Цены</h1>
        <div className={s.columns}>
          <div className={s.column}>
            <Image src={star} width={58} height={55} alt="star" />
            <h3>Базовая подписка (Standard Plan, $10–20/мес.)</h3>
            <ul>
              <li>Полный доступ к основным курсам</li>
              <br />
              <li>Сертификаты по окончании</li>
              <br />
              <li>Доступ к базовым домашним заданиям и тестам</li>
            </ul>
            <button>Купить</button>
          </div>
          <div className={s.column}>
            <Image src={star} width={58} height={55} alt="star" />
            <h3>Премиум подписка (Premium Plan, $30–50/мес.)</h3>
            <ul>
              <li>Полный доступ к основным курсам</li>
              <br />
              <li>Сертификаты по окончании</li>
              <br />
              <li>Доступ к базовым домашним заданиям и тестам</li>
              <br />
              <li>
                Персональный менторинг – обратная связь и консультации от
                экспертов
              </li>
              <br />
              <li>
                Домашние задания с проверкой – разбор работ преподавателями, а
                не только автопроверка
              </li>
              <br />
              <li>
                Быстрый доступ к новым курсам – эксклюзивный ранний доступ к
                новым материалам
              </li>
            </ul>
            <button>Купить</button>
          </div>
          <div className={s.column}>
            <Image src={star} width={58} height={55} alt="star" />
            <h3>Корпоративный доступ (Enterprise Plan, от $100/мес.)</h3>
            <ul>
              <li>Полный доступ к основным курсам</li>
              <br />
              <li>Сертификаты по окончании</li>
              <br />
              <li>Доступ к базовым домашним заданиям и тестам</li>
              <br />
              <li>Персонализированные учебные программы</li>
              <br />
              <li>Аналитика прогресса сотрудников</li>
              <br />
              <li>Индивидуальные корпоративные тренинги</li>
              <br />
              <li>Интеграция с корпоративными системами</li>
              <br />
              <li>Приоритетная техподдержка</li>
            </ul>
            <button>Купить</button>
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
      </div>
    </>
  );
};

export default pricepage;
