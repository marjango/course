import React from 'react'
import s from '../auth.module.css'

const Registration = () => {
  return (
    <div className={s.container}>
        <p>logo</p>
        <h1>Регистрация</h1>
        <input type="text" placeholder='E-mail'/>
        <input type="text" placeholder='Пароль'/>
        <input type="text" placeholder='Повторите пароль'/>
        <button className={s.button}>Зарегистрироваться</button>
    </div>
  )
}

export default Registration