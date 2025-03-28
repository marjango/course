import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css";
import Link from "next/link";

import img9 from "./img/9.svg";
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
            <h1>Тестирование ПО и автоматизация QA</h1>
            <p>
            Качество программного обеспечения – ключевой фактор успешного IT-продукта. В этом курсе вы изучите полный цикл тестирования, от ручного тестирования до автоматизации процессов. Освоите работу с инструментами тестирования, научитесь писать автотесты, разбирать ошибки и обеспечивать стабильность работы программных решений. В результате вы получите навыки, востребованные в любой IT-компании, и сможете построить карьеру в сфере Quality Assurance (QA).
            </p>
          </div>
          <Image src={img9} width={578} height={408} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={589} height={479} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
          Курс подойдет начинающим тестировщикам, разработчикам, продакт-менеджерам и всем, кто хочет разобраться в обеспечении качества программного обеспечения. Он будет полезен тем, кто стремится построить карьеру в QA, освоить автоматизированное тестирование или улучшить навыки тестирования в своих IT-проектах.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
        Курс «Тестирование ПО и автоматизация QA» состоит из 30 уроков и рассчитан на 8 недель
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
          


            <p>Введение в тестирование ПО</p>
            <ul>
              <li>Роль тестирования в разработке программного обеспечения</li>
              <li>Основные виды тестирования: ручное, автоматизированное, нагрузочное</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Контейнеризация и управление средой</p>
            <ul>
              <li>Введение в Docker: создание и управление контейнерами</li>
              <li>Работа с Docker Compose и Docker Swarm</li>
              <li>Kubernetes: основы оркестрации контейнеров</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Автоматизация развертывания и инфраструктуры</p>
            <ul>
              <li>Инструменты IaC: Terraform и Ansible</li>
              <li>Настройка облачной инфраструктуры (AWS, GCP, Azure)</li>
              <li>Автоматизированное развертывание и масштабирование</li>
            </ul>
          </div>

          <div className={s.theme}>
            <p>CI/CD и управление релизами</p>
            <ul>
              <li>Настройка Jenkins, GitHub Actions и GitLab CI/CD</li>
              <li>Автоматизация тестирования и мониторинга в CI/CD</li>
              <li>Практическая реализация пайплайна развертывания</li>
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
