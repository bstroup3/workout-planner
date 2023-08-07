import React, { useState } from 'react'
import Header from '../header/header'
import style from "./goals.module.css"
import Footer from '../header/footer'
import { Link } from 'react-router-dom'
import { unstable_batchedUpdates } from 'react-dom'
export default function CreateGoals() {
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

    const [workout, setWorkout] = useState()

    const setCurrentWorkout = (e) => {
        e.preventDefault()
        setWorkout(e.target.value)
    }

    if (workout == undefined || workout == "") {
        return (
            <>
                <Header />
                <div className={style.headerContainer}>
                    <h1 className={style.header}>Set Goals</h1>
                </div>
                <div className={style.optionsContainer}>
                    <Link className={style.option} to="/goals">View Goals</Link>
                    <Link className={style.selectedOption} to="/goals/create">Set New Goal</Link>
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
                                    workouts.map((workout) => (
                                        <option value={workout.name}>{workout.name}</option>
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
                    <Link className={style.option} to="/goals">View Goals</Link>
                    <Link className={style.selectedOption} to="/goals/create">Set New Goal</Link>
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
                                    workouts.map((workout) => (
                                        <option value={workout.name}>{workout.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={style.dropdownDiv}>
                            <label>Which exercise would you like to create a new goal for?</label>
                            <select>
                                <option value=""></option>
                                {
                                    workouts.filter((workout1) => (workout1.name == workout))[0].exercises
                                        .map((exercise) => (
                                            <option value={exercise.ename}>{exercise.ename}</option>
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