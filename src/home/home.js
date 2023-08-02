import React, { useState } from "react"
import style from "./home.module.css"
import Header from "../header/header"
import Bench from "../images/Bench.jpg"
import { Link } from "react-router-dom"

export default function Home() {
    const loggedIn = useState(false)

    return (
        <>
            <Header />
            <div className={style.section1} src={Bench}>
                <Link className={style.header1}><h1>Plan Workout</h1></Link>
            </div>
            <div className={style.section2}>
                <Link className={style.header2}><h1>Monitor Progress</h1></Link>
            </div>
            <div className={style.section1}>
                <Link className={style.header1}><h1>Set Goals</h1></Link>
            </div>
        </>
    )
}