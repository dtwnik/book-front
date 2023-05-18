import Header from '../components/Header';
import Adv from '../components/Advert';
import '../css/MainPage.css'
import Psychology from '../components/Psychology';
import Footer from '../components/Footer';
import Classic from '../components/Classic';

const MainPage = () => {
    return (
        <>
            <Header/>
            <Adv/>
            <div className="content">
                <Psychology/> 
                <Classic/>
            </div>
            <Footer/>
            
        </>
    );
}

export default MainPage;