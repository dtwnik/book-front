import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ModalAdd from "../components/ModalAdd";

const CartPage = () => {
    const [modalActive, setModalActive] = useState(false)
    let basket = JSON.parse(localStorage.getItem('basket'))
    const [list, setList] = useState(basket);
    const [isAuth, setIsAuth] = useState(false)
    let totalBasketPrice = 0;

    if (basket) {
        totalBasketPrice = basket.reduce(
            (total, item) => total + item.price,
            0);
    }
    const deleteCart = (title) => {
        const newList = list.filter((item) => item.Book_name !== title);
        setList(newList);
        localStorage.setItem('basket', JSON.stringify(newList))
    }

    useEffect(() => {
        if (localStorage.getItem("username")) {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
    }, [list])
    const confirm = () => {
        if (isAuth && list.length > 0) {
            setModalActive(true)
        }
        else if (isAuth && list === 0) {
            alert("Себет бос")
        }
        else {
            alert("Аккаунтқа кіріңіз")
        }
    }
    return (
        <>
            <Header />
            <div className="order-list">
                {list?
                <>
                    <div className="cart-info">
                        <div className="cart-desc">
                            {list.map((clothe) =>
                                <div key={clothe.title} className="cartimg">
                                    <img src={clothe.photo}/>
                                    <div className="order-title">
                                        <h1>Кітап атауы:  <span>{clothe.Book_name}</span></h1>
                                        <h5>Авторы: {clothe.author}</h5>
                                        <h5>Цена: {clothe.price} Тнг</h5>
                                    </div>
                                    <button onClick={() => deleteCart(clothe.Book_name)}>Жою</button>
                                </div>
                                
                            )}
                        </div>
                    </div>
                    <div className="cart-price">
                        <div className="total-price">
                            <h1>Общяя стоимость: <span>{totalBasketPrice}</span> Тнг</h1>
                            <button onClick={confirm} className="adv-button"> Төлеу</button>
                            <ModalAdd active={modalActive} setActive={setModalActive} data={list} price={totalBasketPrice}></ModalAdd>
                            
                        </div>
                    </div></>
                :<><p className="notdefined">Себет бос!</p></>}

            </div>

            <Footer/>

        </>
    );
}

export default CartPage;