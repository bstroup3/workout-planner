import React from 'react'
import Header from '../header/header'
import Footer from '../header/footer'

export default function noPageFound() {
  return (
    <>
        <Header/>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fefefe', marginTop: '10vh'}}>
            <h1>404</h1>
            <h1>Page Not Found...</h1>
        </div>
        <Footer/>
    </>
    )
}