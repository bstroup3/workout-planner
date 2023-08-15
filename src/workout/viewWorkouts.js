import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import style from "./planWorkout.module.css"
import Header from "../header/header"
import Workout from './workout'
import Footer from '../header/footer'
import NoPageFound from '../noPageFound/noPageFound'


export default function ViewWorkouts() {

    const [workout, setWorkout] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch('/workouts')
        .then((res) => res.json())
        .then((workoutData) => setWorkout(workoutData.workouts))

        fetch('/users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])

    const handleDelete = async (id) => {
        const response = await fetch(`/workouts/delete/${id}`, {method: 'DELETE'})
        if (response.ok){
            const data = await response.json()
            window.location.reload()
        }
    }

    if (workout == null || users == null) {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Plan Workout</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.selectedOption} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                    <Link className={style.option} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                    <Link className={style.option} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
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
    else {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Plan Workout</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.selectedOption} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                    <Link className={style.option} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                    <Link className={style.option} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.mainContainer}>
                    <h2>Your Workouts</h2>
                    <br />
                    {
                        workout.filter(w => w.template == true && w.userId == users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id).map((workout) => {
                            return (
                                    <Workout workout={workout} handleDelete={handleDelete} key={workout.name} />
                            )
                        })
                    }
                </div>
                <Footer />
            </>
        )
    }
}
