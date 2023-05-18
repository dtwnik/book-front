import Header from "../components/Header";
import user from '../assets/img/user.png'
import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
    // let dep = JSON.parse(localStorage.getItem('deposit'))
    const token = `Token ${localStorage.getItem('token')}`
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [totalValue, setTotalValue] = useState(0);
    let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
    let firstname = localStorage.getItem("firstname")
    let lastname = localStorage.getItem("lastname")
    let userId = localStorage.getItem("id")
    let userLink = 'http://127.0.0.1:8000/api/User/' + userId + '/'
    console.log(userLink)
    useEffect(() => {
        const previousTotalValue = localStorage.getItem('totalValue');
        if (previousTotalValue) {
            setTotalValue(parseFloat(previousTotalValue));
        }
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddToCart = () => {
        const parsedInputValue = parseFloat(inputValue);
        if (!isNaN(parsedInputValue)) {
            const newTotalValue = totalValue + parsedInputValue;
            setTotalValue(newTotalValue);
            localStorage.setItem('deposit', newTotalValue);
            setInputValue('');
            console.log(totalValue)
            axios.patch(userLink, { Deposit: totalValue });
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
                            <span class="button_top"> Толықтыру
                            </span>

                        </button>


                    </div>
                    {showInput &&
                        <div class="input-wrapper">
                            <input type="number" placeholder="Сомманы енгізіңіз" name="text" class="input2" onChange={handleInputChange} />
                            <button className='adv-button2' onClick={handleAddToCart}>Депозитка қосу</button>

                        </div>
                    }

                </div>
            </div>
        </>
    );
}

export default ProfilePage;