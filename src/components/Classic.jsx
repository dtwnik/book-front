import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Classic = () => {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/Book/', {
          params: {
            genre: 'Классика',
          },
        });
        setAppState(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!appState || appState.length === 0) {
    return <p>Not found</p>;
  }

  return (
    <>
      <section className="section">
        <div className="div-title">
          <span>Қазақша классика жанрында танымал</span>
        </div>
        <div className="div-content">
          {appState.map((book) => (
            <div key={book.url}>
              <div className="card">
                <BookCard book={book} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Classic;
