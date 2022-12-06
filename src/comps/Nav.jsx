import "./Nav.css";
import Search from "./Search";

function Nav({
  email,
  setEmail,
  setPassword,
  setPage,
  loadObjectIDs,
}) {
  return (
    <nav id="navbar">
      <h1>Bozkov Art Magazine</h1>
      <div className="desktop">
        <Search loadObjectIDs={loadObjectIDs} />
      </div>
      <div id="nav-user-section" className="desktop">
        <span>{email ? email : "Guest"}</span>
        <button
          className="logout"
          onClick={() => {
            setPage("login");
            setEmail("")
            setPassword("")
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Nav;
