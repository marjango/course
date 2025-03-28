import React from 'react'
import s from '../auth.module.css'
import Link from "next/link";

const Registration = () => {
  return (
    <div className={s.registration}>
        <Link href="/" className={s.logo}>
            logo
          </Link>
          <div className={s.container}></div>
        <h1>Регистрация</h1>
        <input type="text" placeholder='E-mail'/>
        <input type="text" placeholder='Пароль'/>
        <input type="text" placeholder='Повторите пароль'/>
        <button className={s.button}>Зарегистрироваться</button>
    </div>
  )
}

export default Registration