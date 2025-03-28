import React from "react";
import s from "../auth.module.css";
import Link from "next/link";

const passforget = () => {
  return (
    <div className={s.registration}>
      <Link href="/" className={s.logo}>
        logo
      </Link>
      <div className={s.container}>
        <h1>Регистрация</h1>
        <div className={s.inputs}>
          <input type="text" placeholder="E-mail" />
        </div>

        <button className={s.btnRegister}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default passforget;
