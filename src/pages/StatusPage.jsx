import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Header from '../components/Header';

const StatusPage = () => {
    const token = `Token ${localStorage.getItem('token')}`
    const [appState, setAppState] = useState([]);
    const [isArrived, setIsArrived] = useState(false)
    const [username, setUsername] = useState("")
    const patchReq = (id) =>{
        const updatedIsArrived = true;
        setIsArrived(updatedIsArrived);
        axios.patch(id, { arrived: updatedIsArrived }, { headers: { Authorization: token } });
    }
    useEffect(() => {
        const login = localStorage.getItem("username")
        setUsername(login)
        const TicketUrl = 'http://127.0.0.1:8000/api/Order/';
        axios.get(TicketUrl, {
            headers: {
                "Authorization": token
            }
        }).then((resp) => {
            const allTicket = resp.data;
            setAppState(allTicket);
        });
    }, [appState,isArrived]);

    
    if(!appState || appState.length === 0)return <><Header/><p className='notdefined'>Тапсырыстарыңыз жоқ!</p></>
    return (
        <>
            <Header />
            <div className="input-form">
                <div className="nav-url">
                    <span>Басты бет</span> → Тапсырыстар
                </div>
            </div>
            <div className="order">
                <table>
                    <tr>
                        <th>Тапсырыс №</th>
                        <th>Тапсырыс беруші</th>
                        <th>Мекен-жайы</th>
                        <th className='txt'>Кітап атаулары</th>
                        <th>Жеткізу күні</th>
                        <th>Жеткізілді</th>
                        <th>Қайтарылу күні</th>
                        <th>Қайтарылды</th>
                    </tr>
                    {appState.map((book) =>
                        <tr>
                            <th className='txt'>{book.url.split('/')[5]}</th>
                            <th className='txt'>{username}</th>
                            <th className='txt'>{book.address}</th>
                            <th className='th txt'>{book.book}</th>
                            <th className='txt'>{book.created_at}</th>
                            {book.arrived ? <th className='success'>Жеткізілді</th>:<th className='confirm-btn' onClick={()=> patchReq(book.url) }>Растау</th>}
                            <th className='txt'>{book.due_date}</th>
                            {book.returned ? <th className='txt success'>Қайтарылды</th>:<th className='txt'>Қайтарылмады</th>}
                        </tr>
                    )}

                </table>
            </div>

        </>
    );
}

export default StatusPage;