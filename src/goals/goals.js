import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import style from "./goals.module.css"
import Footer from '../header/footer'
import {Link} from 'react-router-dom'
import NoPageFound from '../noPageFound/noPageFound'

export default function Goals() {
    
    const [goalz,setGoalz] = useState(null)
    const [users, setUsers] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    useEffect(()=> {
        fetch(API_URL + 'goals/')
        .then((res) => res.json())
        .then((data) => setGoalz(data.goals))

        fetch(API_URL + 'users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])

    const handleDelete = async (id) => {
        const response = await fetch(API_URL + `goals/delete/${id}`, {method: 'DELETE'})
        console.log(response)
        if(response.ok){
            const data = await response.json()
            window.location.reload()
        }
    }

    if(goalz == null || users == null) {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Set Goals</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.selectedOption} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Goals</Link>
                    <Link className={style.option} to={`/goals/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set New Goal</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow}/>
                </div>
                <div className={style.mainContainer}>
                    <h1>Loading...</h1>
                </div>
                <Footer />
            </>
        )
    }
    if(users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0] == undefined) {
        return(
            <NoPageFound/>
        )
    }
    else{
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Set Goals</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.selectedOption} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Goals</Link>
                    <Link className={style.option} to={`/goals/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set New Goal</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow}/>
                </div>
                <div className={style.mainContainer}>
                    <h2>Current Goals</h2>
                    <div className={style.goalCards}>
                    {
                        goalz.filter(g => g.userId == users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id).map((goal) => (
                            <div className={style.goal} key={goal._id}>
                                <button className={style.deleteButton} onClick={() => handleDelete(goal._id)}>X</button>
                                <h2>{goal.name}</h2>
                                <h3>Reps: {goal.reps}</h3>
                                <h3>Weight: {goal.weight}</h3>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
