import { Link } from 'react-router-dom'
const BookCard = ({Book}) => {
    const id = Book.url.split('/')[5]
    return (
        <>
            <div className="card-img">
                <img src={Book.photo}/>
            </div>
            <Link to={'/Book/' + id + '/'}>
                <div className="card-desc">
                    <h1>Автор: {Book.Book_name}</h1>
                    <h1>Жанр: {Book.genre}</h1>
                    <span>{Book.price} Тнг</span>
                </div>
            </Link>
        </>
    );
}

export default BookCard;