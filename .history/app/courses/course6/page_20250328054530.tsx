import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css"
import Link from "next/link";

import img6 from "./img/6.svg";
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
            <h1>Автоматизация бизнес-процессов (RPA)</h1>
            <p>
            Современные компании стремятся минимизировать ручной труд и повысить эффективность процессов. В этом курсе вы изучите технологии роботизированной автоматизации (RPA), научитесь анализировать бизнес-процессы, разрабатывать программных роботов и интегрировать их в корпоративные системы. Освоите инструменты UiPath, Power Automate и Python для создания автоматизированных решений, которые ускорят работу и снизят затраты бизнеса.
            </p>
          </div>
          <Image src={img6} width={584} height={433} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
          Курс подойдет бизнес-аналитикам, IT-специалистам, менеджерам и всем, кто хочет автоматизировать рутинные процессы. Он будет полезен тем, кто работает с большими объемами данных, повторяющимися задачами и хочет внедрять RPA-решения в компаниях. Подходит для начинающих разработчиков, специалистов по цифровой трансформации и тех, кто стремится повысить эффективность работы с помощью автоматизации.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
        Курс «Автоматизация бизнес-процессов (RPA)» состоит из 30 уроков и рассчитан на 8 недель.
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
            <p> Введение в RPA и цифровую трансформацию</p>
            <ul>
              <li>Что такое RPA и как оно меняет бизнес</li>
              <li>Примеры успешной автоматизации в разных отраслях</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>    Разработка первых программных роботов</p>
            <ul>
              <li>Создание простых ботов для автоматизации офисных задач</li>
              <li>Запись действий пользователя и управление ботами</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>      Анализ и моделирование бизнес-процессов</p>
            <ul>
              <li>Как выявлять задачи для автоматизации</li>
              <li>BPMN-нотация и построение схем процессов</li>
            </ul>
          </div>

          <div className={s.theme}>
            <p>   Оптимизация и масштабирование RPA-решений</p>
            <ul>
              <li>Повышение производительности и отказоустойчивости</li>
              <li>Управление несколькими ботами и распределение задач</li>
            </ul>
          </div>
          <div className={s.theme}>
       


            <p>   Основы работы с RPA-инструментами</p>
            <ul>
              <li>Обзор UiPath, Power Automate, Automation Anywhere</li>
              <li>Установка и настройка среды разработки</li>
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
