import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import style from "./planWorkout.module.css"
import Header from "../header/header"
import Footer from "../header/footer"
import Trash from "../images/trash.png"

export default function CreateWorkouts() {
    const [exerciseRows, setExerciseRows] = useState([])

    const testFunction = (e) => {
        e.preventDefault()
        console.log(e)
        const object = {
            name: e.target[0].value,
            type: e.target[1].value,
            exercises: []
        }
        for (let i = 2; i < e.target.length-2; i += 3) {
            const ename = e.target[i].value;
            const sets = [];
        
            for (let j = i + 1; j < i + 3; j++) {
                const reps = e.target[j].value;
                sets.push({ reps });
            }
        
            object.exercises.push({ ename, sets });
        }

        console.log(object)
    }

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
    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Plan Workout</h1>
            </div>
            <div className={style.optionsContainer}>
                <Link className={style.option} to="/plan">View Workouts</Link>
                <Link className={style.selectedOption} to="/plan/create">Create New Workout</Link>
                <Link className={style.option} to="/plan/enter">Enter Workout Info</Link>
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