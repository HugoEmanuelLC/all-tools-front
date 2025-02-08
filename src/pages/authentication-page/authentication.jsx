// Dependencies

// Component
import LoginPage from "./components/login-page";
import RegisterPage from "./components/register-page";
import ForgotPasswordPage from "./components/forgot-password-page";
// Scripts

// Hooks Parent from App.jsx


function Authentication(props) {

    switch (props.url) {
        case "login":
            return <LoginPage />;

        case "register":
            return <RegisterPage />;

        case "forgot-password":
            return <ForgotPasswordPage />;

        default:
            return null;
    }
}

export default Authentication;
