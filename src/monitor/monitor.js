import React, { useState } from 'react'
import Header from '../header/header'
import style from "./monitor.module.css"
import Chart from "chart.js/auto"
import {Line} from 'react-chartjs-2'

export default function Monitor() {
    const workouts = [
        {
            name: "Workout 1",
            type: "Upper Body",
            exercises:
                [
                    {
                        ename: "Bench Press",
                        sets:
                            [
                                {
                                    reps: 8,
                                    weight: 145
                                },
                                {
                                    reps: 8,
                                    weight: 145
                                },
                                {
                                    reps: 8,
                                    weight: 145
                                },
                                {
                                    reps: 8,
                                    weight: 145
                                },
                            ]
                    }
                ]
        },
        {
            name: "Workout 1",
            type: "Upper Body",
            exercises:
                [
                    {
                        ename: "Bench Press",
                        sets:
                            [
                                {
                                    reps: 8,
                                    weight: 155
                                },
                                {
                                    reps: 8,
                                    weight: 155
                                },
                                {
                                    reps: 8,
                                    weight: 155
                                },
                                {
                                    reps: 8,
                                    weight: 155
                                },
                            ]
                    }
                ]
        },
        {
            name: "Workout 1",
            type: "Upper Body",
            exercises:
                [
                    {
                        ename: "Bench Press",
                        sets:
                            [
                                {
                                    reps: 8,
                                    weight: 165
                                },
                                {
                                    reps: 8,
                                    weight: 165
                                },
                                {
                                    reps: 8,
                                    weight: 165
                                },
                                {
                                    reps: 8,
                                    weight: 165
                                },
                            ]
                    }
                ]
        }
    ]
    const goals = [
        {
            userid: 12345,
            goalid: 99999,
            ename: "Bench Press",
            reps: 8,
            weight: 225
        }
    ]
    const labels = ["Jan", "Feb", "Mar", "Apr", "Jun"]
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Pounds",
                backgroundColor: "rgb(255,255,255)",
                borderColor: "rgb(85,128,217)",
                data: [135,135,145,145,155,165,170]
            }
        ]
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
            {/* make a seperate linegraph.js to be able to map through the correct amount of exercises 
            and pass in the exercise name and metrics to graph as well as dates EZPZ*/}
            <div className={style.mainContainer}>
                <div className={style.lineChart}>
                <Line data={data} />
                </div>
                <div className={style.lineChart}>
                <Line data={data} />
                </div>
                <div className={style.lineChart}>
                <Line data={data} />
                </div>
                <div className={style.lineChart}>
                <Line data={data} />
                </div>
            </div>
        </>
    )
}
