import axios from 'axios'
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Psychology = () => {
    const [appState, setAppState] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/Book/', { 
        params: {
            genre : "Психология"
        }
    }).then((resp) => {
        const allPersons = resp.data;
        setAppState(allPersons);
      });
    }, [setAppState]);

    if(!appState || appState.length === 0)return <p>Not founded</p>
    return (
        <>
            <section className="section">
                <div className="div-title">
                    <span>Психология жанрында танымал</span>
                </div>
                <div className="div-content">
                    {appState.map((Book) => 
                        <div key={Book.url}>
                            <div className="card">
                                <BookCard book={Book}/>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Psychology;