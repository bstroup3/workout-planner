import React from "react";
import style from "./header.module.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className={style.stickyHeader}>
                <div className={style.headerContainer}>
                    <div className={style.imageDiv}>
                        <img className={style.image} src="favicon.ico" />
                    </div>
                    <Link className={style.button}>Plan Workout</Link>
                    <Link className={style.button}>Monitor Progress</Link>
                    <Link className={style.button}>Set Goals</Link>
                    <h2 className={style.headerHeader}>Workout Planner</h2>
                    <Link className={style.button}>Login</Link>
                </div>
                <hr className={style.headerLine}></hr>
            </div>
        </>
    )
}