import "./Login.css"
// import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField"
import register from "../utils/register.js"
import { useState } from "react"
import checkPassword from "../utils/checkPassword.js"
import validateEmail from "../utils/validateEmail.js"

function Register({ setPage, email, setEmail, password, setPassword }) {
  const [passwordAgain, setPasswordAgain] = useState("")
  const [pwDiff, setPwDiff] = useState("")
  const [pwAtleast8, setPwAtleast8] = useState("")
  const [emailValid, setEmailValid] = useState("")
  const [regSuccess, setRegSuccess] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <form className="login-box" onSubmit={(e) => handleSubmit(e)}>
        <h2>Registration</h2>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password again"
          variant="outlined"
          type="password"
          autoComplete="off"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <p className="pwDiff">{pwDiff}</p>
        <p className="pwDiff">{pwAtleast8}</p>
        <p className="pwDiff">{emailValid}</p>
        <p className="regSuccess">{regSuccess}</p>
        <div className="login-button-section">
          {/* // ! Ideiglenesen gombra kattintva átirányít a guest-re!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <button
            className="login-button"
            onClick={() => {
              if (password !== passwordAgain) {
                setPwDiff("Passwords do not match!")
              }
              if (!checkPassword(password)) {
                setPwAtleast8("The password should be at least 8 characters long and contain an uppercase letter and a number.")
              }
              if (!validateEmail) {
                setEmailValid("This is not a valid email format.")
              } else {
                if ((password == passwordAgain) && (checkPassword(password)) && (validateEmail(email))) {
                  register(email, password)
                  setRegSuccess("Registered successfully! Now you can log in.")
                }
                
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
                setEmail("")
                setPage("guest")
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

export default Register
