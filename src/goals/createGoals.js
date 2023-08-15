import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import style from "./goals.module.css"
import Footer from '../header/footer'
import { Link } from 'react-router-dom'
import NoPageFound from '../noPageFound/noPageFound'

export default function CreateGoals() {

    const [workout, setWorkout] = useState()
    const [newGoal, setNewGoal] = useState(null)
    const [workoutz, setWorkoutz] = useState(null)
    const [users, setUsers] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    const setCurrentWorkout = (e) => {
        e.preventDefault()
        setWorkout(e.target.value)
    }
    const testFunction = async (e) => {
        console.log(e)
        const object = {
            userId: users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id,
            name: e.target[1].value,
            reps: e.target[2].value,
            weight: e.target[3].value
        }
        setNewGoal(object)
    }

    useEffect(() => {
        fetch(API_URL + 'workouts/')
        .then((res) => res.json())
        .then((data) => setWorkoutz(data.workouts))

        fetch(API_URL + 'users/')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])


    useEffect(() => {
        if(newGoal == null) return
        fetch(API_URL + 'goals',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newGoal)
        })
    },[newGoal])

    if(workoutz == null || users == null){
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Set Goals</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Goals</Link>
                    <Link className={style.selectedOption} to={`/goals/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set New Goal</Link>
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

    if (workout == undefined || workout == "") {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Set Goals</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Goals</Link>
                    <Link className={style.selectedOption} to={`/goals/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set New Goal</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.mainContainer}>
                    <form className={style.goalForm}>
                        <div className={style.dropdownDiv}>
                            <label>Which workout would you like to create a new goal for?</label>
                            <select onChange={setCurrentWorkout}>
                                <option value=""></option>
                                {
                                    workoutz.filter(workout => workout.template == true).map((workout) => (
                                        <option value={workout.name} key={workout.name}>{workout.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>Which exercise would you like to create a new goal for?</label>
                            <select disabled className={style.dropdown}>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>How many reps?</label>
                            <input type='number' disabled/>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>How much weight?</label>
                            <input type='number' disabled/>
                        </div>
                    </form>
                </div>
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Set Goals</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/goals/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Goals</Link>
                    <Link className={style.selectedOption} to={`/goals/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Set New Goal</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.mainContainer}>
                    <form className={style.goalForm} onSubmit={testFunction}>
                        <div className={style.dropdownDiv}>
                            <label>Which workout would you like to create a new goal for?</label>
                            <select onChange={setCurrentWorkout}>
                                <option value=""></option>
                                {
                                    workoutz.filter(workout => workout.template == true).map((workout) => (
                                        <option value={workout.name} key={workout.name}>{workout.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>Which exercise would you like to create a new goal for?</label>
                            <select>
                                <option value=""></option>
                                {
                                    workoutz.filter((workout1) => (workout1.name == workout && workout1.template == true))[0].exercises
                                        .map((exercise) => (
                                            <option value={exercise.ename} key={exercise.ename}>{exercise.ename}</option>
                                        ))
                                }
                            </select>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>How many reps?</label>
                            <input type='number'/>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>How much weight?</label>
                            <input type='number'/>
                        </div>
                        <input type='submit' className={style.button} value="Create"/>
                    </form>
                </div>
                <Footer />
            </>
        )
    }
}