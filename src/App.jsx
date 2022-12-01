import { useState } from 'react'
import './App.css'
import Nav from './comps/Nav'
import CardWrapper from './comps/CardWrapper'
import Login from './comps/Login'
import Footer from './comps/Footer'
import axios from "axios"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [imgList, setImgList] = useState([
    {
      "id": 438821,
      "title": "Ia Orana Maria (Hail Mary)",
      "artist": "Paul Gauguin",
      "date": "1891",
      "description": "https://www.metmuseum.org/art/collection/search/438821",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DT1025.jpg"
    },
    {
      "id": 438822,
      "title": "The Repast of the Lion",
      "artist": "Henri Rousseau (le Douanier)",
      "date": "ca. 1907",
      "description": "https://www.metmuseum.org/art/collection/search/438822",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DT50.jpg"
    },
    {
      "id": 437654,
      "title": "Circus Sideshow (Parade de cirque)",
      "artist": "Georges Seurat",
      "date": "1887–88",
      "description": "https://www.metmuseum.org/art/collection/search/437654",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DP375450_cropped.jpg"
    },
    {
      "id": 483438,
      "title": "Self-Portrait",
      "artist": "Egon Schiele",
      "date": "1911",
      "description": "https://www.metmuseum.org/art/collection/search/483438",
      "url": "https://images.metmuseum.org/CRDImages/ma/original/DP279450.jpg"
    },
    {
      "id": 437344,
      "title": "The Shepherd's Song",
      "artist": "Pierre Puvis de Chavannes",
      "date": "1891",
      "description": "https://www.metmuseum.org/art/collection/search/437344",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DP-14201-001.jpg"
    },
    {
      "id": 436545,
      "title": "Manuel Osorio Manrique de Zuñiga (1784–1792)",
      "artist": "Goya (Francisco de Goya y Lucientes)",
      "date": "1787–88",
      "description": "https://www.metmuseum.org/art/collection/search/436545",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DP287624.jpg"
    },
    {
      "id": 436838,
      "title": "The Fortune-Teller",
      "artist": "Georges de La Tour",
      "date": "probably 1630s",
      "description": "https://www.metmuseum.org/art/collection/search/436838",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DP-14286-015.jpg"
    },
    {
      "id": 435844,
      "title": "The Musicians",
      "artist": "Caravaggio (Michelangelo Merisi)",
      "date": "1597",
      "description": "https://www.metmuseum.org/art/collection/search/435844",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DP-687-001.jpg"
    },
    {
      "id": 459110,
      "title": "A sarki kisbolt",
      "artist": "Zsuga Bubus",
      "date": "2022",
      "description": "https://www.facebook.com/photo/?fbid=586727183156866&set=a.586727149823536",
      "url": "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/302154227_586727176490200_5651389768103080665_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z8xutsXKa6oAX_FZorS&_nc_ht=scontent-vie1-1.xx&oh=00_AfDoZlh666k4mN79kRavKnDxLh9Zj5Fj_NChIgLNLzB-nw&oe=638EBBCE"
    },
    {
      "id": 436532,
      "title": "Self-Portrait with a Straw Hat (obverse: The Potato Peeler)",
      "artist": "Vincent van Gogh",
      "date": "1887",
      "description": "https://www.metmuseum.org/art/collection/search/436532",
      "url": "https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg"
    }
  ])
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
      url: res.data.primaryImageSmall,
    }
  }

  const loadObjectIDs = async (searchText) => {
    setLoadingImgs(true)
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&medium=Paintings&q=${searchText}`
    )

    const objectIDs = res.data.objectIDs

    let imgObjArr = []
    for (const index in objectIDs) {
      const id = objectIDs[index]
      const imgObj = await makeImgObj(id)
      if (imgObj.url === "") { continue }
      console.log(imgObj)
      imgObjArr.push(imgObj)
      if (imgObjArr.length >= 15) break
    }
    setImgList(imgObjArr)
    setLoadingImgs(false)
    console.log(imgObjArr)
  }

  return (
    isLoggedIn ? (
      <main className='main-page'>
        <Nav setIsLoggedIn={setIsLoggedIn} loadObjectIDs={loadObjectIDs} />
        <CardWrapper loadObjectIDs={loadObjectIDs} loadingImgs={loadingImgs} imgList={imgList} />
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
