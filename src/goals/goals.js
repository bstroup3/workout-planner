import React from 'react'
import Header from '../header/header'
import style from "./goals.module.css"
import Footer from '../header/footer'
import {Link} from 'react-router-dom'
export default function Goals() {

    const goals = [
        {
            ename: "Bench",
            reps: 1,
            weight: 170
        },
        {
            ename: "Squat",
            reps: 1,
            weight: 200
        },
        {
            ename: "Row",
            reps: 12,
            weight: 135
        },
        {
            ename: "Deadlift",
            reps: 1,
            weight: 250
        }
    ]
    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Set Goals</h1>
            </div>
            <div className={style.optionsContainer}>
                <Link className={style.selectedOption} to="/goals">View Goals</Link>
                <Link className={style.option} to="/goals/create">Set New Goal</Link>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow}/>
            </div>
            <div className={style.mainContainer}>
                <h2>Current Goals</h2>
                <div className={style.goalCards}>
                {
                    goals.map((goal) => (
                        <div className={style.goal}>
                            <h2>{goal.ename}</h2>
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
