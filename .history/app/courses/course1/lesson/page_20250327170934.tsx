import React from "react";
import Image from "next/image";
import s from "./lesson.module.css";
import Link from "next/link";

import video from "../img/video.svg";
import image from "../img/image.svg";

const lesson = () => {
  return (
    <>
      <div className={s.lesson}>
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
            <h1>Урок 1. Введение в DevOps и автоматизацию</h1>
            <p>
            Цель урока: Понять основные принципы DevOps, зачем он нужен, и какие инструменты используются для автоматизации процессов.
            </p>
          </div>
          <div className={s.video}>
          <Image src={video} alt="video" />
          <p className={s.videoTitle}>Как DevOps изменил IT: мнение профессора</p></div>
        </div>
      </div>
      <div className={s.test}>
        <h1>тест. урок 1</h1>
        <div className={s.question}>
          <p>Что такое DevOps и какие проблемы он решает в разработке программного обеспечения?</p>
          <input type="text" placeholder="Ответ"/>
        </div>
        <div className={s.question}>
          <p>Какие ключевые принципы лежат в основе DevOps?</p>
          <input type="text" placeholder="Ответ"/>
        </div>
        <div className={s.question}>
          <p>В чем разница между традиционным процессом разработки и DevOps-подходом?</p>
          <input type="text" placeholder="Ответ"/>
        </div>
        <div className={s.question}>
          <p>Какие инструменты чаще всего используются в DevOps и для чего они нужны?</p>
          <input type="text" placeholder="Ответ"/>
        </div>
        <div className={s.question}>
          <p>Как DevOps влияет на скорость и качество выпуска программных продуктов?</p>
          <input type="text" placeholder="Ответ"/>
        </div>
        <div className={s.question}>
          <p>Почему автоматизация является важной частью DevOps-процессов?</p>
          <input type="text" placeholder="Ответ"/>
        </div>
        <button>Проверить ответы</button>
        
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

export default lesson;
