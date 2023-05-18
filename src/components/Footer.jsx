import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <img className="logo" src={logo}/>
                <ul className="menu">
                    <li><span>Мәзір</span></li>
                    <li><Link to={'/'}>Басты бет</Link></li>
                    <li><Link to={'/cart/'}>Себет</Link></li>
                    <li><Link to={'http://127.0.0.1:8000/admin/'}>Админ панель</Link></li>
                </ul>
                <ul className="contact">
                    <li><span>Байланыс</span></li>
                    <li>+7 771 392 0201</li>
                    <li>allbook@mail.ru</li>
                </ul>
            </section>
        </>
    );
}

export default Footer;