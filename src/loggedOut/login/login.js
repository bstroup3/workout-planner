import React, { useState,useEffect } from "react";
import Header from "../header/header";
import Footer from "../header/footer";
import style from "./login.module.css"
import { Form, Link } from "react-router-dom";

export default function Login() {
    const [users, setUsers] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        fetch(API_URL + 'users')
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
    },[])

    const testFunction = async (e) => {
        e.preventDefault()
        try{
            const user = users.filter(user => user.userName == e.target[0].value && user.password == e.target[1].value)
            if(user.length > 0){
                window.location.href = `/${user[0]._id}`
            }
            else{
                throw('No Users Found')
            }
        }catch(error){
            console.log(error)
        }
    }

    if(users == null){
        return(
            <>
            <Header />
            <h1>Loading...</h1>
            <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Login</h1>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow} />
            </div>
            <form className={style.mainContainer} onSubmit={testFunction}>
                <br/>
                <h2>Username</h2>
                <input id="username"/>
                <br/>
                <h2>Password</h2>
                <input id="password" type="password" />
                <br/>
                <input className={style.button} type="submit" value="Log In"/>
                <Link to="/createaccount" style={{color: '#fefefe'}}>Don't have an account?</Link>
            </form>
        </>
    )
}