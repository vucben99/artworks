import { useState, useEffect } from 'react'
import './Search.css'


function Search({ loadObjectIDs }) {

    const [searchText, setSearchText] = useState("")

    function searchHandler(e, searchText) {
        e.preventDefault()
        loadObjectIDs(searchText)
        setSearchText("")
    }

    return (
        <form className="search-box" onSubmit={(e) => searchHandler(e, searchText)}>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search