import React from "react";
import Header from "../header/header";
import style from "./login.module.css"
import { Form } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Header />
            <div className={style.headerContainer}>
                <h1 className={style.header}>Login</h1>
            </div>
            <div className={style.lineContainer}>
                <hr className={style.lineRow} />
            </div>
            <Form className={style.mainContainer}>
                <br/>
                <h2 for="username">Username</h2>
                <input id="username"/>
                <br/>
                <h2 for="password">Password</h2>
                <input id="password" type="password" />
                <br/>
                <input className={style.button} type="submit" value="Log In"/>
            </Form>
        </>
    )
}