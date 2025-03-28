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
          <Link href="/auth/passforget" className={s.passforget}>Забыли пароль?</Link>
        </div>
        <div className={s.btns}>
        <button className={s.btnLogin}>Вход</button>
        <Link href="/auth/registration"><button className={s.btnRegister}>Зарегистрироваться</button></Link>
        </div>
      </div>
    </div>
  );
};

export default login;
