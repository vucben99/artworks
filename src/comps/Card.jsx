import { useState, useEffect } from 'react'
import './Card.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

function Card() {

    const [isFav, setIsFav] = useState(false)

    return (
        <li>
            <img src="https://via.placeholder.com/150" alt="placeholder img" />
            <div className='card-text'>
                <h2>
                    Lorem ipsum
                    {!isFav ? <AiOutlineHeart className="heart-icon" onClick={() => setIsFav(!isFav)} /> : <AiFillHeart className="heart-icon" fill="#ff002f" onClick={() => setIsFav(!isFav)} />}
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea aut vitae repudiandae nesciunt, velit libero harum doloribus voluptas quisquam. Voluptate earum provident perferendis quasi iusto, amet nisi molestias corrupti.</p>
            </div>
        </li>
    )
}

export default Card