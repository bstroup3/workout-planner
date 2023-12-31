import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import style from "./planWorkout.module.css"
import Header from "../header/header"
import Footer from '../header/footer'
import NoPageFound from '../noPageFound/noPageFound'

export default function EnterWorkout() {
    const [option, setOption] = useState("")
    const [users, setUsers] = useState(null)

    const setWorkout = (event) => {
        event.preventDefault()
        if (option != event.target.value) {
            setOption(event.target.value)
        }
    }

    const [workoutz, setWorkoutz] = useState(null)
    const [newWorkout, setNewWorkout] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        fetch(API_URL + 'workouts')
        .then((res) => res.json())
        .then((data) => setWorkoutz(data.workouts))

        fetch(API_URL + 'users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])

    useEffect(() => {
        if(newWorkout == null) return
        fetch(API_URL + `users/enter/${users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id}`,
        {
            method: 'PUT', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newWorkout)
        }
        )
        setTimeout(() => {
            window.location.reload()
        },100)
    }, [newWorkout])

    const testFunction1 = async (e) => {
        e.preventDefault()
        const object = []

        let count = 0;
        console.log(e)
        for(let i=0; i < workoutz.filter(workout => (workout.name == option))[0].exercises.length; i++){
            const ename = workoutz.filter(workout => (workout.name == option))[0].exercises[i].ename
            const workouts = [];
            const sets = []
            const date = new Date()
            const nextDay = new Date(date)
            nextDay.setDate(date.getDate() + 3);
            for (let j = 0; j < workoutz.filter(workout => (workout.name == option))[0].exercises[i].sets.length; j++){
                const weight = e.target[count].value
                const reps = e.target[count+1].value
                count+=2
                await sets.push({reps, weight})
            }
            await workouts.push({
                date: date.toISOString().substring(0,10),
                sets: sets
            })
            await object.push({ename, workouts})
        }

        setNewWorkout(object)
    }

    if(workoutz == null || users == null){
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Plan Workout</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                    <Link className={style.option} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                    <Link className={style.selectedOption} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
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

    if (option == "") {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Plan Workout</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                    <Link className={style.option} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                    <Link className={style.selectedOption} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.mainContainer}>
                    <h2>Which workout would you like to enter?</h2>
                    <form id='workoutID' name='workoutID'>
                        <select onChange={setWorkout} className={style.textInput}>
                            <option value={""}></option>
                            {
                                workoutz.filter(workout => workout.template == true && workout.userId == users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id).map((workout) => {
                                    return (
                                        <option value={workout.name} key={workout.name}>{workout.name}</option>
                                    )
                                })
                            }
                        </select>
                    </form>
                </div>
                <Footer/>
            </>
        )
    }
    else {
        const workout = workoutz.filter((workout) => (workout.name == option && workout.template == true))[0]
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Plan Workout</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                    <Link className={style.option} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                    <Link className={style.selectedOption} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <form className={style.mainContainer} onSubmit={testFunction1}>
                    <h2>Which workout would you like to enter?</h2>
                    <form id='workoutID' name='workoutID'>
                        <select onChange={setWorkout} value={option} className={style.textInput}>
                            <option value={""}></option>
                            {
                                workoutz.filter(workout => workout.template == true && workout.userId == users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id).map((workout) => {
                                    return (
                                        <option value={workout.name}>{workout.name}</option>
                                    )
                                })
                            }
                        </select>
                    </form>
                    <h1>{workout.name}</h1>
                    <h2>{workout.type}</h2>
                    {
                        workout.exercises.map((exercise) => 
                            (
                                <div className={style.workoutRowDiv}>
                                    <h2>{exercise.ename}</h2>
                                    <div>
                                        {
                                            exercise.sets.map((set) => (
                                                <div className={style.workoutRow}>
                                                    <h4>Weight:</h4>
                                                    <input type='number' style={{marginRight: '1vw', width: '50px'}} className={style.textInput}/>
                                                    <h4>Reps:</h4>
                                                    <input type='number' style={{width: '50px'}} className={style.textInput}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        )
                    }
                    <button className={style.button} type='submit'>Enter</button>
                </form>
                <Footer/>
            </>
        )
    }
}
