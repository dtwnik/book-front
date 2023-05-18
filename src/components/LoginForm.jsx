import Nav from "./Nav";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onRegister = async (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            try {
                const data = await axios.post(
                    'http://127.0.0.1:8000/api/auth/',
                    { username: username, password: password }
                )
                alert("Сіз сәтті кірдіңіз")
                localStorage.setItem("id", data.data.id)
                localStorage.setItem("username", username)
                localStorage.setItem("token", data.data.token)
                localStorage.setItem("lastname", data.data.last_name)
                localStorage.setItem("firstname", data.data.first_name)
                localStorage.setItem("email", data.data.email)
                navigate('/')
            }
            catch (e) {
                alert("Пайдаланушы аты немесе кұпия сөз дұрыс емес")
            }
        }
    }


    return (
        <>
            <Nav/>
            <form className="input-data">
                <h1>Авторизация</h1>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Пайдаланушы" required type="text" onChange={(e) => setUsername(e.target.value)} />
                    <span class="input-border input-border-alt"></span>
                </div>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Кұпия сөз" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span class="input-border input-border-alt"></span>
                </div>
                <button type="submit" class="cta" onClick={onRegister}>
                    <span>Авторизация</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <p><Link to={"/register/"} className="link"><span>Аккаунтыңыз жоқпа? Аккаунтқа құру</span></Link></p>
            </form>
        </>
    );
}

export default LoginForm;