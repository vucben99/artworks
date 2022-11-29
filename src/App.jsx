import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [imgList, setImgList] = useState({})

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
    <div className="App">
      Hello world
    </div>
  )
}

export default App
