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
                        <Link className={style.button} to={`/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Home</Link>
                        <Link className={style.button} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Plan Workout</Link>
                        <Link className={style.button} to={`/monitor/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Monitor Progress</Link>
                        <Link className={style.button} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set Goals</Link>
                        <div style={{display: "flex", alignItems: "center"}}>
                        <h2 className={style.headerHeader}>Workout Planner</h2>
                    </div>
                    </div>
                    <div className={style.loginButtons}>
                        <Link className={style.button} to={`/profile/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Profile</Link>
                    </div>
                </div>
                <hr className={style.headerLine}></hr>
            </div>
        </>
    )
}