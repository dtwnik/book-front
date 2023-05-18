// import { Link } from 'react-router-dom'
// const BookCard = ({Book}) => {
    
//     const id = Book.url.split('/')[5]
//     return (
//         <>
//             <div className="card-img">
//                 <img src={Book.photo}/>
//             </div>
//             <Link to={'/Book/' + id + '/'}>
//                 <div className="card-desc">
//                     <h1>Автор: {Book.Book_name}</h1>
//                     <h1>Жанр: {Book.genre}</h1>
//                     <span>{Book.price} Тнг</span>
//                 </div>
//             </Link>
//         </>
//     );
// }

// export default BookCard;


import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  if (!book) {
    return null; // or you can return a placeholder component or message
  }

  const id = book.url.split('/')[5];

  return (
    <div>
      <div className="card-img">
        <img src={book.photo} alt={book.Book_name} />
      </div>
      <Link to={`/Book/${id}/`}>
        <div className="card-desc">
          <h1>Автор: {book.Book_name}</h1>
          <h1>Жанр: {book.genre}</h1>
          <span>{book.price} Тнг</span>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
