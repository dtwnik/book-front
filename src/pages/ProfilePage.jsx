import Header from "../components/Header";
import user from '../assets/img/user.png'
import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
    const [modalActive, setModalActive] = useState(false)
    const [appState, setAppState] = useState([]);
    const token = `Token ${localStorage.getItem('token')}`
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [totalValue, setTotalValue] = useState(0);
    let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
    let firstname = localStorage.getItem("firstname")
    let lastname = localStorage.getItem("lastname")
    let userId = localStorage.getItem("id")
    let userLink = `http://127.0.0.1:8000/api/Deposite/${userId}/`
    useEffect(() => {
        axios.get(userLink, {
            headers: {
                "Authorization": token
            }
        }).then((resp) => {
            const allTicket = resp.data;
            setAppState(allTicket);
            const previousTotalValue = resp.data.deposite;
            if (previousTotalValue) {
                setTotalValue(parseFloat(previousTotalValue));
            }
        });
        
            
    }, [setAppState]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddToCart = () => {
        const parsedInputValue = parseFloat(inputValue);
        if (!isNaN(parsedInputValue)) {
            const newTotalValue = totalValue + parsedInputValue;
            setTotalValue(newTotalValue);
            localStorage.setItem('deposite', newTotalValue);
            setInputValue('');
            setModalActive(true)
            setTimeout(() => {
                alert('Тапсырыс берілді')
                setModalActive(false)
            }, 1000);
            axios.patch(userLink, { deposite: newTotalValue }, { headers: { Authorization: token } });
        }
    };
    const add = () => {
        setShowInput(!showInput);
    }
    return (
        <>
            <Header />

            <div className="input-form">
                <div className="nav-url">
                    <span>Басты бет</span> → Профиль
                </div>
                <div className="profile-content">
                    <div className="profile-header">
                        Профиль
                    </div>
                    <div className="profile-img">
                        <img src={user} />
                        <h1>{username}</h1>
                    </div>
                    <div className="profile-info">
                        <div className="profile-email">
                            <span>Email: </span>
                            <h1>{email}</h1>
                        </div>
                        <div className="profile-email">
                            <span>Толық аты-жөні: </span>
                            <h1>{lastname}  {firstname}</h1>
                        </div>
                        <div className="profile-email">
                            <span>Депозит: </span>
                            <h1>{totalValue} Тнг</h1>
                        </div>
                        <button className="profile-button" onClick={add}>
                            <span className="button_top"> Толықтыру
                            </span>

                        </button>


                    </div>
                    {showInput &&
                        <div className="input-wrapper">
                            <input type="number" placeholder="Сомманы енгізіңіз" name="text" className="input2" onChange={handleInputChange} />
                            <button className='adv-button2' onClick={handleAddToCart}>Депозитка қосу</button>

                        </div>
                    }

                </div>
            </div>
            <div className={modalActive ? "modal active" : "modal"}><div className="loader"></div></div>
        </>
    );
}

export default ProfilePage;