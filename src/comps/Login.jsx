import './Login.css'

function Login({setIsLoggedIn}) {
    return (
        <form className='login-box'>
            <h2>Login or register</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className='login-form-btns'>
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
                <button>Register</button>
            </div>
        </form>
    )
}

export default Login