import { buttonBaseClasses } from "@mui/material"
import "./ToTopButton.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ToTopButton = () => {
    return (
        <div id="toTopContainer">
            <BsFillArrowUpCircleFill className="toTopButton" fill="#00e5ff" onClick={() => (window.location.href = "#")} />
        </div>
    )
}

export default ToTopButton;