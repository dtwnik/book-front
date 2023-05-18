import axios from "axios";
import { useEffect, useState } from "react";


const ModalAdd = ({ active, setActive, data, price }) => {
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    let token = localStorage.getItem("token")
    let id = localStorage.getItem("id")
    let userId = ''
    if(id.length){
        userId = `http://127.0.0.1:8000/api/User/${id}/`
    }
    let firstname = localStorage.getItem("firstname")
    let lastname = localStorage.getItem("lastname")
    const refreshPage = () => {
        window.location.reload();
    }
    const postreq = () => {
        if (data.length !== 0 && address && city) {
            const book_list = data.map((value) => value.Book_name)
            const book_str = book_list.join(', ');
            axios.post(
                'http://127.0.0.1:8000/api/Order/', {
                    "city":city, "address": address, "buyers": userId, "book": book_str},{
                        headers:{
                            "Authorization": token
                        }
                }
            )
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            alert('Тапсырыс берілді')
            setActive(false)
            localStorage.removeItem('basket')
            refreshPage()    
        }, 500);
        
    };
    useEffect(() => {
        return () => {
            setIsLoading(false);
        };
    }, []);
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <span className='close' onClick={() => {
                        setActive(false)
                        refreshPage()
                    }}>X</span>
                    <form className="input-data3" onSubmit={handleSubmit}>
                        <h1>Курьермен жеткізу</h1>
                        <div className="confirm-info">
                            <span>Тегі: </span><h1>{lastname}</h1>
                            <span>Аты: </span><h1>{firstname}</h1>
                        </div>
                        <div className="form-control3">
                            <input className="input3 input-alt3" placeholder="Қала" required type="text" onChange={(e) => setCity(e.target.value)}/>
                            <span className="input-border3 input-border-alt3"></span>
                        </div>
                        <div className="form-control3">
                            <input className="input3 input-alt3" placeholder="Негізгі мекен-жай" required type="text"  onChange={(e) => setAddress(e.target.value)}/>
                            <span className="input-border3 input-border-alt3"></span>
                        </div>
                        <button type="submit" className="cta2" onClick={postreq}>
                            {isLoading ? <span>Loading...</span> : <span>Тапсырыс беру</span>}

                        </button>

                    </form>

                    <div className="price">
                        <div className="book">
                            <h2>Кітап атауы</h2>
                            <h2>Бағасы</h2>
                        </div>
                        {data.map((book) =>
                            <div key={book.Book_name} className='book'>
                                <h1>{book.Book_name}</h1>
                                <h1>{book.price} Тнг</h1>
                            </div>

                        )}
                        <div className="book">
                            <h2>Толық бағасы: {price} Тнг</h2>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ModalAdd;