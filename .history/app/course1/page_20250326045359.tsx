import React from "react";
import Image from "next/image";
import s from "./course1.module.css";
import Link from "next/link";

import img1 from "../mainpage/img/1.svg";

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
        <p>Этот курс познакомит вас с современными инструментами автоматизации, CI/CD-процессами, контейнеризацией и управлением инфраструктурой. Вы освоите Docker, Kubernetes, Ansible, Terraform и Jenkins, научитесь настраивать мониторинг, автоматизировать развертывание приложений и работать с облачными сервисами. Начните обучение и станьте специалистом, который делает IT-инфраструктуру стабильнее, быстрее и эффективнее!</p>
        <Image src={img1} width={617} height={386} alt="course" />
      </div>
      <div className={s.target}>
        <h1>для кого этот курс?</h1>
        <p>Этот курс подойдет разработчикам, которые хотят автоматизировать развертывание и работу с инфраструктурой, системным администраторам, стремящимся освоить контейнеризацию, CI/CD и облачные сервисы, а также QA-инженерам, желающим интегрировать автоматизированное тестирование в DevOps-процессы. IT-менеджеры смогут лучше понять, как автоматизация ускоряет разработку и повышает надежность систем, а начинающие IT-специалисты получат востребованные навыки для успешного старта карьеры в DevOps.</p>
      </div>
      <div className={s.schedule}>
        <h1>ПЛАН КУРСА</h1>
        <h3>Курс «Автоматизация процессов и DevOps» состоит из 35 уроков и рассчитан на 8 недель.</h3>
      <div className={s.list}></div>
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
