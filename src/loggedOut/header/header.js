import React, { useRef, useState } from "react";
import style from "./header.module.css"
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <>
            <div className={style.stickyHeader}>
                <div className={style.headerContainer}>
                    <div className={style.pageButtons}>
                    <div>
                        <img className={style.image} src="/favicon.ico" />
                    </div>
                        <Link className={style.button} to="/">Home</Link>
                        <Link className={style.button} to="/login">Plan Workout</Link>
                        <Link className={style.button} to="/login">Monitor Progress</Link>
                        <Link className={style.button} to="/login">Set Goals</Link>
                        <div style={{display: "flex", alignItems: "center"}}>
                        <h2 className={style.headerHeader}>Workout Planner</h2>
                    </div>
                    </div>
                    <div className={style.loginButtons}>
                        <Link className={style.button} to="/createaccount">Create Account</Link>
                        <Link className={style.loginButton} to="/login">Login</Link>
                    </div>
                </div>
                <hr className={style.headerLine}></hr>
            </div>
        </>
    )
}