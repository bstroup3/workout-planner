import React, { useEffect, useState } from 'react'
import Header from './header/header'
import Footer from './header/footer'

export default function Test() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/test')
        .then((res) => res.json())
        .then((data) => setData(data.message))
    },[])
  return (
    <>
      <Header />
      <h1 style={{color: "white", display: "flex", justifyContent: "center", alignContent: "center"}}>{!data ? "Loading..." : data}</h1>
      <Footer/>
    </>
  )
}
