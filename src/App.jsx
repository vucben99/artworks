import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./comps/Nav";
import CardWrapper from "./comps/CardWrapper";
import CardFavouriteWrapper from "./comps/CardFavouriteWrapper.jsx";
import Login from "./comps/Login";
import Register from "./comps/Register";
import Footer from "./comps/Footer";
import axios from "axios";
import basicImages from "./comps/basicImages.json";
import baseUrl from "./utils/baseUrl.json";
import ToTopButton from "./comps/ToTopButton";
// import loadFavouriteArr from "./utils/loadFavouriteArr.js";

function App() {
  
  
  //authorization
  //const [ loggedInUserId, setLoggedInUserId ] = useState(null)
  const [page, setPage] = useState("login"); //1.landing (register,login) - 2.guest (only searching) - 3.userSearch - 4.favourites - 5. formdata
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const selectedImages = basicImages
  .sort(() => 0.5 - Math.random())
  .slice(0, 20);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imgList, setImgList] = useState(selectedImages);
  const [favouriteImgList, setFavouriteImgList] = useState([]);
  
  const [loadingImgs, setLoadingImgs] = useState(false);
  
  useEffect(()=>{
    if (localStorage.getItem("bozkovToken")) {
      setEmail(localStorage.getItem("bozkovEmail"))
      setPage("userSearch")
    }
  },[])

  const loadFavouriteArr = async () => {
    const bozkovToken = localStorage.getItem("bozkovToken");
 
    let config = {
      method: "get",
      url: baseUrl + "api/artwork",
      headers: {
        Authorization: "Bearer " + bozkovToken,
      },
    };

    const response = await axios(config);
    const favourites = await response.data;
    console.log(response.data);
    await setFavouriteImgList(favourites);
    // return favouriteImgList
  };

  const makeImgObj = async (id) => {
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    return {
      id,
      title: res.data.title,
      artist: res.data.artistDisplayName,
      date: res.data.objectDate,
      description: res.data.objectURL,
      url: res.data.primaryImage,
    };
  };

  const loadObjectIDs = async (searchText) => {
    setLoadingImgs(true);
    setImgList([]);
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&medium=Paintings&q=${searchText}`
    );

    const objectIDs = res.data.objectIDs;

    for (const index in objectIDs) {
      const id = objectIDs[index];
      const imgObj = await makeImgObj(id);
      if (imgObj.url === "") {
        continue;
      }
      setImgList((prev) => [...prev, imgObj]);
      setLoadingImgs(false);
    }
  };

  return (
    <div className="App">
      {page === "guest" && (
        <main className="main-page">
          <Nav
            setPage={setPage}
            loadObjectIDs={loadObjectIDs}
            email={"Guest"}
            setEmail={setEmail}
            setPassword={setPassword}
            setFavouriteImgList={setFavouriteImgList}
            page={page}
          />
          <CardWrapper
            loadObjectIDs={loadObjectIDs}
            loadingImgs={loadingImgs}
            imgList={imgList}
            // favouriteImgList={favouriteImgList} //ellen??rizni kell, hogy a keres??si tal??latok k??z??tt van-e m??r elmentett kedvenc!
          />
          <ToTopButton />
        </main>
      )}

      {
        //bel??pett user ide ker??l:
        page === "userSearch" && (
          <main className="main-page">
            <Nav
              setPage={setPage}
              loadObjectIDs={loadObjectIDs}
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              setFavouriteImgList={setFavouriteImgList}
              page={page}
            />
            <CardWrapper
              loadObjectIDs={loadObjectIDs}
              loadingImgs={loadingImgs}
              imgList={imgList}
            />
            <ToTopButton />
          </main>
        )
      }

      {
        //bel??pett user itt t??lti fel a kedvenc k??p??t:
        page === "formdata" && (
          <main className="main-page">
            <Nav
              setPage={setPage}
              loadObjectIDs={loadObjectIDs}
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              setFavouriteImgList={setFavouriteImgList}
              page={page}
            />
            <ImageForm />
            <ToTopButton />
          </main>
        )
      }

      {
        //favourite page here
        page === "favourite" && favouriteImgList && (
          <main className="main-page">
            <Nav
              setPage={setPage}
              loadObjectIDs={loadObjectIDs}
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              setFavouriteImgList={setFavouriteImgList}
              page={page}
            />
            {console.log(
              "itt vagyok a map/for el??tt",
              favouriteImgList
            )}
            <ul className="favouriteContainer">
              {favouriteImgList.map((favouriteObj) => (
                <li key={favouriteObj.id}>
                  <img
                    src={favouriteObj.description}
                    alt=""
                    width="300px"
                  />
                  <h2>{favouriteObj.title}</h2>
       
                </li>
              ))}
            </ul>
            <ToTopButton />
          </main>
        )
      }

      {page === "login" && (
        <main className="login-page">
          <Login
            setPage={setPage}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </main>
      )}

      {page === "register" && (
        <main className="register">
          <Register
            setPage={setPage}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
