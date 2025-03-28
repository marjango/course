import React from 'react'
import Image from "next/image";
import s from "./courses.module.css";
import Link from "next/link";

const pricepage = () => {
  return (
    <>
        <h1>Цены</h1>
        <div className={s.col1}>
            <h3>Базовая подписка (Standard Plan, $10–20/мес.)</h3>
            <p>Полный доступ к основным курсам

Сертификаты по окончании

Доступ к базовым домашним заданиям и тестам</p>
        </div>
    </>
  )
}

export default pricepage