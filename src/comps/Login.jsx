import "./Login.css";
// import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import register from "../utils/register.js";
import login from "../utils/login.js";

function Login({ setPage, email, setEmail, password, setPassword }) {
  return (
    <>
      <form className="login-box">
        <h1 className="login-logo">Bozkov Art Magazine</h1>
        <hr />
        <h2>Login</h2>
        <div className="login-inputs">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-button-section">
          {/* // ! Ideiglenesen gombra kattintva átirányít a guest-re!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <button
            className="login-button"
            onClick={() => {
              const bozkovToken = login(email, password);
              if (!bozkovToken) {
                setPage("login");
              } else {
                setPage("guest");
              }
            }}
          >
            Login
          </button>
          <hr />
          <span>
            Or if you don't have an account yet,{" "}
            <span onClick={() => setPage("register")}>register here.</span>
          </span>
          <span>
            Or if you would like to view the site without registration,{" "}
            <span
              onClick={() => {
                setEmail("");
                setPage("guest");
              }}
            >
              login as a guest.
            </span>
          </span>
          {/* <Button variant="contained" onClick={()=> login(email,password)}>Login</Button>
          <Button variant="contained" onClick={()=> register(email,password)}>Register</Button>
          <Button variant="contained" onClick={() => setPage("guest")}>Guest</Button> */}
        </div>
      </form>
    </>
  );
}

export default Login;
