import './Nav.css'
import Search from './Search'

function Nav({ setPage, loadObjectIDs }) {

    return (
        <nav>
            <h1>Bozkov Art Magazine</h1>
            <Search loadObjectIDs={loadObjectIDs} />
            <span className="nav-link" onClick={() => setPage("landing")}>Log out</span>
        </nav>
    )
}

export default Nav