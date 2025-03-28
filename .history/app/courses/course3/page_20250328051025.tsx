import React from "react";
import Image from "next/image";
import s from "../course1/1/course.module.css"
import Link from "next/link";
import img3 from "./img/3.svg";
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
            <h1>Искусственный интеллект и машинное обучение</h1>
            <p>
              ИИ и машинное обучение меняют мир, автоматизируя процессы и
              принимая решения на основе данных. Этот курс познакомит вас с
              ключевыми концепциями, алгоритмами и инструментами, используемыми
              в AI-разработке. Вы освоите Python, работу с нейросетями, анализ
              данных и создание моделей машинного обучения. Практические проекты
              помогут вам научиться применять ИИ в реальных задачах – от
              предсказаний до компьютерного зрения.
            </p>
          </div>
          <Image src={img3} width={626} height={460} alt="course" />
        </div>
      </div>
      <div className={s.target}>
        <Image src={image} width={602} height={402} alt="course" />
        <div className={s.targetText}>
          <h1>для кого этот курс?</h1>
          <p>
            Курс подойдет разработчикам, аналитикам данных и всем, кто хочет
            освоить искусственный интеллект и машинное обучение. Он рассчитан
            как на новичков, знакомых с основами программирования, так и на
            специалистов, желающих углубить знания в AI. Подойдет тем, кто хочет
            работать с данными, строить предсказательные модели, разрабатывать
            нейросети и применять машинное обучение в бизнесе и науке.
          </p>
        </div>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>
          Курс «Искусственный интеллект и машинное <br /> обучение» состоит из
          45 уроков и рассчитан на 12 недель.
        </h3>
        <div className={s.themes}>
          <div className={s.theme}>
            <p> Введение в искусственный интеллект и машинное обучение</p>
            <ul>
              <li>Основные концепции и области применения</li>
              <li>Различия между AI, ML, DL</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Программирование на Python для машинного обучения</p>
            <ul>
              <li>Основы Python и библиотек (NumPy, Pandas, Matplotlib)</li>
              <li>Работа с данными и их обработка</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Математические основы ML</p>
            <ul>
              <li>Линейная алгебра, статистика и вероятности</li>
              <li>Градиентный спуск и оптимизация моделей</li>
            </ul>
          </div>

          <div className={s.theme}>
            <p> Методы машинного обучения</p>
            <ul>
              <li>
                Обучение с учителем: линейная и логистическая регрессия, деревья
                решений
              </li>
              <li>
                Обучение без учителя: кластеризация, метод главных компонент
              </li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Глубокое обучение и нейросети</p>
            <ul>
              <li>Основы нейросетей и фреймворк TensorFlow</li>
              <li>Архитектуры CNN, RNN, трансформеры</li>
            </ul>
          </div>
          <div className={s.theme}>
            <p>Разработка и развертывание AI-проектов</p>
            <ul>
              <li>Инструменты MLOps и DevOps для автоматизации</li>
              <li>Развертывание моделей в облаке</li>
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
