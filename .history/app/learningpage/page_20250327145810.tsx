import React from "react";
import s from "./learning.module.css";
import Image from "next/image";
import Link from "next/link";
import arrow from "./img/arrow.svg";

const learningpage = () => {
  return (
    <>
      <div className={s.learningpage}>
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
        <h1>как наши студенты обучаются?</h1>
        <Image src={arrow} alt="arrow" />
      </div>
      <div className={s.descriptions}>
        <div className={s.description}>
          <h3>Эффективные онлайн-лекций</h3>
          <p> Онлайн-лекции, заранее загруженные преподавателями, позволяют студентам обучаться в удобном темпе, повторять материал при необходимости и получать доступ к качественным образовательным ресурсам. Доказано, что видеоформат способствует лучшему восприятию информации за счет визуализации сложных понятий и многократного просмотра ключевых моментов.</p>
        </div>
        <div className={s.description}>
          <h3>Текстовый вариант лекции</h3>
          <p> После каждой лекции студент получает текстовый конспект, который помогает закрепить материал, выделить ключевые моменты и вернуться к сложным вопросам. Это особенно полезно для студентов с разными стилями восприятия информации – аудиалов, визуалов и кинестетиков.</p>
        </div>
        <div className={s.description}>
          <h3>Тестирование после каждой лекции</h3>
          <p> Для проверки усвоения материала студент должен пройти тест. Ему дается три попытки, что мотивирует пересматривать лекции и анализировать ошибки. Если студент не справляется с тестированием после трех попыток, он не допускается к следующему этапу обучения, что обеспечивает высокий уровень знаний у всех обучающихся.</p>
        </div>
        <div className={s.description}>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className={s.numbers}></div>
    </>
  );
};

export default learningpage;
