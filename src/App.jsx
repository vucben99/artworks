import { useState, useEffect } from 'react'
import './App.css'
import Nav from './comps/Nav'
import CardWrapper from './comps/CardWrapper'
import Login from './comps/Login'
import Footer from './comps/Footer'

function App() {

  const [imgList, setImgList] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loadData = async () => {
    const res = await fetch("https://api.harvardartmuseums.org/object?size=10&page=1&apikey=68e5277d-7e38-47b2-9cc3-093891d90747")
    const resJson = await res.json()
    setImgList(resJson)
    console.log(imgList)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    isLoggedIn ? (
      <main className='main-page'>
        <Nav setIsLoggedIn={setIsLoggedIn} />
        <CardWrapper />
        <Footer />
      </main>
    ) : (
      <main className='login-page'>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </main>
    )
  )
}

export default App
