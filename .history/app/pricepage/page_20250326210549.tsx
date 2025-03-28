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
            Персональный менторинг – обратная связь и консультации от экспертов
          </li>
          <br />
          <li>
            Домашние задания с проверкой – разбор работ преподавателями, а не
            только автопроверка{" "}
          </li>
          <br />
          <li>
            Быстрый доступ к новым курсам – эксклюзивный ранний доступ к новым
            материалам
          </li>
        </ul>
        <button>Купить</button>
      </div>
      <div className={s.column}>
      <Image src={star} width={58} height={55} alt="star" />
        <h3>Корпоративный доступ (Enterprise Plan, от $100/мес.)</h3>
        <ul>
          <li>Полный доступ к основным курсам</li>
          <li>Сертификаты по окончании</li>
          <li>Доступ к базовым домашним заданиям и тестам</li>
          <li>Персонализированные учебные программы</li>
          <li>Аналитика прогресса сотрудников</li>
          <li>Индивидуальные корпоративные тренинги</li>
          <li>Интеграция с корпоративными системами</li>
          <li>Приоритетная техподдержка</li>
        </ul>
        <button>Купить</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default pricepage;
