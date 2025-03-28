import React from "react";
import Image from "next/image";
import s from "./profile.module.css";
import Link from "next/link";
import photo from "./img/profilephoto.svg";

const profile = () => {
  return (
    <>
      <div className={s.profilepage}>
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

          <Link href="/profile" className={s.personal}>
            Личный кабинет
          </Link>
        </div>
        <div className={s.profile}>
          <Image src={photo} alt="photo" />
          <div className={s.description}>
            <p className={s.name}>Рахат Cанжар</p>
            <p>пройдено курсов; №</p>
            <p>средняя оценка; №</p>
            <p>емail: ///</p>
            <button>Изменить пароль/логин</button>
          </div>
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
    </>
  );
};

export default profile;
