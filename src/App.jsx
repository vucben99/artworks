import { useState } from 'react'
import './App.css'
import Nav from './comps/Nav'
import CardWrapper from './comps/CardWrapper'
import Login from './comps/Login'
import Footer from './comps/Footer'
import axios from "axios"
import basicImages from "./comps/basicImages.json";
import baseUrl from "./utils/baseUrl.json"

function App() {



  //authorization
  //const [ loggedInUserId, setLoggedInUserId ] = useState(null)
  const [ page, setPage ] = useState("landing")  //1.landing (register,login) - 2.guest (only searching) - 3.usersearch - 4.favourites 
  const [ posts, setPosts ] = useState(null)
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ content, setContent ] = useState("")




  const selectedImages = basicImages.sort(() => 0.5 - Math.random()).slice(0,20);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [imgList, setImgList] = useState(selectedImages)
  // {
  //   "id": 459110,
  //   "title": "A sarki kisbolt",
  //   "artist": "Terence Hill (alias Zsuga Bubus)",
  //   "date": "2022",
  //   "description": "https://www.facebook.com/photo/?fbid=586727183156866&set=a.586727149823536",
  //   "url": "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/302154227_586727176490200_5651389768103080665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z8xutsXKa6oAX_FZorS&_nc_ht=scontent-vie1-1.xx&oh=00_AfDoZlh666k4mN79kRavKnDxLh9Zj5Fj_NChIgLNLzB-nw&oe=638EBBCE"
  // }
  const [loadingImgs, setLoadingImgs] = useState(false)

  const makeImgObj = async (id) => {
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    )
    return {
      id,
      title: res.data.title,
      artist: res.data.artistDisplayName,
      date: res.data.objectDate,
      description: res.data.objectURL,
      url: res.data.primaryImage,
    }
  }

  const loadObjectIDs = async (searchText) => {
    setLoadingImgs(true)
    setImgList([])
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&medium=Paintings&q=${searchText}`
    )

    const objectIDs = res.data.objectIDs

    // let imgObjArr = []
    for (const index in objectIDs) {
      const id = objectIDs[index]
      const imgObj = await makeImgObj(id)
      if (imgObj.url === "") { continue }
      console.log(imgObj)
      // imgObjArr.push(imgObj)
      setImgList(prev => [...prev, imgObj])
      setLoadingImgs(false)
      // if (Number(index) >= 10) break
    }
    // setImgList(imgObjArr)
    // console.log(imgObjArr)npm run dev
    
  }

 



  return (
    <div className="App">
      {(page === "guest") && (
        <main className='main-page'>
          <Nav setPage={setPage} loadObjectIDs={loadObjectIDs} />
          <CardWrapper loadObjectIDs={loadObjectIDs} loadingImgs={loadingImgs} imgList={imgList} />
          <Footer />
        </main>
      )} 
      {(page === "landing") && (
        <main className='login-page'>
          <Login setPage={setPage} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </main>
      )}
    
  </div>
  )
}

export default App
