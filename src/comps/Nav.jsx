import './Nav.css'
import Search from './Search'

function Nav({ setIsLoggedIn, loadObjectIDs }) {

    return (
        <nav>
            <h1>Bozkov Art Magazine</h1>
            <Search loadObjectIDs={loadObjectIDs} />
            <span className="nav-link" onClick={() => setIsLoggedIn(false)}>Log out</span>
        </nav>
    )
}

export default Nav