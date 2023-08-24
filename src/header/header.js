import React, { useEffect, useRef, useState } from "react";
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

    const API_KEY = process.env.REACT_APP_API_URL

    useEffect(() => {
        fetch(API_KEY + 'users')
            .then((res) => res.json())
            .then((data) => setUser(data.users.filter(user => user._id == window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0].fname))
    }, [])

    const [dropDown, setDropDown] = useState(false)
    const [user, setUser] = useState()

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
                                <div className={style.button} onClick={() => setDropDown(dropDown == false ? true : false)}><img src={Arrow} style={{ height: '5vh', paddingRight: '13vw' }} /></div>
                                <div style={{ display: "flex", alignItems: "center", textAlign: 'center', marginLeft: '10px' }}>
                                    <h2 className={style.headerHeader}>Workout Planner</h2>
                                </div>
                            </div>
                            <div className={style.loginButtons}>
                                <Link className={style.button} to={`/profile/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Profile</Link>
                                {/* <h4 style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: '#fefdfb' }}>Hello {user}!</h4> */}
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
                                    <div className={style.button} onClick={() => setDropDown(dropDown == false ? true : false)}><img src={Arrow} style={{ height: '5vh', paddingRight: '13vw' }} /></div>
                                    <ul style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0, textAlign: 'center', color: '#fefdfb' }}>
                                        {menuItems.map((item) => (
                                            <Link className={style.listButton} to={item.to}>{item.name}</Link>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", textAlign: 'center', marginLeft: '20px' }}>
                                    <h2 className={style.headerHeader}>Workout Planner</h2>
                                </div>
                            </div>
                            <div className={style.loginButtons}>
                                <Link className={style.button} to={`/profile/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Profile</Link>
                                <h4 style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: '#fefdfb' }}>Hello {user}!</h4>
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
                            <div style={{ display: "flex", alignItems: "center", marginLeft: '20px' }}>
                                <h2 className={style.headerHeader}>Workout Planner</h2>
                            </div>
                        </div>
                        <div className={style.loginButtons}>
                            <Link className={style.button} to={`/profile/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Profile</Link>
                            <h4 style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: '#fefdfb' }}>Hello {user}!</h4>
                        </div>
                    </div>
                    <hr className={style.headerLine}></hr>
                </div>
            </>
        )
    }
}