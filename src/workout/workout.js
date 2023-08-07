import React from 'react'
import style from "./planWorkout.module.css"

export default function Workout({workout}) {
  return (
    <div className={style.row}>
        <h2 className={style.workoutName}>{workout.name}</h2>
        <h2 className={style.workoutName}>{workout.type}</h2>
        {
            workout.exercises.map((exercise) => {
                return(
                    <div className={style.column}>
                        <h4>{exercise.ename}</h4>
                        <h4>{exercise.sets.length} x {exercise.sets[0].reps}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}
