import { useState, useEffect } from "react";
import "./Card.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";
import saveFavourite from "../utils/saveFavourite.js"

function Card({ imgObj }) {
  const [isFav, setIsFav] = useState(false);

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li>
      <div className="image-section">
        <img
          src={imgObj.url.replace("original", "web-large")}
          alt={imgObj.title}
        // onClick={downloadImg(imgObj.url)}
        />
      </div>
      <div className="card-text">
        <h2>
          {imgObj.title}
        </h2>
        <div className="favLine">
          {!isFav ? (
            <AiOutlineHeart
              className="heart-icon"
              onClick={() => {
                setIsFav(!isFav)
                saveFavourite(imgObj)
              }}
            />
          ) : (
            <AiFillHeart
              className="heart-icon"
              fill="#f7d7489d"
              onClick={() => setIsFav(!isFav)}
            />
          )}
        </div>
        <p><span className="category">Artist:</span> {imgObj.artist}</p>
        <p><span className="category">Date:</span> {imgObj.date}</p>
        <p>
          <span className="category">More info:</span> <span onClick={() => window.location.href = imgObj.description} className="redirect">Click here!</span>
        </p>
        <div className="downloadSection">
          <p>
            <a
              href={imgObj.url}
              target="_blank"
              download
              onClick={(e) => download(e)}
            >
              <span className="downloadIcon">Download <AiOutlineDownload /></span>
            </a>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
