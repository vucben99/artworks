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
      "title": "Young Girl Bathing",
      "artist": "Auguste Renoir",
      "date": "1892",
      "description": "https://www.metmuseum.org/art/collection/search/459110",
      "url": "https://images.metmuseum.org/CRDImages/rl/original/DP-17279-001.jpg"
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
      url: res.data.primaryImage,
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
      if (imgObjArr.length >= 10) break
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
