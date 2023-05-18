import {Routes,Route} from "react-router-dom"
import MainPage from "./pages/MainPage";
import Book from "./pages/Book";
import BookDetails from "./pages/BookDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import Contact from "./pages/Contact";
import ProfilePage from "./pages/ProfilePage";
import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/Book/' element={<Book/>} />
        <Route path='/Book/:id' element={<BookDetails/>} />
        <Route path='/register/' element={<RegisterPage/>} />
        <Route path='/login/' element={<LoginPage/>} />
        <Route path='/cart/' element={<CartPage/>} />
        <Route path='/contact/' element={<Contact/>} />
        <Route path='/profile/' element={<ProfilePage/>} />
        <Route path='/status/' element={<StatusPage/>} />
      </Routes>
    </div>
  );
}

export default App;
