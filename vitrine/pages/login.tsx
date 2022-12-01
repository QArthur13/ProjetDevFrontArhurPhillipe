import {NextPage} from "next";
import HeadComponent from "../components/HeadComponent";
import MainComponent from "../components/MainComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoginComponent from "../components/LoginComponent";

const Login: NextPage = () => {

    return (

        <div>
            <HeadComponent/>
            <HeaderComponent/>
            <LoginComponent/>
            <FooterComponent/>
        </div>

    );

};

export default Login;
