import { useState, useEffect } from 'react'
import './Search.css'


function Search() {

    return (
        <form className="search-box">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search