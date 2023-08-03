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
                    <Link className={style.button} to="/plan">Plan Workout</Link>
                    <Link className={style.button} to="/monitor">Monitor Progress</Link>
                    <Link className={style.button} to="/goals">Set Goals</Link>
                    <h2 className={style.headerHeader}>Workout Planner</h2>
                    <Link className={style.loginButton} to="/login">Login</Link>
                </div>
                <hr className={style.headerLine}></hr>
            </div>
        </>
    )
}