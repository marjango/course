import React from "react";
import s from "../auth.module.css";
import Link from "next/link";

const passforget = () => {
  return (
    <div className={s.passforgetPage}>
      <Link href="/" className={s.logo}>
        logo
      </Link>
      <div className={s.container}>
        <h1>Восстановление пароля</h1>
        <div className={s.inputs}>
          <input type="text" placeholder="E-mail" />
        </div>

        <button className={s.btnSend}>Отправить код</button>
      </div>
    </div>
  );
};

export default passforget;
