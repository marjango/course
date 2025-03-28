import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css"
import Link from "next/link";

import img5 from "./img/5.svg";
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
            <h1>Системное администрирование и облачные технологии</h1>
            <p>
            Современные IT-инфраструктуры требуют надежного управления и гибких облачных решений. Этот курс познакомит вас с основами системного администрирования, настройкой серверов и работой с облачными сервисами. Вы освоите Linux и Windows Server, научитесь управлять виртуальными машинами, автоматизировать задачи и обеспечивать безопасность инфраструктуры. Курс включает практические задания и финальный проект, где вы развернете облачную IT-систему с нуля.
            </p>
          </div>
          <Image src={img5} width={617} height={386} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
          Курс подойдет начинающим системным администраторам, IT-специалистам и разработчикам, желающим углубить знания в управлении серверами и облачными технологиями. Он будет полезен тем, кто хочет освоить настройку Windows и Linux, автоматизацию IT-процессов, работу с виртуальными машинами и облачными платформами (AWS, Azure, Google Cloud). Подходит для студентов, инженеров и всех, кто стремится построить карьеру в IT-инфраструктуре.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
          Курс «Автоматизация процессов и DevOps» состоит <br/> из 35 уроков и
          рассчитан на 8 недель.
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
            <p>Введение в DevOps и автоматизацию</p>
            <ul>
              <li>Принципы DevOps и его роль в разработке</li>
              <li>Инструменты и технологии автоматизации</li>
              <li>CI/CD: зачем он нужен и как работает</li>
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
