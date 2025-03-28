import React from "react";
import s from "./main.module.css";
import Link from "next/link";

const Mainpage = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
          <Link href="./auth/login" className={s.logo}>
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
            <Link href="./auth/login" className={s.login}>
              Вход
            </Link>
            <Link href="./auth/registration" className={s.registration}>
              Регистрация
            </Link>
          </div>
        </div>
        <div className={s.hero}>
          <h1>
            АВТОМАТИЗАЦИЯ В ДЕЙСТВИИ, IT В ОБУЧЕНИИ, БУДУЩЕЕ В ТВОИХ РУКАХ!
          </h1>
          <div className={s.btns}>
            <Link href="#" className={s.btn1}>
              Начни сейчас
            </Link>
            <Link href="#" className={s.btn2}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
      <div className={s.about}>
        <h1>О платформе</h1>
        <div className={s.aboutText}>
          <p>
            Современная онлайн-платформа, созданная для обучения автоматизации и
            программированию. Мы предлагаем качественные курсы, которые помогут
            вам развивать свои навыки, достигать новых профессиональных высот и
            адаптироваться к быстро меняющемуся миру технологий.
          </p>
          <br />
          <p>
            Наша платформа идеально подходит как для новичков, так и для тех,
            кто хочет углубить свои знания в этой нише. Мы предоставляем доступ
            к структурированным материалам, практическим заданиям и пошаговому
            прогрессу, чтобы вы могли достичь успеха в своем обучении.
          </p>
          <br />
          <p>
            Если вы ищете эффективный способ освоить программирование и
            автоматизацию, наш сайт станет вашим лучшим выбором!
          </p>
        </div>
      </div>
      <div className={s.courses}>
        <h1>Наши популярные курсы</h1>
        <div className={s.courses}></div>
      </div>
    </>
  );
};

export default Mainpage;
