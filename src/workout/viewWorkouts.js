import React from 'react'
import { Link } from "react-router-dom"
import style from "./planWorkout.module.css"
import Header from "../header/header"
import Workout from './workout'
import Footer from '../header/footer'

export default function viewWorkouts() {

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
                    },
                    {
                        ename: "Pull-Ups",
                        sets:
                            [
                                {
                                    reps: 12,
                                    weight: null
                                },
                                {
                                    reps: 12,
                                    weight: null
                                },
                                {
                                    reps: 10,
                                    weight: null
                                },
                                {
                                    reps: 8,
                                    weight: null
                                },
                            ]
                    },
                    {
                        ename: "Barbell Row",
                        sets:
                            [
                                {
                                    reps: 12,
                                    weight: 115
                                },
                                {
                                    reps: 12,
                                    weight: 115
                                },
                                {
                                    reps: 12,
                                    weight: 115
                                }
                            ]
                    },
                    {
                        ename: "Dumbell Incline Bench Press",
                        sets:
                            [
                                {
                                    reps: 12,
                                    weight: 40
                                },
                                {
                                    reps: 12,
                                    weight: 40
                                },
                                {
                                    reps: 12,
                                    weight: 40
                                }
                            ]
                    }
                ]
        },
        {
            name: "Workout 2",
            type: "Lower Body",
            exercises:
                [
                    {
                        ename: "Leg Press",
                        sets: 
                        [
                            {
                                reps: 12,
                                weight: 225
                            },
                            {
                                reps: 12,
                                weight: 225
                            },
                            {
                                reps: 12,
                                weight: 225
                            },
                            {
                                reps: 12,
                                weight: 225
                            }
                        ]
                    },
                    {
                        ename: "Romanian Deadlift",
                        sets: 
                        [
                            {
                                reps: 12,
                                weight: 135
                            },
                            {
                                reps: 12,
                                weight: 135
                            },
                            {
                                reps: 12,
                                weight: 135
                            },
                            {
                                reps: 12,
                                weight: 135
                            }
                        ]
                    },
                    {
                        ename: "Seated Calf Raises",
                        sets: 
                        [
                            {
                                reps: 15,
                                weight: 90
                            },
                            {
                                reps: 15,
                                weight: 90
                            },
                            {
                                reps: 15,
                                weight: 90
                            }
                        ]
                    }
                ]
        },
        {
            name: "Workout 3",
            type: "Push",
            exercises: [
                {
                    ename: "Dumbell Flat Bench Press",
                    sets: [
                        {
                            reps: 8,
                            weight: 55
                        },
                        {
                            reps: 8,
                            weight: 55
                        },
                        {
                            reps: 8,
                            weight: 55
                        },
                        {
                            reps: 8,
                            weight: 55
                        },
                    ]
                },
                {
                    ename: "Tricep Pushdown",
                    sets: [
                        {
                            reps: 12,
                            weight: 30
                        },
                        {
                            reps: 12,
                            weight: 30
                        },
                        {
                            reps: 12,
                            weight: 30
                        },
                        {
                            reps: 12,
                            weight: 30
                        },
                    ]
                },
                {
                    ename: "Cable Crossover",
                    sets: [
                        {
                            reps: 12,
                            weight: 40
                        },
                        {
                            reps: 12,
                            weight: 40
                        },
                        {
                            reps: 12,
                            weight: 40
                        }
                    ]
                },
                {
                    ename: "Cable Fly",
                    sets: [
                        {
                            reps: 12,
                            weight: 35
                        },
                        {
                            reps: 12,
                            weight: 35
                        },
                        {
                            reps: 12,
                            weight: 35
                        }
                    ]
                },
                {
                    ename: "Military Press",
                    sets: [
                        {
                            reps: 12,
                            weight: 20
                        },
                        {
                            reps: 12,
                            weight: 25
                        },
                        {
                            reps: 12,
                            weight: 25
                        }
                    ]
                },
                {
                    ename: "Lateral Shoulder Raise",
                    sets: [
                        {
                            reps: 15,
                            weight: 15
                        },
                        {
                            reps: 15,
                            weight: 15
                        },
                        {
                            reps: 15,
                            weight: 15
                        }
                    ]
                }
            ]
        },
        {
            name: "Workout 4",
            type: "Pull",
            exercises: [
                {
                    ename: "Lat Pulldown",
                    sets: [
                        {
                            reps: 10,
                            weight: 140
                        },
                        {
                            reps: 10,
                            weight: 140
                        },
                        {
                            reps: 10,
                            weight: 140
                        },
                        {
                            reps: 8,
                            weight: 140
                        }
                    ]
                },
                {
                    ename: "Cable Row",
                    sets: [
                        {
                            reps: 12,
                            weight: 100
                        },
                        {
                            reps: 12,
                            weight: 100
                        },
                        {
                            reps: 12,
                            weight: 100
                        },
                        {
                            reps: 12,
                            weight: 100
                        }
                    ]
                },
                {
                    ename: "Preacher Curl",
                    sets: [
                        {
                            reps: 12,
                            weight: 50
                        },
                        {
                            reps: 10,
                            weight: 50
                        },
                        {
                            reps: 10,
                            weight: 50
                        }
                    ]
                },
                {
                    ename: "Bent Over Dumbell Fly",
                    sets: [
                        {
                            reps: 12,
                            weight: 15
                        },
                        {
                            reps: 12,
                            weight: 15
                        },
                        {
                            reps: 12,
                            weight: 15
                        }
                    ]
                },
                {
                    ename: "Dumbell Curl",
                    sets: [
                        {
                            reps: 12,
                            weight: 20
                        },
                        {
                            reps: 12,
                            weight: 20
                        },
                        {
                            reps: 12,
                            weight: 20
                        }
                    ]
                }
            ]
        },
        {
            name: "Workout 5",
            type: "Legs",
            exercises: [
                {
                    ename: "Back Squat",
                    sets: [
                        {
                            reps: 8,
                            weight: 135
                        },
                        {
                            reps: 8,
                            weight: 155
                        },
                        {
                            reps: 8,
                            weight: 155
                        }
                    ]
                },
                {
                    ename: "Leg Extension",
                    sets: [
                        {
                            reps: 12,
                            weight: 90
                        },
                        {
                            reps: 12,
                            weight: 90
                        },
                        {
                            reps: 12,
                            weight: 90
                        }
                    ]
                },
                {
                    ename: "Hamstring Curls",
                    sets: [
                        {
                            reps: 12,
                            weight: 85
                        },
                        {
                            reps: 12,
                            weight: 85
                        },
                        {
                            reps: 12,
                            weight: 85
                        },
                    ]
                },
                {
                    ename: "Seated Calf Raise",
                    sets: [
                        {
                            reps: 15,
                            weight: 90
                        },
                        {
                            reps: 15,
                            weight: 90
                        },
                        {
                            reps: 15,
                            weight: 90
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Plan Workout</h1>
            </div>
            <div className={style.optionsContainer}>
                <Link className={style.selectedOption} to="/plan">View Workouts</Link>
                <Link className={style.option} to="/plan/create">Create New Workout</Link>
                <Link className={style.option} to="/plan/enter">Enter Workout Info</Link>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow} />
            </div>
            <div className={style.mainContainer}>
                <h2>Your Workouts</h2>
                <br />
                {
                    workouts.map((workout) => {
                        console.log(workout)
                        return (
                            <Workout workout={workout} />
                        )
                    })
                }
            </div>
            <Footer/>
        </>
    )
}
