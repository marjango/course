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

const course1 = () => {
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
        <h1>Автоматизация процессов и DevOps</h1>
        
        
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
