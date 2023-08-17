import React, { useRef, useState } from "react";
import style from "./header.module.css"
import { Link } from "react-router-dom"
import Arrow from '../images/arrow.png'

export default function Header() {

    const menuItems = [
        {
            name: 'Home',
            to: `/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`
        },
        {
            name: 'Workout',
            to: `/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`
        },
        {
            name: 'Monitor',
            to: `/monitor/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`
        },
        {
            name: 'Goals',
            to: `/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`
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
                                <Link className={style.button} to={`/profile/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Profile</Link>
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
                                <Link className={style.button} to={`/profile/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Profile</Link>
                            </div>
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
                            <Link className={style.button} to={`/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Home</Link>
                            <Link className={style.button} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Plan Workout</Link>
                            <Link className={style.button} to={`/monitor/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Monitor Progress</Link>
                            <Link className={style.button} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set Goals</Link>
                            <div style={{ display: "flex", alignItems: "center" }}>
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
}