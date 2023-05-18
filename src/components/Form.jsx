import Nav from "./Nav";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [username, setUsername] = useState('')
    const [last, setLast] = useState('')
    const [first, setFirst] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const onRegister = async (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            try{
            const data = await axios.post(
                'http://127.0.0.1:8000/api/User/',
                { username: username, password: password , last_name: last, first_name: first, email: email}
            )
            localStorage.setItem("id", data.data.id)
            localStorage.setItem("username", username)
            localStorage.setItem("token", data.data.token)
            localStorage.setItem("lastname", data.data.last_name)
            localStorage.setItem("firstname", data.data.first_name)
            localStorage.setItem("email", data.data.email)
            // localStorage.setItem("deposit", data.data.deposit)
            navigate('/')
            }
            catch(e) {
                alert("ГГ ВП")
            }
        }
    }


    return (
        <>
            <Nav/>
            <form className="input-data">
                <h1>Тіркелу</h1>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Пайдаланушы" required type="text" onChange={(e) => setUsername(e.target.value)} />
                    <span class="input-border input-border-alt"></span>
                </div>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Тегіңіз" required type="text" onChange={(e) => setLast(e.target.value)} />
                    <span class="input-border input-border-alt"></span>
                </div>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Атыңыз" required type="text" onChange={(e) => setFirst(e.target.value)}/>
                    <span class="input-border input-border-alt"></span>
                </div>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Почтаңыз" required type="text" onChange={(e) => setEmail(e.target.value)}/>
                    <span class="input-border input-border-alt"></span>
                </div>
                <div className="form-control">
                    <input class="input input-alt" placeholder="Кұпия сөз" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span class="input-border input-border-alt"></span>
                </div>
                <button type="submit" class="cta" onClick={onRegister}>
                    <span>Тіркелу</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <p><Link to={"/login/"} className="link"><span>Аккаунтыңыз барма? Аккаунтқа кіру</span></Link></p>
            </form>
        </>
    );
}

export default Form;