import React, { useState } from "react"
import style from "./home.module.css"
import Header from "../header/header"
import Footer from "../header/footer"
import Bench from "../images/Bench.jpg"
import Clipboard from "../images/clipboard.jpg"
import Progress from "../images/progress.png"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Header />
            <div className={style.section1} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)) , url(${Bench})`}}>
                <Link className={`${style.header1} ${style.linkStyle}`} to="/login"><h1>Plan Workout</h1></Link>
            </div>
            <div className={style.section2} style={{ backgroundImage: `linear-gradient(rgba(84, 128, 217, 0.9),rgba(84, 128, 217, 0.9)) , url(${Progress})`}}>
                <Link className={style.header2} to="/login"><h1>Monitor Progress</h1></Link>
            </div>
            <div className={style.section1} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)) , url(${Clipboard})`}}>
                <Link className={style.header1} to="/login"><h1>Set Goals</h1></Link>
            </div>
            <Footer />
        </>
    )
}