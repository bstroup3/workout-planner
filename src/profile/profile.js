import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../header/footer'
import NoPageFound from '../noPageFound/noPageFound'
import style from './profile.module.css'
import { Link } from 'react-router-dom'

export default function Profile() {

  const [users, setUsers] = useState(null)
  const [user, setUser] = useState(null)
  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(API_URL + 'users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
  }, [])

  useEffect(() => {
    if (users == null || users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0] == undefined) return
    setUser(users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0])
  }, [users])

  const handleDelete = async () => {
    const response = await fetch(API_URL + `users/delete/${user._id}`, {method: 'DELETE'})
    if (response.ok){
      const data = await response.json()
      window.location.href = "/"
  }
  }

  if (users == null || user == null) {
    return (
      <>
        <Header />
        <h1>Loading...</h1>
        <Footer />
      </>
    )
  }
  if (users.filter(user => user._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1])[0] == undefined) {
    return (
      <NoPageFound />
    )
  }
  return (
    <>
      <Header />
      <div className={style.mainContainer}>
        <h1>Username: <br />{user.userName}</h1>
        <br />
        <h1>Full Name: <br />{user.fname + " " + user.lname}</h1>
        <br />
        <Link className={style.delete} to="/">Log Out</Link>
        <br />
        <button className={style.deleteButton} onClick={handleDelete}>Delete Account</button>
      </div>
      <Footer />
    </>
  )
}
