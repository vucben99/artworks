import './Login.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import register from '../utils/register.js'
import login from '../utils/login.js'

function Login({ setPage, email, setEmail, password, setPassword }) {
    return (
        <form className='login-box'>
            <h2>Login or register</h2>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className='login-form-btns'>
                <Button variant="contained" onClick={()=> login(email,password)}>Login</Button>
                <Button variant="contained" onClick={()=> register(email,password)}>Register</Button>
                <Button variant="contained" onClick={() => setPage("guest")}>Guest</Button>
            </div>
        </form>
    )
}

export default Login