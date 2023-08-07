import React, { useState } from 'react'
import Header from '../header/header'
import style from "./monitor.module.css"
import Chart from "chart.js/auto"
import { Line } from 'react-chartjs-2'
import Graph from './graph'

export default function Monitor() {
    const workouts = [
        {
            name: "Workout 1",
            type: "Upper Body",
            date: "8/7/2023",
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
                                    weight: 125
                                },
                                {
                                    reps: 12,
                                    weight: 135
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
            name: "Workout 1",
            type: "Upper Body",
            date: "8/14/2023",
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
                                    reps: 10,
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
                                    weight: 125
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
                        ename: "Dumbell Incline Bench Press",
                        sets:
                            [
                                {
                                    reps: 12,
                                    weight: 40
                                },
                                {
                                    reps: 12,
                                    weight: 45
                                },
                                {
                                    reps: 12,
                                    weight: 45
                                }
                            ]
                    }
                ]
        },
        {
            name: "Workout 1",
            type: "Upper Body",
            date: "8/21/2023",
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
                                    weight: 125
                                },
                                {
                                    reps: 12,
                                    weight: 125
                                },
                                {
                                    reps: 12,
                                    weight: 125
                                }
                            ]
                    },
                    {
                        ename: "Dumbell Incline Bench Press",
                        sets:
                            [
                                {
                                    reps: 12,
                                    weight: 45
                                },
                                {
                                    reps: 12,
                                    weight: 45
                                },
                                {
                                    reps: 12,
                                    weight: 45
                                }
                            ]
                    }
                ]
        },
        {
            name: "Workout 2",
            type: "Lower Body",
            date: "8/8/2023",
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
            name: "Workout 2",
            type: "Lower Body",
            date: "8/15/2023",
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
            name: "Workout 2",
            type: "Lower Body",
            date: "8/22/2023",
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
    const goals = [
        {
            userid: 12345,
            goalid: 99999,
            ename: "Bench Press",
            reps: 8,
            weight: 225
        }
    ]

    const setWorkout = (event) => {
        setCurrentWorkout(event.target.value)
    }
    const [currentWorkout, setCurrentWorkout] = useState("")

    const nameSet = [...new Set(workouts.map(workout => (workout.name)))]
    console.log(nameSet)

    if (currentWorkout == undefined || currentWorkout == "") {
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
                                <option value={name}>{name}</option>
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

        const currentWorkouts = workouts.filter((workout) => (workout.name == currentWorkout))
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
                                <option value={name}>{name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.mainContainer}>
                    {
                        currentWorkouts[0].exercises.map((exercise) => (
                            <Graph workouts={currentWorkouts} exercise={exercise} key={exercise.ename} />
                        ))
                    }
                </div>
            </>
        )
    }
}
