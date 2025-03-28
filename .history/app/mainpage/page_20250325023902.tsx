import React from "react";
import s from "./main.module.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "./img/1.svg";
import img2 from "./img/2.svg";
import img3 from "./img/3.svg";

const Mainpage = () => {
  return (
    <>
      <header className={s["mainpage-header"]}>
        <div className={s.headerContainer}>
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
      </header>
      <section className={s.about}>
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
      </section>
      <section className={s.coursesContainer}>
        <h1>Наши популярные курсы</h1>
        <div className={s.courses}>
          <div className={s.course1}>
            <Image src={img1} width={415} height={235} alt="course" />
            <p>
              Основы <br /> информационных <br />
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
        </div>
      </section>
      <section className={s.reviews}>
        <h1>Отзывы наших студентов</h1>
        <div className={s.reviewList}>
          <div className={s.reviewItem}>
            <p>
              "Эта платформа - отличный старт для тех, кто хочет разобраться в
              автоматизации и IT! Курсы практичные, без воды, с реальными
              кейсами. Уже после первых занятий смог написать свой первый скрипт
              для автоматизации рутинных задач!"
            </p>
            <p className={s.author}>Жардембек Газиз</p>
            <span></span>
          </div>
          <div className={s.reviewItem}>
            <p>
              Современные технологии в обучении - это про вашу платформу! Здесь
              все интуитивно понятно: есть видеолекции, практические задания и
              возможность задать вопросы экспертам.
            </p>
            <p className={s.author}>Сорокина Анастасия</p>
            <span></span>
          </div>
          <div className={s.reviewItem}>
            <p>
              Раньше думал, что автоматизация - это сложно, но благодаря курсам
              на этой платформе все встало на свои места. Отличный баланс теории
              и практики, а главное - реальный опыт работы с инструментами,
              которые используют в IT-компаниях!"
            </p>
            <p className={s.author}>Сеитова Альмира</p>
            <span></span>
          </div>
        </div>
      </section>
      <footer className={s["mainpage-footer"]}>
        <div className={s.item}>
          <div className={s.socials}></div>
        </div>
        <div className={s.item}>
          <Link href="./auth/login" className={s.logo}>
            logo
          </Link>
        </div>
        <div className={s.item}>
          <p>
            Email: support@yourplatform.com 
            Phone: +7 XXX XXX XXXX 
            Live Chat / Help Center link 
            Social Media: Icons linking to LinkedIn, Telegram,
            YouTube, etc.
          </p>
        </div>
        <div className={s.item}>
          <p>
            Subscribe to Our Newsletter (for updates & new courses) "Join Now" /
            "Start Learning" button
          </p>
        </div>
      </footer>
    </>
  );
};

export default Mainpage;
