import React from 'react'
import Image from "next/image";
import s from "./courses.module.css";
import Link from "next/link";

const pricepage = () => {
  return (
    <>
        <h1>Цены</h1>
        <div className={s.col1}>
        Базовая подписка (Standard Plan, $10–20/мес.)
        </div>
    </>
  )
}

export default pricepage