import React from 'react'
import style from "./monitor.module.css"
import { Line, annotation } from 'react-chartjs-2'

export default function Graph({ exercise, name }) {

    if (exercise == undefined || name == undefined) {
        return (
            <h1>Loading ...</h1>
        )
    }
    else {
        const newWorkouts = exercise
        const weights =
            newWorkouts.workouts.map((workout1) => {
                return workout1.sets.map((set) => {
                    return set.weight
                })[newWorkouts.workouts[0].sets.length - 1]
            })

        const reps =
            newWorkouts.workouts.map((workout1) => {
                return workout1.sets.map((set) => {
                    return set.reps
                })[newWorkouts.workouts[0].sets.length - 1]
            })

        const dates = newWorkouts.workouts.map((date) => (
            date.date
        ))
        const labels = dates
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Weight',
                    backgroundColor: "rgb(255,255,255)",
                    borderColor: "rgb(85,128,217)",
                    data: weights
                }
            ]
        }

        const data2 = {
            labels: labels,
            datasets: [
                {
                    label: 'Reps',
                    backgroundColor: "rgb(255,255,255)",
                    borderColor: "rgb(204,204,204)",
                    data: reps
                }
            ]
        }



        const options = {
            scales: {
                x: {
                    grid: {
                        color: "rgba(255, 255, 255, 0.2)" // Set grid lines color to white with opacity
                    }
                },
                y: {
                    grid: {
                        color: "rgba(255, 255, 255, 0.2)" // Set grid lines color to white with opacity
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Hide the legend
                }
            }
        };

        return (
            <div className={style.lineChart}>
                <h2>{name}</h2>
                <div className={style.graphDiv}>
                    <div className={style.realGraphDiv}>
                        <h3 style={{textAlign: 'center'}}>Weight</h3>
                        <Line data={data} options={options} />
                    </div>
                    <div className={style.realGraphDiv}>
                        <h3 style={{textAlign: 'center'}}>Reps</h3>
                        <Line data={data2} options={options} />
                    </div>
                </div>
            </div>
        )
    }
}
