import Header from "../components/Header";
import {useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const post = () => {
        alert('Байланысынызға рахмет, менеджерлер сізбен хабарласады')
        navigate('/')
    }
    return (
        <>
            <Header />
            <div className="input-form">
                <div className="nav-url">
                    <span>Басты бет</span> → Байланыс
                </div>
                <form className="input-data">
                <h1>Байланыс</h1>
                <div className="form-control">
                    <input className="input input-alt" placeholder="Атыңыз" required type="text"/>
                    <span className="input-border input-border-alt"></span>
                </div>
                <div className="form-control">
                    <input className="input input-alt" placeholder="Телефон нөміріңіз" required type="number"/>
                    <span className="input-border input-border-alt"></span>
                </div>
                <button type="submit" className="cta" onClick={post}>
                    <span>Жіберу</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                </form>
            </div>
        </>
    );
}

export default Contact;