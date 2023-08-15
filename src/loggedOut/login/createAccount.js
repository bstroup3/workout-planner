import React,{useState, useEffect} from "react";
import Header from "../header/header";
import style from "./login.module.css"
import {Link} from 'react-router-dom'

export default function CreateAccount(){

    const [newUser, setNewUser] = useState(null)

    const testFunction = async (e) => {
        e.preventDefault()
        console.log(e)
        const object = {
            fname: e.target[0].value,
            lname: e.target[1].value,
            username: e.target[2].value,
            password: e.target[3].value
        }
        setNewUser(object)
    }

    useEffect(() => {
        if(newUser == null) return
        fetch('/users/', 
        {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newUser)})
        window.location.href = '/login'
    },[newUser])

    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Create Account</h1>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow}/>
            </div>
            <form className={style.mainContainer} onSubmit={testFunction}>
                <br/>
                <h2>First Name</h2>
                <input/>
                <br/>
                <h2>Last Name</h2>
                <input/>
                <br/>
                <h2>Username</h2>
                <input/>
                <br/>
                <h2>Password</h2>
                <input type="password"/>
                <br/>
                <input className={style.button} type="submit" value="Create Account"/>
                <Link to="/login" style={{color: '#fefefe'}}>Already have an account?</Link>
            </form>
        </>
    )
}