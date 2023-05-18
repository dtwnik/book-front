import axios from 'axios'
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import Nav from './Nav';

const AllBook = () => {
    const [appState, setAppState] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/Book/').then((resp) => {
        const allPersons = resp.data;
        setAppState(allPersons);
      });
    }, [setAppState]);
    if(!appState || appState.length === 0)return <p>Not founded</p>
    return (
        <>
        <div className="full-content">
            <Nav/>
            <div className="div-content">
                {appState.map((Book) => 
                    <div key={Book.id}>
                        <div className="card">
                            <BookCard Book={Book}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
        
        </>
    );
}

export default AllBook;