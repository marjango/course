import React from "react";
import s from "../auth.module.css";
import Link from "next/link";

const login = () => {
  return (
    <div className={s.login}>
      <Link href="/" className={s.logo}>
        logo
      </Link>
      <div className={s.container}>
        <h1>Вход</h1>
        <div className={s.inputs}>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Пароль" />
        </div>
        <Link href="/passforget" className={s.logo}>Забыли пароль?</Link>
        <button className={s.login}>Вход</button>
        <button className={s.button}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default login;
