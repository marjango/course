import React from "react";
import Image from "next/image";
import s from "./courses.module.css";
import Link from "next/link";

const pricepage = () => {
  return (
    <>
      <h1>Цены</h1>
      <div className={s.col1}>
        <span></span>
        <h3>Базовая подписка (Standard Plan, $10–20/мес.)</h3>
        <ul>
          <li>Полный доступ к основным курсам</li>
          <li>Сертификаты по окончании</li>
          <li>Доступ к базовым домашним заданиям и тестам</li>
        </ul>
      </div>
      <div className={s.col2}>
        <span></span>
        <h3>Премиум подписка (Premium Plan, $30–50/мес.)</h3>
        <ul>
          <li>Полный доступ к основным курсам</li>
          <li>Сертификаты по окончании</li>
          <li>Доступ к базовым домашним заданиям и тестам</li>
        </ul>
      </div>
      <div className={s.col1}>
        <span></span>
        <h3>Базовая подписка (Standard Plan, $10–20/мес.)</h3>
        <ul>
          <li>Полный доступ к основным курсам</li>
          <li>Сертификаты по окончании</li>
          <li>Доступ к базовым домашним заданиям и тестам</li>
        </ul>
      </div>
    </>
  );
};

export default pricepage;
