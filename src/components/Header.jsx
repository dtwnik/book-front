import logo from '../assets/img/logo.jpg'
import icon from '../assets/img/cart-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Header = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [isSuperUser, setIsSuperUser] = useState(false)




    const Logout = () => {
        const isSure = window.confirm("Аккаунттан шыққыныз келе?")
        if (isSure) {
            localStorage.removeItem("id")
            localStorage.removeItem("username")
            localStorage.removeItem("token")
            localStorage.removeItem("lastname")
            localStorage.removeItem("firstname")
            localStorage.removeItem("email")
            setIsAuth(false)
            setUsername("")
            navigate('/')
        }
    }

    useEffect(() => {
        let basket = JSON.parse(localStorage.getItem('basket'))
        let basketCount = basket != null ? basket.length : 0
        const id = localStorage.getItem("id")
        const login = localStorage.getItem("username")
        setUsername(login)
        setCount(basketCount)
        if (id && login) {
            setIsAuth(true)
        }
        if(login == 'Admin' || login == 'Karakat'){
            setIsSuperUser(true)
            console.log(login)
        }
        else{
            setIsSuperUser(false)
        }
    }, [setCount]);
    console.log(isSuperUser)
    return (
        <>
            <section id='header'>
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="nav-item">
                    <ul>
                        <li><Link to={'/'}>Басты бет</Link></li>
                        <li><Link to={'/Book/'}>Кітаптар</Link></li>
                        <li><Link to={'/contact/'}>Байланыс</Link></li>

                        {isAuth ?
                            <div className='dropdown'>
                                <div className='dropbtn'>{username}</div>
                                <div className='dropdown-content'>
                                    <div className="ssylki">
                                        <Link to={'/profile/'}>Профиль</Link>
                                    </div>
                                    <div className="ssylki">
                                        <Link to={'/status/'}>Тапсырыстар</Link>
                                    </div>
                                    {isSuperUser && <div className="ssylki"><Link to={'http://127.0.0.1:8000/admin/'}>Админ панелі</Link></div> }
                                    <div onClick={Logout} className="ssylki">Шығу</div>
                                    
                                </div>
                            </div>
                            :
                            <>
                                <li><Link to={'/register/'}>Тіркелу</Link></li>
                                <li><Link to={'/login/'}>Кіру</Link></li>
                            </>
                        }


                    </ul>
                </div>
                <div className="cart-and-log">
                    <div className="cart">
                        <Link to={'/cart/'}>
                            <div className="cart-thumb">
                                <img src={icon} />
                                {count ? <span className='label'>{count}</span> : <span className='label'>0</span>}

                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;