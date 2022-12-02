import { useState, useEffect } from "react";
import "./Card.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";

function Card({ imgObj }) {
  const [isFav, setIsFav] = useState(false);

  // const downloadImg = (url) => {
  //   saveAs(url, "valami.jpg");
  // };

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
            download={imgObj.url}
            // onClick={downloadImg(imgObj.url)}
          >
            <AiOutlineDownload />
          </a>
        </p>
      </div>
    </li>
  );
}

export default Card;
