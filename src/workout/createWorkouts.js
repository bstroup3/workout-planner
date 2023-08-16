import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import style from "./planWorkout.module.css"
import Header from "../header/header"
import Footer from "../header/footer"
import Trash from "../images/trash.png"
import NoPageFound from '../noPageFound/noPageFound'

export default function CreateWorkouts() {
    const [exerciseRows, setExerciseRows] = useState([])
    const [newWorkout, setNewWorkout] = useState(null)
    const [users, setUsers] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    const testFunction = async (e) => {
        e.preventDefault()
        console.log(e)
        const object = {
            name: e.target[0].value,
            userId: users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0]._id,
            type: e.target[1].value,
            exercises: []
        }
        for (let i = 2; i < e.target.length-2; i += 3) {
            const ename = e.target[i].value;
            const sets = [];

            for (let j = 0; j < parseInt(e.target[i+1].value); j++) {
                const reps = e.target[i+2].value;
                await sets.push({ reps });
            }
        
            await object.exercises.push({ ename, sets });
        }

        setNewWorkout(object)
    }

    useEffect(() => {
        fetch(API_URL + 'users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])

    useEffect(() => {
        if(newWorkout == null) return
        console.log(newWorkout)
        fetch(API_URL + 'workouts/', 
        {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newWorkout)})
        setTimeout(() => {
            window.location.reload()
        },250)
    }, [newWorkout])

    const addRow = (e, id) => {
        e.preventDefault();
        const newRow = { id: exerciseRows.length + 1 };
        setExerciseRows([...exerciseRows, newRow])
    };
    const newDeleteRow = (e, id) => {
        e.preventDefault()
        let count = 1;
        const newRows = exerciseRows.filter((row) => (row.id != id))
        newRows.map((row) => {
            row.id = count
            count++
        })
        setExerciseRows(newRows)
    }
    if(users == null){
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Plan Workout</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                    <Link className={style.selectedOption} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                    <Link className={style.option} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
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
    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Plan Workout</h1>
            </div>
            <div className={style.optionsContainer}>
                <Link className={style.option} to={`/plan/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>View Workouts</Link>
                <Link className={style.selectedOption} to={`/plan/create/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Create New Workout</Link>
                <Link className={style.option} to={`/plan/enter/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`}>Enter Workout Info</Link>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow} />
            </div>
            <div className={style.mainContainer}>
                <form className={style.workoutForm} onSubmit={testFunction}>
                    <label>Workout Name</label>
                    <input type='text' name='name' />
                    <br />
                    <label>Type of Workout</label>
                    <input type='text' placeholder='ex. Push, Pull, Legs' name='type' />
                    <br />
                    <label>Exercises</label>
                    <table>
                        <tbody>
                            <tr style={{textAlign: "center"}}>
                                <td>#</td>
                                <td>Exercise Name</td>
                                <td>Sets</td>
                                <td>Reps</td>
                            </tr>
                            {
                                exerciseRows.map((row) => {
                                    return (
                                        <tr key={row.id}>
                                            <td style={{textAlign: "center", marginRight: "20px"}}>{row.id}</td>
                                            <td><input type='text' /></td>
                                            <td><input type='text' /></td>
                                            <td><input type='text' /></td>
                                            <td><img src={Trash}  className={style.deleteButton} value="Delete" onClick={(event) => newDeleteRow(event, row.id)}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                        <button onClick={addRow} className={style.button}>Add Row</button>
                    <br/><br/><br/>
                    <button type='submit' className={style.button}>Create</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}