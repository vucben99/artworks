import './Login.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function Login({ setIsLoggedIn }) {
    return (
        <form className='login-box'>
            <h2>Login or register</h2>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
            <div className='login-form-btns'>
                <Button variant="contained" >Login</Button>
                <Button variant="contained">Register</Button>
                <Button variant="contained" onClick={() => setIsLoggedIn(true)}>Guest</Button>
            </div>
        </form>
    )
}

export default Login