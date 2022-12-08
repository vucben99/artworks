import "./Nav.css";
import Search from "./Search";
import { useState, useEffect } from "react";
import loadFavouriteArr from "../utils/loadFavouriteArr";

function Nav({
  email,
  setEmail,
  setPassword,
  page,
  setPage,
  loadObjectIDs,
  setFavouriteImgList,
}) {
  const [yOffset, setYOffset] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset < currentYOffset;
    const navbar = document.querySelector("nav");

    setYOffset(currentYOffset);

    if (currentYOffset < 50) {
      navbar.style.transform = "translateY(0vh)";
    } else {
      visible
        ? (navbar.style.transform = "translateY(-100%)")
        : (navbar.style.transform = "translateY(0vh)");
    }
  };

  return (
    <nav id="navbar">
      <h1>Bozkov Art Magazine</h1>
      <div className="desktop">
        <Search loadObjectIDs={loadObjectIDs} setPage={setPage} />
      </div>
      <div id="nav-user-section" className="desktop">
        {email !== "Guest" && (
          <span 
            onClick={async () => {
              const favourites = await loadFavouriteArr();
              console.log("itt vagyok az asszink onClickben", favourites);
              await setFavouriteImgList(favourites);
              await setPage("favourite");
            }}
          >
            Favourite images
          </span>
        )}
        
        <span>{email}</span>
        <button
          className="logout"
          onClick={() => {
            setPage("login");
            setEmail("");
            setPassword("");
            localStorage.setItem("bozkovToken", "");
            localStorage.setItem("bozkovEmail", "");
          }}
        >
          {email==="Guest" ? "Login" : "Logout"}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
