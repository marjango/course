import React from "react";
import Image from "next/image";
import s from "./courses.module.css";
import Link from "next/link";

import img1 from "../mainpage/img/1.svg";
import img2 from "../mainpage/img/2.svg";
import img3 from "../mainpage/img/3.svg";
import img4 from "../mainpage/img/4.svg";
import img5 from "../mainpage/img/5.svg";
import img6 from "../mainpage/img/6.svg";
import img7 from "../mainpage/img/7.svg";
import img8 from "../mainpage/img/8.svg";
import img9 from "../mainpage/img/9.svg";

const coursespage = () => {
  return (
    <>
      <div className={s.coursePage}>
        <div className={s.headerContainer}>
          <Link href="/" className={s.logo}>
            logo
          </Link>

          <div className={s.nav}>
            <Link href="#">Обучение</Link>
            <Link href="#">Курсы</Link>
            <Link href="#">Цены</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Контакты</Link>
          </div>

          <Link href="#" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <h1>Курсы</h1>
        <p>
          Хотите освоить автоматизацию и IT, чтобы работать с передовыми
          технологиями? На нашей платформе вы изучите DevOps, программирование,
          искусственный интеллект, кибербезопасность и анализ данных через
          практику и реальные кейсы. Гибкий формат, поддержка экспертов и
          актуальные инструменты помогут вам быстро применять знания. Начните
          обучение сегодня и создавайте технологии будущего!
        </p>
        <div className={s.courses}>
          <div className={s.course1}>
            <Image src={img1} width={415} height={235} alt="course" />
            <p>
              Автоматизация <br /> процессов и DevOps
            </p>
          </div>

          <div className={s.course2}>
            <Image src={img2} width={415} height={252} alt="course" />
            <p>Программирование и разработка ПО</p>
          </div>

          <div className={s.course3}>
            <Image src={img4} width={415} height={238} alt="course" />
            <p>Искусственный интеллект и машинное обучение</p>
          </div>
          <div className={s.course3}>
            <Image src={img5} width={415} height={235} alt="course" />
            <p>Кибербезопасность и защита данных</p>
          </div>
          <div className={s.course3}>
            <Image src={img6} width={415} height={252} alt="course" />
            <p>Системное администрирование и облачные технологии</p>
          </div>
          <div className={s.course3}>
            <Image src={img3} width={415} height={238} alt="course" />
            <p>Автоматизация бизнес-процессов (RPA)</p>
          </div>
          <div className={s.course3}>
            <Image src={img7} width={415} height={235} alt="course" />
            <p>Разработка чат-ботов и голосовых ассистентов</p>
          </div>
          <div className={s.course3}>
            <Image src={img8} width={415} height={252} alt="course" />
            <p>Разработка мобильных приложений</p>
          </div>
          <div className={s.course3}>
            <Image src={img9} width={415} height={238} alt="course" />
            <p>Тестирование ПО и автоматизация QA</p>
          </div>
        </div>
        <footer className={s["mainpage-footer"]}>
          <div className={s.items}>
            <div className={s.item}>
              <div className={s.socials}></div>
            </div>
            <div className={s.item}>
              <Link href="/" className={s.logo}>
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

export default coursespage;
