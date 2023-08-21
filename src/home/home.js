import React, { useEffect, useState } from "react"
import style from "./home.module.css"
import Header from "../header/header"
import Footer from "../header/footer"
import Bench from "../images/Bench.jpg"
import Clipboard from "../images/clipboard.jpg"
import Progress from "../images/progress.png"
import { Link } from "react-router-dom"
import NoPageFound from "../noPageFound/noPageFound"

export default function Home() {
    const [users, setUsers] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        fetch(API_URL + 'users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])

    if(users == null){
        return(
            <>
                <Header />
                <div className={style.mainContainer}>
                    <h1>Loading...</h1>
                </div>
                <Footer/>
            </>
        )
    }

    if(users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0] == undefined) {
        return(
            <NoPageFound/>
        )
    }

    return (
        <>
            <Header />
            <div className={style.section1} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)) , url(${Bench})`}}>
                <Link className={`${style.header1} ${style.linkStyle}`} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}><h1>Plan Workout</h1></Link>
            </div>
            <div className={style.section2} style={{ backgroundImage: `linear-gradient(rgba(84, 128, 217, 0.9),rgba(84, 128, 217, 0.9)) , url(${Progress})`}}>
                <Link className={style.header2} to={`/monitor/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}><h1>Monitor Progress</h1></Link>
            </div>
            <div className={style.section1} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)) , url(${Clipboard})`}}>
                <Link className={style.header1} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}><h1>Set Goals</h1></Link>
            </div>
            <Footer />
        </>
    )
}