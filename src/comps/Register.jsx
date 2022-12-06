import "./Register.css";
// import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import register from "../utils/register.js";

function Register({ setPage, email, setEmail, password, setPassword }) {
  return (
    <>
      <form className="login-box">
        <h2>Registration</h2>
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
        <div className="login-button-section">
          {/* // ! Ideiglenesen gombra kattintva átirányít a guest-re!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <button
            className="login-button"
            onClick={() => register(email, password)(setPage("guest"))}
          >
            Create Account
          </button>
          <hr />
          <span>
            Or if you already have an account, <span onClick={() => setPage("login")}>login here.</span>
          </span>
          {/* <Button variant="contained" onClick={()=> login(email,password)}>Login</Button>
                <Button variant="contained" onClick={()=> register(email,password)}>Register</Button>
                <Button variant="contained" onClick={() => setPage("guest")}>Guest</Button> */}
        </div>
      </form>
    </>
  );
}

export default Register;