import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    localStorage.removeItem("Sign in")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username === "saratintin!" && password === "0328SJ") {
            setError(false)
            localStorage.setItem("Sign in", true)
            navigate("/Detail")
        }
        setError(true)
    }

    return (
        <>
            <div className="ContentImageLogin">

                <div className="ContentLogin">

                    <h1>Login</h1>

                    <form
                        className="Container"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username"
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button className="ButtonLogin">Sign in</button>
                    </form>
                    {error && <p>You need a username or password</p>}
                </div>
            </div>
        </>
    )
}
export default Login;
