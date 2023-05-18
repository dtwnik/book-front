import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <>
            <Header/>
            <div className="input-form">
                <LoginForm/> 
            </div>
        </>
    );
}

export default LoginPage;