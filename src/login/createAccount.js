import React from "react";
import Header from "../header/header";
import style from "./login.module.css"
import {Form} from "react-router-dom"

export default function CreateAccount(){
    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Create Account</h1>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow}/>
            </div>
            <Form className={style.mainContainer}>
                <br/>
                <h2 for="fname">First Name</h2>
                <input id="fname"/>
                <br/>
                <h2 for="lname">Last Name</h2>
                <input id="lname"/>
                <br/>
                <h2 for="email">Email</h2>
                <input id="email" type="email"/>
                <br/>
                <h2 for="password">Password</h2>
                <input id="password" type="password" />
                <br/>
                <input className={style.button} type="submit" value="Create Account"/>
            </Form>
        </>
    )
}