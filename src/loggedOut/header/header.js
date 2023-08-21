import React, { useState } from "react";
import style from "./header.module.css"
import { Link } from "react-router-dom"
import Arrow from '../images/arrow.png'

export default function Header() {

    const menuItems = [
        {
            name: 'Home',
            to: `/`
        },
        {
            name: 'Workout',
            to: `/login`
        },
        {
            name: 'Monitor',
            to: `/login`
        },
        {
            name: 'Goals',
            to: `/login`
        }
    ]

    const [dropDown, setDropDown] = useState(false)

    if (window.outerWidth <= 800) {
        if (dropDown == false) {
            return (
                <>
                    <div className={style.stickyHeader}>
                        <div className={style.headerContainer}>
                            <div className={style.pageButtons}>
                                <div>
                                    <img className={style.image} src="/favicon.ico" />
                                </div>
                                <div className={style.button} onClick={() => setDropDown(dropDown == false ? true : false)}><img src={Arrow} style={{height: '5vh', paddingRight: '13vw'}}/></div>
                                <div style={{ display: "flex", alignItems: "center", textAlign: 'center'}}>
                                    <h2 className={style.headerHeader}>Workout Planner</h2>
                                </div>
                            </div>
                            <div className={style.loginButtons}>
                                <Link className={style.button} to="/login">Log In</Link>
                                <Link className={style.button} to="/createaccount">Create Account</Link>
                            </div>
                        </div>
                        <hr className={style.headerLine}></hr>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className={style.stickyHeader}>
                        <div className={style.headerContainer}>
                            <div className={style.pageButtons}>
                                <div>
                                    <img className={style.image} src="/favicon.ico" />
                                </div>
                                <div>
                                    <div className={style.button} onClick={() => setDropDown(dropDown == false ? true : false)}><img src={Arrow} style={{height: '5vh', paddingRight: '13vw'}}/></div>
                                    <ul style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0, textAlign: 'center'}}>
                                        {menuItems.map((item) => (
                                            <Link className={style.listButton} to={item.to}>{item.name}</Link>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ display: "flex", alignItems: "center",textAlign: 'center'}}>
                                    <h2 className={style.headerHeader}>Workout Planner</h2>
                                </div>
                            </div>
                            <div className={style.loginButtons}>
                                <Link className={style.button} to="/login">Log In</Link>
                                <Link className={style.button} to="/createaccount">Create Account</Link>                            </div>
                        </div>
                        <hr className={style.headerLine}></hr>
                    </div>
                </>
            )
        }
    }
    else {
        return (
            <>
                <div className={style.stickyHeader}>
                    <div className={style.headerContainer}>
                        <div className={style.pageButtons}>
                            <div>
                                <img className={style.image} src="/favicon.ico" />
                            </div>
                            <Link className={style.button} to={`/`}>Home</Link>
                            <Link className={style.button} to={`/login`}>Plan Workout</Link>
                            <Link className={style.button} to={`/login`}>Monitor Progress</Link>
                            <Link className={style.button} to={`/login`}>Set Goals</Link>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h2 className={style.headerHeader}>Workout Planner</h2>
                            </div>
                        </div>
                        <div className={style.loginButtons}>
                            <Link className={style.button} to="/login">Log In</Link>
                            <Link className={style.button} to="/createaccount">Create Account</Link>                        </div>
                    </div>
                    <hr className={style.headerLine}></hr>
                </div>
            </>
        )
    }
}