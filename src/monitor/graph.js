import React from 'react'
import style from "./monitor.module.css"
import { Line, annotation } from 'react-chartjs-2'

export default function Graph({ workouts, exercise }) {

    if (workouts == undefined || exercise == undefined) {
        return (
            <h1>Loading ...</h1>
        )
    }
    else {
        const newWorkouts = workouts

        const goals = [
            {
                userid: 12345,
                goalid: 99999,
                ename: "Bench Press",
                reps: 8,
                weight: 225
            }
        ]

        const weights = newWorkouts.map((workout) => (
            workout.exercises.filter((exercise1) => (exercise1.ename == exercise.ename))[0].sets.map((set) => (
                set.weight
            )).slice(-2)
        ))

        const reps = newWorkouts.map((workout) => (
            workout.exercises.filter((exercise1) => (exercise1.ename == exercise.ename))[0].sets.map((set) => (
                set.reps
            )).slice(-2)
        ))
        const metric = (weights[0][0] == null) ? reps : weights

        const dates = newWorkouts.map((workout) => (
            workout.date
        ))

        const labels = dates
        const data = {
            labels: labels,
            datasets: [
                {
                    label: exercise.ename,
                    backgroundColor: "rgb(255,255,255)",
                    borderColor: "rgb(85,128,217)",
                    data: metric
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
                <h2>{exercise.ename}</h2>
                <Line data={data} options={options} />
            </div>
        )
    }
}
