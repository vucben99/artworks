import "./Login.css";
// import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import register from "../utils/register.js";
import { useState } from "react";
import checkPassword from "../utils/checkPassword.js";
import validateEmail from "../utils/validateEmail.js";

function Register({ setPage, email, setEmail, password, setPassword }) {
  const [passwordAgain, setPasswordAgain] = useState("");

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
        <TextField
          id="outlined-basic"
          label="Password again"
          variant="outlined"
          type="password"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <div className="login-button-section">
          {/* // ! Ideiglenesen gombra kattintva átirányít a guest-re!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <button
            className="login-button"
            onClick={() => {
              if (password !== passwordAgain) {
                alert("Passwords are different...");
              } else if (!checkPassword(password)) {
                alert(
                  "The password should be at least 8 characters long and \n contain an uppercase letter and a number."
                );
              } else if (!validateEmail) {
                alert(
                  "This is not a valid email format."
                )
              } else {
                register(email, password);
                setPage("userSearch");
              }
            }}
          >
            Create Account
          </button>
          <hr />
          <span>
            Or if you already have an account,{" "}
            <span onClick={() => setPage("login")}>login here.</span>
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
        </div>
      </form>
    </>
  );
}

export default Register;
