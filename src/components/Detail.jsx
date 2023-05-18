import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddCart from './AddCart'

const Detail = () => {
    const { id } = useParams()
    const [appState, setAppState] = useState();
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/Book/' + id + '/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
    
    
    if (!appState || appState.length === 0) return <p>Not founded</p>
    return (
        <>
            <div className="detail-content">
                <div className="nav-url">
                    <span>Басты бет</span> → Кітаптар → {appState.Book_name}
                </div>
                <div className="detail-info">
                    <div className="detail-img">
                        <img src={appState.photo}/>
                    </div>
                    
                    <AddCart data = {appState}/>
                </div>
            </div>
        </>
    );
}

export default Detail;