import React, { useState, useEffect } from 'react'
import Header from '../header/header'
import style from "./monitor.module.css"
import Chart from "chart.js/auto"
import { Line } from 'react-chartjs-2'
import Graph from './graph'
import NoPageFound from '../noPageFound/noPageFound'

export default function Monitor() {

    const setWorkout = (event) => {
        setCurrentWorkout(event.target.value)
    }
    const [currentWorkout, setCurrentWorkout] = useState("")
    const [workoutz, setWorkoutz] = useState(null)
    const [users, setUsers] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        fetch(API_URL + 'workouts')
        .then((res) => res.json())
        .then((data) => setWorkoutz(data.workouts))

        fetch(API_URL + 'users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])
    if(workoutz == null || users == null) {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Monitor Progress</h1>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.mainContainer}>
                    <h1>Loading...</h1>
                </div>
            </>
        )
    }
    
    if(users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0] == undefined) {
        return(
            <NoPageFound/>
        )
    }

    if (currentWorkout == undefined || currentWorkout == "") {
        const nameSet = [...new Set(workoutz.filter(w => w.userId == users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id).map(workout => (workout.name)))]
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Monitor Progress</h1>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.select}>
                    <h2>Which workout would you like to monitor?</h2>
                    <select onChange={(event) => setWorkout(event)}>
                        <option value=""></option>
                        {
                            nameSet.map((name) => (
                                <option value={name} key={name}>{name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.mainContainer}>
                </div>
            </>
        )
    }
    else {
        const nameSet = [...new Set(workoutz.filter(w => w.userId == users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id).map(workout => (workout.name)))]
        const currentWorkouts = users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0].exercises.filter(e => e.ename)
        const filteredWorkout = workoutz.filter(w => w.name === currentWorkout)[0];
        const filteredExercises = currentWorkouts.filter((w) => filteredWorkout.exercises.map(e => e.ename).includes(w.ename))

        if(currentWorkouts.length != 0){

            if(filteredExercises.length == 0){
                return(
                    <>
                    <Header />
                    <div className={style.headerContainer}>
                        <h1 className={style.header}>Monitor Progress</h1>
                    </div>
                    <div className={style.lineContainer}>
                        <hr className={style.lineRow} />
                    </div>
                    <div className={style.select}>
                        <h2>Which workout would you like to monitor?</h2>
                        <select onChange={(event) => setWorkout(event)}>
                            <option value=""></option>
                            {
                                nameSet.map((name) => (
                                    <option value={name} key={name}>{name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={style.mainContainer}>
                    <h1 style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}><br/>Whoops...<br/><br/>No Workout Data Entered</h1>
                    </div>
                </>
                )
            }
            return (
                <>
                    <Header />
                    <div className={style.headerContainer}>
                        <h1 className={style.header}>Monitor Progress</h1>
                    </div>
                    <div className={style.lineContainer}>
                        <hr className={style.lineRow} />
                    </div>
                    <div className={style.select}>
                        <h2>Which workout would you like to monitor?</h2>
                        <select onChange={(event) => setWorkout(event)}>
                            <option value=""></option>
                            {
                                nameSet.map((name) => (
                                    <option value={name} key={name}>{name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={style.mainContainer}>
                        {
                            filteredExercises.map((exercise) => (
                                <Graph exercise={exercise} name={exercise.ename} key={exercise.ename} />
                            ))
                        }
                    </div>
                </>
            )
        }
        else{
            return(
                <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Monitor Progress</h1>
                </div>
                <div className={style.lineContainer}>
                    <hr className={style.lineRow} />
                </div>
                <div className={style.select}>
                    <h2>Which workout would you like to monitor?</h2>
                    <select onChange={(event) => setWorkout(event)}>
                        <option value=""></option>
                        {
                            nameSet.map((name) => (
                                <option value={name} key={name}>{name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.mainEmptyContainer}>
                    <h1 style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>Whoops...<br/>No Workouts Here</h1>
                </div>
            </>
            )
        }
    }
}
