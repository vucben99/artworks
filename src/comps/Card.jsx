import { useState, useEffect } from 'react'
import './Card.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { AiOutlineDownload } from 'react-icons/ai';

function Card({ imgObj }) {

    const [isFav, setIsFav] = useState(false)

    return (
        <li>
            <img src={imgObj.url} alt={imgObj.title} />
            <div className='card-text'>
                <h2>
                    {imgObj.title}
                    {!isFav ? <AiOutlineHeart className="heart-icon" onClick={() => setIsFav(!isFav)} /> : <AiFillHeart className="heart-icon" fill="#ff002f" onClick={() => setIsFav(!isFav)} />}
                </h2>
                <p>Artist: {imgObj.artist}</p>
                <p>Date: {imgObj.date}</p>
                <p>More info <a href={imgObj.description}>here</a></p>
                <p><a href={imgObj.url} download={"./"+imgObj.id+"jpg"} target="_blank"><AiOutlineDownload/></a></p>
            </div>
        </li>
    )
}

export default Card