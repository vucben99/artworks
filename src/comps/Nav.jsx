import "./Nav.css";
import Search from "./Search";
import { useState, useEffect } from "react";
import loadFavouriteArr from "../utils/loadFavouriteArr";

function Nav({ email, setEmail, setPassword, setPage, loadObjectIDs , setFavouriteImgList}) {
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
        <Search loadObjectIDs={loadObjectIDs} />
      </div>
      <div id="nav-user-section" className="desktop">
        <span
          onClick={async () => {
            const favourites = await loadFavouriteArr()
            setFavouriteImgList(favourites)
            setPage("favourite");
          }}
        >
          Favourite images
        </span>{" "}
        {/*innen ugrunk a page favourite-re*/}
        <span>{email ? email : "Guest"}</span>
        <button
          className="logout"
          onClick={() => {
            setPage("login");
            setEmail("");
            setPassword("");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Nav;
