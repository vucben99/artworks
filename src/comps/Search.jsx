import { useState } from 'react'
import './Search.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { BsSearch } from 'react-icons/bs'

function Search({ loadObjectIDs }) {

    const [searchText, setSearchText] = useState("")

    function searchHandler(e, searchText) {
        e.preventDefault()
        loadObjectIDs(searchText)
        setSearchText("")
    }

    return (
        <form className="search-box" onSubmit={(e) => searchHandler(e, searchText)}>
            <TextField onChange={(e) => setSearchText(e.target.value)} value={searchText} id="outlined-basic" label="Search..." variant="outlined" type="searchfield" />
            <Button type="submit" variant="contained"><BsSearch /></Button>
        </form>
    )
}

export default Search