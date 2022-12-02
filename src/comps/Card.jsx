import { useState, useEffect } from "react";
import "./Card.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";

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
      <img
        src={imgObj.url.replace("original", "web-large")}
        alt={imgObj.title}
        // onClick={downloadImg(imgObj.url)}
      />
      <div className="card-text">
        <h2>
          {imgObj.title}
          {!isFav ? (
            <AiOutlineHeart
              className="heart-icon"
              onClick={() => setIsFav(!isFav)}
            />
          ) : (
            <AiFillHeart
              className="heart-icon"
              fill="#ff002f"
              onClick={() => setIsFav(!isFav)}
            />
          )}
        </h2>
        <p>Artist: {imgObj.artist}</p>
        <p>Date: {imgObj.date}</p>
        <p>
          More info <a href={imgObj.description}>here</a>
        </p>
        <p>
          <a
            href={imgObj.url}
            target="_blank"
            download
            onClick={(e) => download(e)}
          >
            <AiOutlineDownload />
          </a>
        </p>
      </div>
    </li>
  );
}

export default Card;
